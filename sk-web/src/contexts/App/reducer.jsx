const appTypes = {
  all: "ALL",
  countrys: "COUNTRYS",
  areas: "AREAS",
  awardsCategory: "AWARDSCATEGORY",
  users: "USERS",
  organizations: "ORGANIZATIONS",
  partners: "PARTNERS",
  roles: "ROLES",
};
const initialState = {
  roles: [],
  countrys: [],
  areas: [],
  users: [],
  organizations: [],
  awardsCategory: [],
  partners: [],
};
const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case appTypes.all:
      return { ...action.payload };
    case appTypes.roles:
      return { ...state, roles: action.payload };
    case appTypes.countrys:
      return { ...state, countrys: action.payload };
    case appTypes.areas:
      return { ...state, areas: action.payload };
    case appTypes.users:
      return { ...state, users: action.payload };
    case appTypes.organizations:
      return { ...state, organizations: action.payload };
    case appTypes.partners:
      return { ...state, partners: action.payload };
    case appTypes.awardsCategory:
      return { ...state, partners: action.payload };
    default:
      return state;
  }
};

export { initialState, appTypes, appReducer };
