import { Tag, Space } from "antd";
const arr = [
  <Tag color="#87d068">active</Tag>,
  <Tag color="#f50">archived</Tag>,
];

const defaultState = {
  columns: [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Signup Date",
      dataIndex: "signup",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Operation",
      dataIndex: "opeartion",
      render: () => (
        <Space size="middle">
          <a>Edit</a>
        </Space>
      ),
    },
  ],

  data: [
    {
      key: 1,
      name: "Edward King",
      email: Math.random().toString(36).substr(2) + "@gmail.com",
      phone: "04" + Math.floor(10000000 + Math.random() * 90000000),
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: arr[0],
    },
    {
      key: 2,
      name: "Edward Steve",
      email: Math.random().toString(36).substr(2) + "@gmail.com",
      phone: "04" + Math.floor(10000000 + Math.random() * 90000000),
      address: "London, Park Lane no.1",
      signup: "17/06/2019",
      status: arr[1],
    },
  ],

  // dataPush =()=>{
  //   for (let i = 0; i < 46; i++) {
  //     let index = Math.floor(Math.random() * arr.length);
  //     data.push({
  //       key: i,
  //       name: `Edward King ${i}`,
  //       email: Math.random().toString(36).substr(2) + "@gmail.com",
  //       phone: "04" + Math.floor(10000000 + Math.random() * 90000000),
  //       address: `London, Park Lane no. ${i}`,
  //       signup: "17/06/2019",
  //       status: arr[index],
  //     });
  //   }}
};

export default () => defaultState;
