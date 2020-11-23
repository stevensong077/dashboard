import React, { useState } from "react";
import { Typography, Input, Button } from "antd";
const { Text } = Typography;

const SearchBox = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    props.search(inputValue)
    console.log(inputValue);
  };
  return (
    <>
      <Text style={{ marginLeft: 80, marginRight: 10 }}>Search</Text>
      <Input
        placeholder={props.text}
        style={{ width: "22%", marginBottom: 30 }}
        onChange={(e) => (setInputValue(e.target.value) , console.log(inputValue))}
        onPressEnter={(e) => props.search(e.target.value)}
      />
      <Button onClick={ ()=>handleClick()}>Submit</Button>
    </>
  );
};

export default SearchBox;
