import React from "react";
import {
  Form,
  Select,
  InputNumber,
  Radio,
  Button,
  // Upload,
  Input,
  Tag,
} from "antd";
// import { UploadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import actions from "../redux/items/actions";
import fbs from "../utils/firebase";
const { firestore } = fbs;
const db = firestore;

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

// const normFile = e => {
//   console.log("Upload event:", e);
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e && e.fileList;
// };

const AddItem = (props) => {
  const { submit } = props;
  const onFinish = async (values) => {
    submit(values);
    let maxValue = 0;

    await db
      .collection("products")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // console.log(doc.data());
          if (doc.data().key > maxValue) {
            maxValue = doc.data().key;
          }
        });
      });

    values.key = maxValue + 1;
    for (let i in values) {
      if (values[i] === undefined) {
        values[i] = "";
      }
    }
    console.log(values.key);
    // db.collection("products").add(values);
    db.collection("products").doc(JSON.stringify(values.key)).set(values);
  };

  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <Form
      style={{ paddingTop: 50 }}
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
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
          min={0}
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
          min={0}
          formatter={(value) =>
            `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
          }
          parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item name="categories" label="category" hasFeedback>
        <Select placeholder="Please select a country">
          <Option value="china">Chinese-TOFU</Option>
          <Option value="japan">Japanese-TOFU</Option>
          <Option value="korea">Korean-TOFU</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[{ required: true, message: "Please select the status!" }]}
      >
        <Radio.Group>
          <Radio value="active">
            <Tag color="#87d068">active</Tag>
          </Radio>
          <Radio value="archived">
            <Tag color="#f50">archived</Tag>
          </Radio>
        </Radio.Group>
      </Form.Item>
      {/* <Form.Item
        name="upload"
        label="Upload Image"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}
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

const { submit } = actions;

// export default AddItem;
export default connect(
  (state) => {
    const { data } = state.Items;
    return {
      data, // .filter((item)=> item.status === active),
    };
  },
  { submit },
  null
)(AddItem);
