import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import { Menu } from "antd";
import {
  CarOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ShoppingOutlined,
  AccountBookOutlined,
  BarsOutlined
} from "@ant-design/icons";
import AddItem from "../container/addItems";

const { SubMenu } = Menu;

class Sider extends React.Component {
  state = {
    theme: "dark",
    current: "1"
  };
  

  changeTheme = value => {
    this.setState({
      theme: value ? "dark" : "light"
    });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    // let match = useRouteMatch();

    return (
      <Router>
        <div>
          {/* <> */}
          {/* <Switch
          checked={this.state.theme === "dark"}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */}
          <br />
          <br />
          <Menu
            theme={this.state.theme}
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultOpenKeys={["sub1", "sub2", "sub4", "sub5", "sub6", "sub7"]}
            selectedKeys={[this.state.current]}
            mode="inline"
            // inlineCollapsed={false}
          >
            <SubMenu
              key="sub1"
              icon={<UserOutlined />}
              title="Customers"
            ></SubMenu>
            <SubMenu key="sub2" icon={<ShoppingOutlined />} title="Goods">
              <Menu.Item key="3">
                <Link to="../container/addItems.js">AddItem</Link>Add Items
                {/* <Link to={`${match.url}/addItem`} /> */}
              </Menu.Item>

              <Menu.Item key="4">Edit Items</Menu.Item>
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
              <Menu.Item key="9">Delivery Solt</Menu.Item>
              <Menu.Item key="10">Delivery Fee</Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" icon={<BarsOutlined />} title="Category">
              <Menu.Item key="9">Add Categories</Menu.Item>
              <Menu.Item key="10">Edit Categories</Menu.Item>
            </SubMenu>
          </Menu>
          <Switch>
            <Route path = "../container/addItems.js"/>
            {/* <Route path={`${match.url}/addItem`} component={AddItem} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Sider;
