const routes = {
  // Roots
  home: "/",
  login: "/login",
  dashboard: "/dashboard",
  // Nested Dashboard pages
  investments: "/dashboard/investments",
  users: "/dashboard/users",
  orders: "/dashboard/orders",
  user: "/dashboard/user/:id",
  newuser: "/dashboard/user",
  investment: "/dashboard/investment/:id",
  newinvestment: "/dashboard/investment",
};

export default routes;
