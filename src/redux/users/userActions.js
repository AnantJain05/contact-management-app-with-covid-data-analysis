import { DELETE_USER, UPDATE_USER, ADD_USER } from "./userTypes";

export const add_user = (userData) => {
    return {
        type: ADD_USER,
        payload: userData
    }
}
export const delete_user = (id) => {
    return {
        type: DELETE_USER,
        payload: id
    }
}
export const update_user = () => {
    return {
        type: UPDATE_USER
    }
}