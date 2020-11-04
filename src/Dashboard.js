import SideMenu from "./component/sideMenu";
import { Layout, Breadcrumb, Menu } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddItem from "./container/addItems";
import TimeSlot from "./container/timeSlot";
import Customers from "./container/customers";
import ItemList from "./container/itemList";
const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: "24px 0" }}>
            <Sider width={256}>
              <SideMenu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              />
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <Switch>
                <Route path="/addItem">
                  <AddItem />
                </Route>
                <Route path="/timeSlot">
                  <TimeSlot />
                </Route>
                <Route path="/customers">
                  <Customers />
                </Route>
                <Route path="/itemlist">
                  <ItemList />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Router>
  );
}

export default Dashboard;
