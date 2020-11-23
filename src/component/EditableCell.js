import React from "react";
import { Form, Input } from "antd";

const EditableCell = ({ editing, dataIndex, title, children }) => {
  return (
    <td>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
        >
          <Input />
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
export default EditableCell;
