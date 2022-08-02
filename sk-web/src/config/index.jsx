let AppConfig = {
  appName: "Recycler",
  menuList: [
    { key: "0", link: "/dashboard", name: "Home-menu", icon: "home" },
    { key: "1", link: "/dashboard/users", name: "Users-menu", icon: "people", query: "?tab=list" },
    { key: "2", link: "/dashboard/organizations", name: "Organizations-menu", icon: "building", query: "?tab=list" },
  ],
};
export default AppConfig;
