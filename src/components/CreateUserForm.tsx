import React, { useState } from 'react'
import { connect } from 'react-redux'
import { delete_user, add_user } from '../redux/users/userActions'

function CreateUserForm(props:any) {
    const [formData, setFormData] = useState({
        firstName: props.oldFirstName,
        lastName: props.oldLastName
    })
    return (
        <>
            <form className='flex justify-center w-70' method="POST" onSubmit={(e) => {
                e.preventDefault()
                // if (formData.firstName!=="" && formData.lastName!==""){
                    {props.formType=="UPDATE" && props.delete_user(props.userId)}
                    props.add_user(formData)
                // }
                // else{
                //     console.log("Name cannont be empty")
                // }
                setFormData({
                    ...formData,
                    firstName:"",
                    lastName:""
                })
                props.setIsFormActive(0)}}>
                <div className='flex flex-col justify-center align-middle w-full max-w-sm'>
                    <input className="my-2" onChange={(e) => setFormData({...formData, firstName: e.target.value})} value={formData.firstName} name="first_name" placeholder="Enter first name" required/>
                    <input className="my-2" onChange={(e) => setFormData({...formData, lastName: e.target.value})} value={formData.lastName} name="last_name" placeholder="Enter last name" required/>
                    <button type='submit'>Submit</button>
                </div>
                
            </form>
        </>
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
)(CreateUserForm)