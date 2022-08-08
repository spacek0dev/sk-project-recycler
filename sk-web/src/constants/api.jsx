const local_url = "http://localhost:3000";
const BASE_URL_PROD = "http://localhost:3000";
const BASE_URL_DEV = "http://localhost:3000/api/v1";
export const server_url = BASE_URL_DEV;

export const API = {
  login: "/auth/login",
  register: "/auth/register",
  user: "/auth/user",
  roles: "/roles",
  countrys: "/countrys",
  organizations: "/organizations",
  areas: (countryId) => `/areas/country/${countryId}`,
  allUsers: "/users/all",
  partners: "/partners",
  awardsCategory: "/awardscategory",
  awards: "/awards",
  bags: "/bags",
};
