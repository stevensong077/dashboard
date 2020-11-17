import React, { useState } from "react";
import { Typography, Input, Button } from "antd";
const { Text } = Typography;

const SearchBox = props => {
  const [inputValue, setInputValue] = useState("");
  // const handleClick = () => {
  //   console.log(1111);
  //   console.log(inputValue);
  // };
  return (
    <>
      <Text style={{ marginLeft:80,  marginRight: 10 }}>Search</Text>
      <Input
        placeholder={props.text}
        style={{ width: "22%", marginBottom: 30 }}
        onChange={e => setInputValue(e.target.value)}
        onPressEnter={e => props.search(e.target.value)}
      />
      {/* <Button onClick={inputValue => props.search(inputValue)}>Submit</Button> */}
    </>
  );
};

export default SearchBox;
