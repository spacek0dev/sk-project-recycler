const appTypes = {
    all: 'ALL',
    users: 'USERS',
    roles: 'ROLES',
    organizations: 'ORGANIZATIONS',
    organizationTypes: 'ORGANIZATIONSTYPE',
    organizationServices: 'ORGANIZATIONSERVICES',
    organizationAppointments: 'ORGANIZATIONAPPOINTMENTS'
}
const initialState = {
    roles: [],
    organizations: [],
    organizationTypes: [],
    organizationServices: [],
    organizationAppointments: []
}
const appReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case appTypes.all:
            return { ...action.payload }
        case appTypes.roles:
            return { ...state, roles: action.payload }
        case appTypes.users:
            return { ...state, users: action.payload }
        case appTypes.organizations:
            return { ...state, organizations: action.payload }
        case appTypes.organizationTypes:
            return { ...state, organizationTypes: action.payload }
        case appTypes.organizationServices:
            return { ...state, organizationServices: action.payload }
        case appTypes.organizationAppointments:
            return { ...state, organizationAppointments: action.payload }
        default:
            return state;
    }
}

export { initialState, appTypes, appReducer };
