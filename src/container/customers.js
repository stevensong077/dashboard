import React, { Fragment, useState } from "react";
import Filter from "../component/Filter";
import SearchBox from "../component/SearchBox";
import "./customer.css";
import {
  Table,
  Space,
  Tag,
  Input,
  Form,
  Popconfirm,
  Button,
  // Typography,
} from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import actions from "../redux/customers/actions";

// const { Text } = Typography;
const Customers = (props) => {
  const {
    originData,
    removeCustomer,
    saveChanges,
    filterCustomers,
    searchCustomer,
  } = props;

  const selectHandler = (value) => {
    filterCustomers(value);
  };
  const searchHandler = (value) => {
    // console.log(value);
    searchCustomer(value);
  };

  const EditableCell = ({ editing, dataIndex, title, children }) => {
    return (
      <td>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            <Input />
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
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
      removeCustomer(key);
    };

    const saveHander = async (key) => {
      try {
        const row = await form.validateFields();
        saveChanges(key, row);
        setEditingKey("");
      } catch (err) {
        console.log("Validate Failed: ", err);
      }
    };
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        editable: true,
      },
      {
        title: "Email",
        dataIndex: "email",
        editable: true,
      },
      {
        title: "Phone",
        dataIndex: "phone",
        editable: true,
      },
      {
        title: "Address",
        dataIndex: "address",
        editable: true,
      },
      {
        title: "Signup Date",
        dataIndex: "signup",
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
              <a href
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
                <a href disabled={editingKey !== ""}>Remove</a>
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

  return (
    <Fragment>
      <Filter select={selectHandler} />
      <SearchBox search={searchHandler} />
      <Button
        style={{ float: "right", borderRight: 50 }}
        type="primary"
        shape="round"
        icon={<ReloadOutlined />}
        onClick={() => window.location.reload()}
      >
        Reload
      </Button>
      <EditableTable initialData={originData} />
    </Fragment>
  );
};

const {
  removeCustomer,
  saveChanges,
  filterCustomers,
  searchCustomer,
} = actions;

export default connect(
  (state) => {
    const { data } = state.Customers;
    return {
      originData: data, // .filter((item)=> item.status === active),
    };
  },
  { removeCustomer, saveChanges, filterCustomers, searchCustomer },
  null
)(Customers);
