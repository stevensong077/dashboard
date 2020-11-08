import SideMenu from "./component/sideMenu";
import { Layout, Breadcrumb } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddItem from "./container/addItems";
import TimeSlot from "./container/timeSlot";
import Customers from "./container/customers";
import ItemList from "./container/itemList";
const { Content, Footer, Sider } = Layout;

function Dashboard() {
  return (
    <Router>
      <Layout>
        <Sider style={{ padding: "70px 0 20px 0" }}>
          <SideMenu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
          />
        </Sider>
        <Content style={{ padding: "0 24px", minHeight: 320 }}>
          <Breadcrumb style={{ margin: "24px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
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
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Content>
      </Layout>
    </Router>
  );
}

export default Dashboard;
