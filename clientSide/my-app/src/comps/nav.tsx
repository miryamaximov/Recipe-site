import { Link, Outlet, useNavigate } from "react-router-dom"
import { User } from "../classes/User"
import { useSelector } from "react-redux"
import profile from '../pics/profile.png'
const Nav=()=>{
 const navigate = useNavigate()
  const showCuurUser=()=>{
    navigate('/ShowCurrDetails')
  }
  // style={{color: "rgb(44, 201, 232)"}}
  const curr:User = useSelector((k:any)=>k.currUser)
    return <>
    <nav className="navbar">
    <div className="container-fluid">
  <div className="navbar-header">
    <a className="navbar-brand" href="#">Miryamax Cakes</a>
  </div> 
    <ul className="nav navbar-nav" >
        <li ><Link to='/about' >About us</Link></li> 
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/addUser'>Sign Up</Link></li>
        <li><Link to='/login'>Log In</Link></li>
        <li><Link to='/addRecipe'>Add a recipe</Link></li>
        <li><Link to='/isDirector'>Users</Link></li>
        <li><Link to='/terms'>Site's Policy</Link></li>
        </ul>
     <button onClick={showCuurUser} style={{background: "none", border: "none"}}>   <img src={profile} width="55px"/></button>
   <span style={{color: "rgb(255, 208, 120)", fontFamily: "monospace", fontSize: "xx-large"}}> {curr?.name}</span>
        </div> 
    </nav>
    <Outlet></Outlet>
    </>
}
export default Nav