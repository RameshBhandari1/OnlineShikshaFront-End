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
            window.location.href = "/"
        }
    }
    render() {
        //for redirect to another page after login
        if(this.state.loginCheck===true && localStorage.getItem("accounttype") === "admin"){
            window.location.href = "/"
        }
        return (
            <div>
                
            </div>
        )
    }
}
export default AdminLogin;