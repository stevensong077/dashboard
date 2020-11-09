import React from "react";
import { Table, Space, Tag } from "antd";
import { connect } from "react-redux";
import actions from "../redux/customers/actions";

const Customers = (props) => {
  const { data, removeCustomer } = props;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Signup Date",
      dataIndex: "signup",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (data) => {
        if (data == "active") {
          return <Tag color="green">{data}</Tag>;
        } else {
          return <Tag color="red">{data}</Tag>;
        }
      },
    },
    {
      title: "Operation",
      render: (data, record) => (
        <Space size="middle">
          <a >Edit</a>
          <a onClick={() => handldRemove(record.phone)}>remove</a>
        </Space>
      ),
    },
  ];
  const handldRemove = (phone) => {
    removeCustomer(phone);
  };
  return <Table columns={columns} dataSource={data} />;
};

const { removeCustomer } = actions;

// export default Customers;
export default connect(
  (state) => {
    const { data } = state.Customers;
    return {
      data,
    };
  },
  { removeCustomer },
  null
)(Customers);
