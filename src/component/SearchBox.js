import React, { Fragment, useState } from "react";
import { Typography, Input, Button } from "antd";
const { Text } = Typography;

const SearchBox = props => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    console.log(1111);
    console.log(inputValue);
  };
  return (
    <Fragment>
      <Text style={{ marginLeft: 80, marginRight: 10 }}>Search</Text>
      <Input
        placeholder="Search customer's name, email or phone"
        style={{ width: "22%", marginBottom: 30 }}
        onChange={e => setInputValue(e.target.value)}
        onPressEnter={e => props.search(e.target.value)}
      />
      {/* <Button onClick={inputValue => props.search(inputValue)}>Submit</Button> */}
    </Fragment>
  );
};

export default SearchBox;
