import React from "react";
import { Select, Typography } from "antd";
const { Option } = Select;
const { Text } = Typography;

const Filter = props => {
  return (
    <>
      <Text style={{ margin: 10 }}>Show</Text>
      <Select
        style={{ width: "10%", marginBottom: 30 }}
        defaultValue="All"
        onChange={props.select}
      >
        <Option value="all">All</Option>
        <Option value="active">Active</Option>
        <Option value="archived">Archived</Option>
      </Select>
    </>
  );
};

export default Filter;
