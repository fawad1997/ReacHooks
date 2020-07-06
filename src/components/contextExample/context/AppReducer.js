export default (state, action) => {
    switch (action.type) {
    case 'ADD':
        return {
            users: [action.payload,...state.users]
        }
    case 'EDIT':
        const updatedUser = action.payload;
        const updateUsers = state.users.map(user=>{
            if(user.id===updatedUser.id){
                return updatedUser
            }
            return user;
        })
        return {
            users: updateUsers
        }
    case 'DELETE':
        return {
            users:state.users.filter(user=> user.id!==action.payload)
        }
    default:
        return state
    }
}
