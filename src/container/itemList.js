import React, { useState, useEffect } from "react";
import { Table, Tag, Space, Input, Button, Spin, Form, Popconfirm } from "antd";
import SearchBox from "../component/SearchBox";
import Filter from "../component/Filter";
import { find } from "../utils/utils";
import { ReloadOutlined } from "@ant-design/icons";

import { connect } from "react-redux";
import fbs from "../utils/firebase";
import EditableCell from "../component/EditableCell";
const { firestore } = fbs;
const db = firestore;

const ItemList = (props) => {
  // const { data } = props;
  const [isFetchingData, setIsFetchingData] = useState(false);
  const [dataset, setDataset] = useState([]);
  useEffect(() => getData(), []);

  const searchHandler = (value) => {
    const newSet = dataset.filter(
      (item) => find(item.name, value) || find(item.sku, value)
    );
    setDataset(newSet);
  };

  const selectHandler = async(value) => {
    const originData = await getData()
    if (value === "active") {
      const newSet = originData.filter((item)=>item.status==="active")
      setDataset(newSet);
    }else if (value === "archived") {
      const newSet = originData.filter((item)=>item.status==="archived")
      setDataset(newSet);
    }
  };
  const EditableTable = (props) => {
    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState("");
    const isEditing = (record) => record.key === editingKey;
    const editHandler = (record) => {
      form.setFieldsValue({
        ...record,
      });
      setEditingKey(record.key);
    };

    const cancelHandler = () => {
      setEditingKey("");
    };

    const RemoveHandler = (key) => {
      db.collection("products")
        .doc(JSON.stringify(key))
        .delete()
        .then(() => {
          return db.collection("products").get();
        })
        .then((products) => {
          const newArr = [];
          products.forEach((doc) => {
            newArr.push(doc.data());
          });
          return newArr;
        })
        .then((newArr) => {
          setDataset(newArr);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const saveHander = async (key) => {
      const row = await form.validateFields();
      row.key = key;
      for (let i in row) {
        if (row[i] === undefined) {
          row[i] = "";
        }
      }
      db.collection("products")
        .doc(JSON.stringify(key))
        .set(row)
        .then(() => {
          return db.collection("products").get();
        })
        .then((products) => {
          const newArr = [];
          products.forEach((doc) => {
            newArr.push(doc.data());
          });
          return newArr;
        })
        .then((newArr) => setDataset(newArr));
      setEditingKey("");
    };
    const columns = [
      {
        title: "Item Image",
        dataIndex: "image",
        editable: true,
      },
      {
        title: "SKU",
        dataIndex: "sku",
        editable: true,
      },
      {
        title: "Item Name",
        dataIndex: "name",
        editable: true,
      },
      {
        title: "Price($)",
        dataIndex: "price",
        editable: true,
      },
      {
        title: "Discount Price($)",
        dataIndex: "discount",
        editable: true,
      },
      {
        title: "Stock",
        dataIndex: "stock",
        editable: true,
      },
      {
        title: "Categories",
        dataIndex: "categories",
        render: (data) => <Tag color="geekblue">{data}</Tag>,
        editable: true,
      },
      {
        title: "Status",
        dataIndex: "status",
        editable: true,
        render: (data) => {
          if (data === "active") {
            return <Tag color="green">{data}</Tag>;
          } else {
            return <Tag color="red">{data}</Tag>;
          }
        },
      },
      {
        title: "Comment",
        dataIndex: "comment",
        editable: true,
      },
      {
        title: "Operation",
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <Space size="middle">
              <Popconfirm
                title="Your changes will be saved."
                onConfirm={() => saveHander(record.key)}
                okText="Yes"
                cancelText="No"
              >
                <a href>Save</a>
              </Popconfirm>
              <Popconfirm
                title="Your changes won't be saved."
                onConfirm={cancelHandler}
                okText="Yes"
                cancelText="No"
              >
                <a href>Cancel</a>
              </Popconfirm>
            </Space>
          ) : (
            <Space size="middle">
              <a
                href
                disabled={editingKey !== ""}
                onClick={() => editHandler(record)}
              >
                Edit
              </a>
              <Popconfirm
                title="Sure to remove this customer?"
                onConfirm={() => RemoveHandler(record.key)}
                okText="Yes"
                cancelText="No"
              >
                <a href disabled={editingKey !== ""}>
                  Remove
                </a>
              </Popconfirm>
            </Space>
          );
        },
      },
    ];

    const mergedColumns = columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          inputType: "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: isEditing(record),
        }),
      };
    });
    return (
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={props.initialData}
          columns={mergedColumns}
          pagination={{
            onChange: cancelHandler,
          }}
        />
      </Form>
    );
  };

  const getData = async () => {
    const arr = [];
    setIsFetchingData(true);
    await db
      .collection("products")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          arr.push(doc.data());
        });
      });
    setIsFetchingData(false);
    setDataset(arr);
    return arr
  };

  return (
    <Spin spinning={isFetchingData}>
      <Filter select={selectHandler} />
      <SearchBox search={searchHandler}text={"Search item's name or SKU"} />
      <Button
        style={{ float: "right", borderRight: 50 }}
        type="primary"
        icon={<ReloadOutlined />}
        onClick={() => window.location.reload()}
      >
        Reload
      </Button>
      <EditableTable initialData={dataset} />
    </Spin>
  );
};

export default ItemList;

// export default connect(
//   (state) => {
//     const { data } = state.Items;
//     return {
//       data, // .filter((item)=> item.status === active),
//     };
//   },
//   {},
//   null
// )(ItemList);
