import { PageHeader, Breadcrumb } from "antd";
import { Fragment } from "react";

const Header = () => {
  return (
    <Fragment>
      <Breadcrumb style={{ marginTop: 30 }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        onBack={() => window.history.back()}
        style={{ marginBottom: 30 }}
        title="Title"
      ></PageHeader>
    </Fragment>
  );
};

export default Header;
