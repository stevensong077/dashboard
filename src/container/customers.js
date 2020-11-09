import React from "react";
import { Table} from "antd";
import { connect } from "react-redux";

const Customers = (props) => {
  const { columns, data } = props;
  return <Table columns={columns} dataSource={data} />;
};

// export default Customers;
export default connect((state) => {
  const { columns, data } = state.Customers;
  return {
    columns,
    data,
  };
}, null)(Customers);
