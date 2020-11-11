import React, { Fragment } from "react";
import { Select, Typography } from "antd";
const { Option } = Select;
const { Text } = Typography;

const Filter = (props) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Filter;
