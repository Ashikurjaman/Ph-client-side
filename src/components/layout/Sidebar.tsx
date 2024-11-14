import Layout from "antd/es/layout/layout";
import { sideBarItemsGenerators } from "../../utils/sidebarItemsGenerators";
const { Sider } = Layout;
import { Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";

export default function Sidebar() {
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Ph University</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItemsGenerators(adminPaths, "admin")}
      />
    </Sider>
  );
}
