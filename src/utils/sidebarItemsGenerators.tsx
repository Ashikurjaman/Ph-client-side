import { NavLink } from "react-router-dom";
import { TSidebar, TUserPath } from "../types/sidebar.types";

export const sideBarItemsGenerators = (items: TUserPath[], role: string) => {
  const sidebar = items.reduce((acc: TSidebar[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);
  return sidebar;
};
