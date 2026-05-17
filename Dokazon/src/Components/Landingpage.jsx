import { useState } from 'react'
import AdminLogin from './Admin/AdminLogin'
import UsersLogin from './Users/UsersLogin'

const Landingpage = () => {
  const [bool, setBool] = useState(true)
  const handlebool = () => {
    setBool(!bool)
  }

  return (
    <div className="landing-page">
      <h1>Welcome to Dokazon</h1>
      
      <div className="container">
        <div className="button-box">
          <button onClick={handlebool} className={bool ? 'lft' : 'ryt'}>
            {bool ? 'Admin Login' : 'User Login'}
          </button>
        </div>
        <div className="formbox">
            {bool? <AdminLogin/> : <UsersLogin/>}
        </div>

      </div>
    </div>
  )
}

export default Landingpage

