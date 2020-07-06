export default (state, action) => {
    switch (action.type) {

    case 'DELETE':
        return {
            users:state.users.filter(user=> user.id!==action.payload)
        }
    default:
        return state
    }
}
