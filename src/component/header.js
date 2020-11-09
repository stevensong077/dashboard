import { PageHeader, Button, Breadcrumb } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment >
      <Breadcrumb style={{ marginTop: 30}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        onBack={() => window.history.back()}
        style={{marginBottom:40}}
        title="Title"
        extra={
          <Button type="primary" shape="round" icon={<ReloadOutlined />} onClick = {()=>window.location.reload()}>
            Reload
          </Button>
        }
      ></PageHeader>
    </Fragment>
  );
};

export default Header;
