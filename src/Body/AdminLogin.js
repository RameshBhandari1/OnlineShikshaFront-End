import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component} from "react";
import axios from "axios";
import { Redirect } from "react-router";

class AdminLogin extends Component {
    state={
        username : "",
        password : ""
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    submitLogin =(e)=>{
        e.preventDefault(); 
        if(this.state.username == "admin" && this.state.password == "admin"){
            localStorage.setItem("accounttype", "admin")
            window.location.href = "/admin"
        }
    }
    render() {
        //for redirect to another page after login
        if(this.state.loginCheck===true && localStorage.getItem("accounttype") === "admin"){
            window.location.href = "/admin"
        }
        return (
            <div>
                <img class="wave" src="https://wallpapercave.com/wp/wp2590356.jpg" alt="wave" />
                <div class="container containerl">
                    <div class="img1">
                        <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/bg.svg" alt="bg" />
                    </div>
                    <div class="login-content">
                        <form class="form" action="index.html">
                            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" alt="avatar" />
                            <h2 class="title">Admin Login</h2>
                            <div class="input-div one">
                                <div class="i">
                                    <FontAwesomeIcon class="icon" icon="user" />
                                </div>
                                <div class="div">
                                    {/* <h5>Username</h5> */}
                                    <input type="text" name="username" class="input" placeholder="Enter Username" value={this.state.username} onChange={this.changeHandler} required />
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <FontAwesomeIcon class="icon" icon="lock" />
                                </div>
                                <div class="div">
                                    {/* <h5>Password</h5> */}
                                    <input type="password" name="password" class="input" placeholder="Enter password"  value={this.state.password} onChange={this.changeHandler} required />
                                </div>
                            </div>
                            <a class="a" style={{color:"black"}} href="/">Forgot Password?</a>
                            <input type="submit" class="btnlogin" onClick={this.submitLogin} value="Login" />
                            <h6>Are you a new user?  <a href="/register">Sign Up</a> </h6>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminLogin;