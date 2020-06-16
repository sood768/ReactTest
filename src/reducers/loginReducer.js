const initialState = { authorised: localStorage.getItem('access_token') && localStorage.getItem('access_token') != null ? true : false }
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS": {
            return { ...state, authorised: true }
        }
        case "LOGIN_ERROR": {
            return { ...state, authorised: false }
        }
        case "LOGIN_LOGOUT": {
            return { ...state, authorised: false }
        }
        default:
            return { ...state }
    }

}