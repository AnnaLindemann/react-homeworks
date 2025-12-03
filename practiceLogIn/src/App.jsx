import { connect } from 'react-redux'
import './App.css'
import UserProfile from './components/userProfile';
import LoginForm from './components/loginForm';
function App({isAuthenticated}) {
  
  return (
    <div className='mainCont'>
{isAuthenticated === true ? <UserProfile/> : <LoginForm/>}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
}
}
export default connect(mapStateToProps) (App)
