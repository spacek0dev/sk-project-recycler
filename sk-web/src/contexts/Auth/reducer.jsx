const AuthTypes = {
    all: 'ALL',
    session: 'SESSION',
    profile: 'PROFILE'
}

const initialState = {
    session: 'not-logued',
    profile: {}
}
const AuthReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case AuthTypes.all:
            return { ...state, session: action.payload.session, profile: action.payload.profile }
        case AuthTypes.session:
            return { ...state, session: action.payload }
        case AuthTypes.profile:
            return { ...state, profile: action.payload }
        default:
            return state;
    }
}

export { AuthTypes, initialState, AuthReducer };
