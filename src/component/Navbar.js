import React, { Component } from "react";
import "./css/NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { Badge } from "antd";
import { BsCart3 } from "react-icons/bs";
class Navbar extends Component {
  state = {
    clicked: false,
    count: 0,
    userName: ""
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  hadleLogout = () =>{
    localStorage.removeItem("userLogin");
    this.setState({ userName: "" }); 
  }
  componentDidMount() {
    this.updateCartCount();
    this.updateUser();
  }

  componentDidUpdate(prevProps) {
    if (this.props.loading !== prevProps.loading) {
      this.updateCartCount();
    }
  }

  updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem('carts')) || [];
    const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 0), 0);
    this.setState({ count: totalQuantity });
  };
  updateUser= () =>{
    const user = JSON.parse(localStorage.getItem("userLogin"))
    if (user){
      this.setState({ userName: user?.name });
    }
  }
  render() {
    const { count ,userName} = this.state;
    console.log('userName', userName)
  
    return(
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <h1>BeautyBeach</h1>
        </div>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          
          {userName!==""?(
            <div style={{padding:"10px 0"}}>
            <p style={{fontSize:"20px",marginBottom:"0"}}>{userName}</p>
            <p style={{fontSize:"20px",marginBottom:"0",cursor:"pointer"}} onClick={this.hadleLogout}>Logout</p>
            </div>
          ):(
            <button>
              <a href="http://localhost:3000/loginform">Sign Up</a>
            </button>
          )}
          
        </ul>
      </nav>
    );
  }
}

export default Navbar;
