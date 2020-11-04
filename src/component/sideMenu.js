import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  CarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
  AccountBookOutlined,
  BarsOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const Sider = () => {

  const theme = "dark";
  const [current, setCurrent] = useState("1");
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        theme={theme}
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={["sub1", "sub2", "sub4", "sub5", "sub6", "sub7"]}
        selectedKeys={[current]}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          icon={<UserOutlined />}
          title={<Link to="/customers">Customers</Link>}
        ></SubMenu>
        <SubMenu key="sub2" icon={<ShoppingOutlined />} title="Goods">
          <Menu.Item key="3">
            <Link to="/itemList">Item List</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/addItem">Add Item</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          icon={<ShoppingCartOutlined />}
          title="Cart"
        ></SubMenu>
        <SubMenu
          key="sub5"
          icon={<AccountBookOutlined />}
          title="Order"
        ></SubMenu>
        <SubMenu key="sub6" icon={<CarOutlined />} title="Delivery">
          <Menu.Item key="6">
            {" "}
            <Link to="/timeSlot">Delivery Solt</Link>
          </Menu.Item>
          <Menu.Item key="7">Delivery Fee</Menu.Item>
        </SubMenu>
        <SubMenu key="sub7" icon={<BarsOutlined />} title="Category">
          <Menu.Item key="8">Add Categories</Menu.Item>
          <Menu.Item key="9">Edit Categories</Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sider;
