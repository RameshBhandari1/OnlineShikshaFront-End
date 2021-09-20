import { Component } from "react";
import axios from "axios"; //it handel request and response from api
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router";


class Register extends Component {
    
    state = {
        fullname: "",
        email: "",
        username: "",
        password: "",
        accounttype: ""
    };
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    UserReg = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/user/insert", this.state)
            .then((response) => {
                console.log(response);
                window.alert(response.data.message)
                window.location.assign("/login")
            })
            .catch((err) => {
                console.log(err.response)
            })
    };
    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <img class="waver" src="https://wallpapercave.com/wp/wp2590356.jpg" alt="wave" />
                <div class="container containerr">
                    <div class="img1">
                        <img src="https://www.timeshighereducation.com/sites/default/files/online-learning.png" alt="bg" />
                    </div>
                    <div class="login-content">
                        <form class="form" action="index.html">
                            <img src="https://www.freeiconspng.com/uploads/user-add-icon---shine-set-add-new-user-add-user-30.png" alt="avatar" />
                            <h2 class="title">Create an Account</h2>
                            <h4 style={{ textAlign: "left", fontSize: "20px" }}>Account Type : </h4>
                            <div class="custom-control custom-radio custom-control-inline" style={{ padding: "8px", marginRight: "20px" }}>
                                <input type="radio" id="customRadioInline1" name="accounttype" value="Professor" onChange={this.changeHandle} class="custom-control-input" />
                                <label class="custom-control-label" htmlFor="customRadioInline1" style={{ textAlign: "center", fontSize: "20px" }}>Professor</label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline" style={{ padding: "8px" }}>
                                <input type="radio" id="customRadioInline2" name="accounttype" value="Learner" onChange={this.changeHandle} class="custom-control-input" />
                                <label class="custom-control-label" htmlFor="customRadioInline2" style={{ textAlign: "center", fontSize: "20px" }}>Learner</label>
                            </div>
                            <div class="input-div one">
                                <div class="i">
                                    <FontAwesomeIcon class="icon" icon="user" />
                                </div>
                                <div class="div">
                                    <input type="text" placeholder="Enter Fullname" name="fullname" class="input" value={this.state.fullname} onChange={this.changeHandle} required />
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <FontAwesomeIcon class="icon" icon="envelope" />
                                </div>
                                <div class="div">
                                    <input type="text" placeholder="Enter Email" name="email" class="input" value={this.state.email} onChange={this.changeHandle} required />
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <FontAwesomeIcon class="icon" icon="user" />
                                </div>
                                <div class="div">
                                    <input type="text" placeholder="Enter Username" name="username" class="input" value={this.state.username} onChange={this.changeHandle} required />
                                </div>
                            </div>
                            <div class="input-div pass">
                                <div class="i">
                                    <FontAwesomeIcon class="icon" icon="lock" />
                                </div>
                                <div class="div">
                                    <input type="password" placeholder="Enter Password" name="password" class="input" value={this.state.password} onChange={this.changeHandle} required />
                                </div>
                                </div>
                                    <div class="input-div pass">
                                        <div class="i">
                                            <FontAwesomeIcon class="icon" icon="lock" />
                                        </div>
                                        <div class="div">
                                            <input type="password" placeholder="Enter Confirm password" class="input" required />
                                        </div>
                                    </div>
                                    <input type="submit" class="btn1" onClick={this.UserReg} value="Register" />
                                    <h6>Already have an account?  <a href="/login">Sign In</a> </h6>
                        </form>
                            </div>
                </div>
                    </div>
        )
    }
}
export default Register;