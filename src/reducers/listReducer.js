const initialState = { categories: [] }
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_CATEGORIES_LIST": {
            return { ...state, categories: action.payload }
        }
        case "GET_CATEGORIES_ERROR": {
            return { ...state, categories: [] }
        }
        case "GET_CATEGORIES_SORT": {            
            return { ...state, categories: action.payload }
        }
        default:
            return { ...state }
    }

}