import SideMenu from "./component/sideMenu";
import { Layout, Breadcrumb, Menu } from "antd";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AddItem from "./container/addItems";
import TimeSlot from "./container/timeSlot";
import Customers from "./container/customers"
const { Header, Content, Footer, Sider } = Layout;

function Dashboard() {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <div className="logo" />
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
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={256}>
              {/* <div className="Dashboard"> */}
                <SideMenu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%" }}
                />
              {/* </div> */}
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
