import { DELETE_USER, UPDATE_USER, ADD_USER } from "./userTypes";

const initial_state = {
    numberOfUsers: 10,
    users: [
        {
            firstName: "Anant",
            lastName: "Jain"
        }
    ]
}

const userReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_USER: return {
            ...state,
            totalUsers: state.totalUsers+1,
            numberOfUsers: state.numberOfUsers+1,
            users: [{
                ...action.payload,
                id: state.totalUsers
            }, ...state.users]
        }
        case DELETE_USER: return {
            ...state,
            numberOfUsers: state.numberOfUsers-1,
            users: state.users.filter((user)=> user.id != action.payload)
        }
        case UPDATE_USER: return {
            ...state, 
            numberOfUsers: state.users+1,
            users: [...state.users, action.payload]
        }
        default: return state
    }
}

export default userReducer