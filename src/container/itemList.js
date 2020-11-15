import React, { useState } from "react";
import { Table, Tag, Space, Input, Button } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const ItemList = props => {
  const { data } = props;
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  let searchInput = React.createRef();
  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
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
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      )
  });
  const columns = [
    {
      title: "Item Image",
      dataIndex: "image"
    },
    {
      title: "SKU",
      dataIndex: "sku",
      ...getColumnSearchProps("sku")
    },
    {
      title: "Item Name",
      dataIndex: "name",
      ...getColumnSearchProps("name")
    },
    {
      title: "Price($)",
      dataIndex: "price"
    },
    {
      title: "Discount Price($)",
      dataIndex: "discount"
    },
    {
      title: "Stock",
      dataIndex: "stock"
    },
    {
      title: "Categories",
      dataIndex: "categories",
      render: data => <Tag color="geekblue">{data}</Tag>
    },
    {
      title: "Status",
      dataIndex: "status",
      render: data => {
        if (data === "active") {
          return <Tag color="green">{data}</Tag>;
        } else {
          return <Tag color="red">{data}</Tag>;
        }
      }
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
      )
    }
  ];

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(...selectedKeys);
    setSearchedColumn(dataIndex);
  };

  const handleReset = clearFilters => {
    clearFilters();
    setSearchText("");
  };

  return <Table columns={columns} dataSource={data} />;
};

export default connect(
  state => {
    const { data } = state.Items;
    return {
      data // .filter((item)=> item.status === active),
    };
  },
  {},
  null
)(ItemList);
