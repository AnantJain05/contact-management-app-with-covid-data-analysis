import React, { useState } from 'react'
import { connect } from 'react-redux'
import { delete_user, add_user } from '../redux/users/userActions'
import CreateUserForm from './CreateUserForm'
import UserCard from './UserCard'

function UserContainer(props:any) {
    const [isFormActive, setIsFormActive] = useState(0)
    return(
        <div className='flex flex-col'>
            <div className='flex-col h-30 py-10 px-30'>
                {isFormActive ? <CreateUserForm oldFirstName="" oldLastName="" setIsFormActive={setIsFormActive} formType={"ADD"}/> 
                : <button onClick={()=>setIsFormActive(1)} className="bg-white w-30 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Create Contact
                </button>}
            </div>
            
            <div className='flex flex-wrap justify-center'>
                {props.users.map((user:any) => {
                    return (
                        <UserCard user={user} />
                    )
                    
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        totalUsers: state.totalUsers,
        numberOfUsers: state.numberOfUsers,
        users: state.users
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        add_user: (data:any) => dispatch(add_user(data)),
        delete_user: (data:any) => dispatch(delete_user(data)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserContainer)