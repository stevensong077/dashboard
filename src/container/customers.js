import React, { useState } from "react";
import { Table, Space, Tag, Input, Form, Popconfirm, Typography } from "antd";
import { connect } from "react-redux";
import actions from "../redux/customers/actions";
// const { Text } = Typography;
const Customers = (props) => {
  const { originData, removeCustomer } = props;
  const handldRemove = (phone) => {
    removeCustomer(phone);
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

  const EditableTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState("");

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
      form.setFieldsValue({
        ...record,
      });
      setEditingKey(record.key);
    };

    const cancel = () => {
      setEditingKey("");
    };

    const save = async (key) => {
      try {
        const row = await form.validateFields();
        const newData = [...data];
        const index = newData.findIndex((item) => key === item.key);

        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...row });
          setData(newData);
          setEditingKey("");
        } else {
          newData.push(row);
          setData(newData);
          setEditingKey("");
        }
      } catch (errInfo) {
        console.log("Validate Failed:", errInfo);
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
                onConfirm={() => save(record.key)}
                okText="Yes"
                cancelText="No"
              >
                <a>Save</a>
              </Popconfirm>
              <Popconfirm
                title="Your changes won't be saved."
                onConfirm={cancel}
                okText="Yes"
                cancelText="No"
              >
                <a>Cancel</a>
              </Popconfirm>
            </Space>
          ) : (
            <Space size="middle">
              <a disabled={editingKey !== ""} onClick={() => edit(record)}>
                Edit
              </a>
              <Popconfirm
                title="Sure to remove this customer?"
                onConfirm={() => handldRemove(record.phone)}
                okText="Yes"
                cancelText="No"
              >
                <a>Remove</a>
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
          dataSource={data}
          columns={mergedColumns}
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
  };

  return <EditableTable />;
};

const { removeCustomer } = actions;

// export default Customers;
export default connect(
  (state) => {
    const { data } = state.Customers;
    return {
      originData: data,
    };
  },
  { removeCustomer },
  null
)(Customers);
