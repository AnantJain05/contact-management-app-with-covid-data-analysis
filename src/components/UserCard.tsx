import React, { useState } from 'react'
import CreateUserForm from './CreateUserForm';
import { connect } from 'react-redux'
import { delete_user } from '../redux/users/userActions'
import avatar from './avatar.png'

function UserCard(props:any) {
    const [updating, setUpdating] = useState(0)

    return (
        <div className="w-60 max-w-sm mx-8 my-8 bg-gray-300 border border-black-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10 pt-10 align-middle justify-center">
            {updating ? <div className='flex align-middle justify-center'><CreateUserForm userId={props.user.id} oldFirstName={props.user.firstName} oldLastName={props.user.lastName} setIsFormActive={setUpdating} formType={"UPDATE"}/></div> :
            <>
                <img className="w-24 h-24 mb-3 mt-3 rounded-full shadow-lg" src={avatar} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-black">{props.user.firstName} {props.user.lastName}</h5>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a onClick={()=>setUpdating(1)} href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit</a>
                    <a onClick={()=>props.delete_user(props.user.id)} href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Delete</a>
                </div>
            </>
            }
            </div>
        </div>
    )
    // return (
    //     <>
    //         <li>
    //             {updating ? <CreateUserForm userId={props.user.id} oldFirstName={props.user.firstName} oldLastName={props.user.lastName} setIsFormActive={setUpdating} formType={"UPDATE"}/> :
    //                 <>
    //                 <h2>id - {props.user.id}</h2>
    //                 <h2>First Name - {props.user.firstName}</h2>
    //                 <h2>Last Name - {props.user.lastName}</h2>
    //                 <button onClick={()=>props.delete_user(props.user.id)}>Delete User</button>
    //                 <button onClick={()=>setUpdating(1)}>Edit User</button>
    //                 </>}
                
    //         </li>
    //     </>
    // )
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
        delete_user: (data:any) => dispatch(delete_user(data)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserCard)
