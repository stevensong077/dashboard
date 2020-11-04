import React, { useState } from "react";
import { Table, Tag, Space, Input, Button } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

const Customers = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  let searchInput = React.createRef();
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Item Image",
      dataIndex: "image",
    },
    {
      title: "SKU",
      dataIndex: "sku",
      ...getColumnSearchProps("sku"),
    },
    {
      title: "Item Name",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Price($)",
      dataIndex: "price",
      sorter: {
        compare: (a, b) => a.price - b.price,
      },
    },
    {
      title: "Discount Price($)",
      dataIndex: "discount",
      sorter: {
        compare: (a, b) => a.price - b.price,
      },
    },
    {
      title: "Stock",
      dataIndex: "stock",
      sorter: {
        compare: (a, b) => a.stock - b.stock,
      },
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
      title: "Comment",
      dataIndex: "comment",
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
    const discount = (Math.random() * 10).toFixed(2);
    let categoriesArr = [
      <Tag color="geekblue">KOREAN-TOFU</Tag>,
      <Tag color="geekblue">Chinese-TOFU</Tag>,
      <Tag color="geekblue">Japanese-TOFU</Tag>,
    ];
    let indexCate = Math.floor(Math.random() * categoriesArr.length);
    let statusArr = [
      <Tag color="#87d068">active</Tag>,
      <Tag color="#f50">archived</Tag>,
    ];
    let indexSta = Math.floor(Math.random() * statusArr.length);
    let comArr = ["", "in large demand", ""];
    let indexCom = Math.floor(Math.random() * comArr.length);
    data.push({
      key: i,
      sku: Math.floor(100000000000 + Math.random() * 900000000000),
      name: `Ourhome Soft Tofu340g ${i}`,
      price: (discount * 1.5).toFixed(2),
      discount: discount,
      stock: parseInt(Math.random() * 10000),
      categories: categoriesArr[indexCate],
      status: statusArr[indexSta],
      comment: comArr[indexCom],
    });
  }

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  return <Table columns={columns} dataSource={data} />;
};

export default Customers;
