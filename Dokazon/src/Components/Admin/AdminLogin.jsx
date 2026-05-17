import React, { useState } from 'react'
import Adminportal from './Adminportal'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminLogin = () => {
    const [formData, setFormData] = useState({email:"",password:""})
    const [error, setError] = useState("")
    const navigate = useNavigate() //useNavigate is used to navigate to another component or page and it return a navigate function
    //In navigatefunction it has only one parameter which is the path of the component or page to which we want to navigate
    let handleinput=(e)=>{
        //collecting input vaulues with name and value pair 
        let key=e.target.name
        let val=e.target.value

        //upating the input vaues for formdata object
       setFormData({
        ...formData,
        [key]:val
       })
        
    }
    let handlesubmit=(e)=>{
        e.preventDefault()
        // console.log(formData)
        e.target.reset()  //used only when value is not used in input field
        
        //destructuring the formdata
        let {email,password}=formData

        //sets the input fields to empty after submit
         setFormData({email:"",password:""})
         // after submit the input fields will be reset 

         //destructuring the credentials
        let credentials={
            admin_email:"danushumesh79@gmail.com",
            admin_pass:"24689012Danush#"
        }

        let{admin_email,admin_pass}=credentials

        // validation 
        if (email===admin_email){
           if(password===admin_pass){
               setError("")
                //navigate to admin portal
                navigate('/adminportal')
                toast.success("Admin Login Successful") //toast is used to display a success message after successful login
               
           }else{
            setError("Invalid Password")
            toast.error("Invalid Password") //toast is used to display an error message for invalid password
           }
        }else{
            setError("Invalid Email")
            toast.error("Invalid Email") //toast is used to display an error message for invalid email
        }
    }

  return (

    
    <>
    <div className="admin-login">
        <form action="" onSubmit={handlesubmit}>
                <input type="email" 
                placeholder="Enter your email" 
                name='email'
                onChange={handleinput}
                value={formData.email}
                />
                <input type="password" 
                placeholder="Enter your password"
                name='password'
                onChange={handleinput}
                value={formData.password}
                 />
                 <div style={{color:"red"}}><h4>{error}</h4></div>
                <button type="submit">Admin Login</button>
            </form>
    </div>
    </>
  )
}

export default AdminLogin
