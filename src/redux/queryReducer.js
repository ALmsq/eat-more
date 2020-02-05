const initialState = {
    query: 'dumbo'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    // case 'GET_QUERY':
    //     return payload
    case 'FETCH_QUERY':
        return payload
    default:
        return state
    }
}
