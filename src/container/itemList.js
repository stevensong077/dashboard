import React, { useState } from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Item Image",
    dataIndex: "image",
  },
  {
    title: "SKU",
    dataIndex: "sku",
  },
  {
    title: "Item Name",
    dataIndex: "name",
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Discount Price",
    dataIndex: "discount",
  },
  {
    title: "Stock",
    dataIndex: "stock",
  },
  {
    title: "Categories",
    dataIndex: "categories",
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
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    sku: 9826387462834,
    name: `Ourhome Soft Tofu340g ${i}`,
    price: "$3.42",
    discount: "$2.51",
    stock: "245",
    categories: <Tag color="green">KOREAN-TOFU</Tag>,
    status: <Tag color="#87d068">active</Tag>,
  });
}

const Customers = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (selectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
  };

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
