import React, { Fragment } from "react";
import { Typography, Input } from "antd";
const { Text } = Typography;

const SearchBox = props => {
  return (
    <Fragment>
      <Text style={{ marginLeft: 80, marginRight: 10 }}>Search</Text>
      <Input
        placeholder="Search customer's name, email or phone"
        style={{ width: "22%", marginBottom: 30 }}
        onPressEnter={e => props.search(e)}
      />
    </Fragment>
  );
};

export default SearchBox;
