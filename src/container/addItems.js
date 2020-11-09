import React from 'react';
import {
  Form,
  Select,
  InputNumber,
  Radio,
  Button,
  Upload,
  Input,
  Tag,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const AddItem = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onChange = (value) => {
    console.log("changed", value);
  };
  return (
    <Form
      style={{paddingTop: 50}}
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        ["input-number"]: 3,
        ["checkbox-group"]: ["A", "B"],
        rate: 3.5,
      }}
    >
      {" "}
      <Form.Item
        label="SKU"
        name="sku"
        rules={[{ required: true, message: "Please enter the SKU!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Item Name"
        name="name"
        rules={[{ required: true, message: "Please enter item name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please enter a price!" }]}
      >
        <InputNumber
          formatter={(value) =>
            `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item
        label="Stock"
        name="stock"
        rules={[{ required: true, message: "Please enter the stock!" }]}
      >
        <InputNumber
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item name="Category" label="category" hasFeedback>
        <Select placeholder="Please select a country">
          <Option value="china">Chinese-TOFU</Option>
          <Option value="japan">Japanese-TOFU</Option>
          <Option value="korea">Korean-TOFU</Option>
        </Select>
      </Form.Item>
      <Form.Item name="radio-group" label="Status" rules={[{ required: true }]}>
        <Radio.Group defaultValue={"a"}>
          <Radio value="a">
            <Tag color="#87d068">active</Tag>
          </Radio>
          <Radio value="b">
            <Tag color="#f50">archived</Tag>
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="upload"
        label="Upload Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item label="Comment" name="comment">
        <TextArea showCount maxLength={100} />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddItem;
