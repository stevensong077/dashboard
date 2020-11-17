import React from 'react';
import { PageHeader, Breadcrumb } from "antd";

const Header = () => {
  return (
    <>
      <Breadcrumb style={{ marginTop: 30 }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <PageHeader
        onBack={() => window.history.back()}
        style={{ marginBottom: 30 }}
        title="Title"
      ></PageHeader>
    </>
  );
};

export default Header;
