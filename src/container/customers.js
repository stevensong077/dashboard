import React, { useState } from "react";

import { Table,Tag ,Space} from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  { title: "Phone", dataIndex: "phone" },
  {
    title: "Address",
    dataIndex: "address",
  },{
    title:"Signup Date",
    dataIndex:"signup"
  },{
    title:"Status",
    dataIndex:"tag"
  },{
    title:"Operation",
    dataIndex:"opeartion",
    render:()=>(
      <Space size="middle">
        <a>Delete</a>
      </Space>
    )
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    email: "daskhdj@gmail.com",
    phone: "0435432330",
    address: `London, Park Lane no. ${i}`,
    signup:"17/06/2019",
    tag: <Tag color="green">active</Tag>
  });
}

const Customers = () => {
  //   state = {
  //     selectedRowKeys: [], // Check here to configure the default column
  //   };
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    // this.setState({ selectedRowKeys });
    setSelectedRowKeys(selectedRowKeys);
  };

  // const { selectedRowKeys } = this.state;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          // this.setState({ selectedRowKeys: newSelectedRowKeys });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          // this.setState({ selectedRowKeys: newSelectedRowKeys });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
  );
};

export default Customers;
// ReactDOM.render(<App />, mountNode);
