import { AVALIBLE_ROLES } from "src/constants/vars";

let AppConfig = {
  appName: "Recycler",
  menuList: [
    { key: "0", link: "/dashboard", name: "Home-menu", icon: "home", roles: ["Administrador", "Colaborador"] },
    { key: "1", link: "/dashboard/users", name: "Users-menu", icon: "people", query: "?tab=list", roles: ["Administrador"] },
    { key: "2", link: "/dashboard/organizations", name: "Organizations-menu", icon: "building", query: "?tab=list", roles: ["Administrador"] },
    { key: "3", link: "/dashboard/partners", name: "Partners-menu", icon: "friends", query: "?tab=list", roles: ["Administrador", "Colaborador"] },
    { key: "4", link: "/dashboard/awards", name: "Awards-menu", icon: "gifts", query: "?tab=list", roles: ["Administrador", "Colaborador"] },
    { key: "5", link: "/dashboard/configurations", name: "Configurations-menu", icon: "configurations", query: "?tab=list&view=countrys", roles: ["Administrador"] },
    { key: "6", link: "/dashboard/users-awards", name: "UserAwards-menu", icon: "usergift", query: "?tab=list", roles: ["Administrador", "Colaborador"] },
    { key: "7", link: "/dashboard/learning", name: "Learning-menu", icon: "learn", query: "?tab=list", roles: ["Administrador", "Colaborador"] },
    { key: "8", link: "/dashboard/messages", name: "Messages-menu", icon: "messages", query: "?tab=list", roles: ["Administrador", "Colaborador"] },
  ],
};
export default AppConfig;
