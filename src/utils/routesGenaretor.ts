import { TRoute, TUserPath } from "../types/sidebar.types";

export const routerGenerator = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      // Add top-level routes
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      // Add nested routes
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);
  return routes;
};
