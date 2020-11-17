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
        //   rules={[
        //     {
        //       required: true,
        //       message: `Please Input ${title}!`,
        //     },
        //   ]}
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
