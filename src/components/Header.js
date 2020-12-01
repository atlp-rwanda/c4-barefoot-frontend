import React, { Component } from 'react'
import '../App.css'
import NavBar from './NavBar'
import Routers from '../routes/Routers'
class Header extends Component {
 render(){
     return(
         <div>
         <NavBar />
         < Routers />
         </div>
     )
 }
}
export default Header;