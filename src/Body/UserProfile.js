import { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UserProfile extends Component {
    state = {
        user : [],
        config : {
            headers : {"authorization" : `Bearer ${localStorage.getItem("token")}`}
        }
    }
    componentDidMount(){
        axios.get("http://localhost:90/user/getme", this.state.config)
        .then((response)=>{
            console.log(response)
            this.setState({
                user : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    render() {
        if(!localStorage.getItem("token")){
            window.location.href="/"
        }
        if(this.state.user.profile !== ""){
            var pp = <img src={"http://localhost:90/uploads/"+ this.state.user.profile} alt="Maxwell Admin" id="upload-img" />
         }  
         else{
            pp = <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" alt="Maxwell Admin" id="upload-img" />
         }  
        return (
               <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto" style={{backgroundColor:"#b7cee5d9"}}>
                <div class="row gutters">
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div class="card h-100">
                            <div class="card-body" style={{border:"2px solid",  borderRadius:"20px"}}>
                                <div class="account-settings">
                                    <div class="user-profile">
                                        <div class="user-avatar">
                                           {pp}
                                        </div>
                                        <hr />
                                        <h5 class="user-name">{this.state.user.fullname}</h5>
                                        <h6 class="user-email">{this.state.user.accounttype}</h6>
                                    </div>
                                    <hr />
                                    <div class="about">
                                        <h5>About</h5>
                                        <p>{this.state.user.bio}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div class="card h-100">
                            <div class="card-body" style={{border:"2px solid", borderRadius:"20px"}}>
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h5 class="mb-2 text-primary">Personal Details</h5>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="fullName"><h6 style={{color:"gray"}}>Full Name</h6></label>
                                            <p>{this.state.user.fullname}</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="fullName"><h6 style={{color:"gray"}}>Email</h6></label>
                                            <p>{this.state.user.email}</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="fullName"><h6 style={{color:"gray"}}>Username</h6></label>
                                            <p>{this.state.user.username}</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="fullName"><h6 style={{color:"gray"}}>Address</h6></label>
                                            <p>{this.state.user.address}</p>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="fullName"><h6 style={{color:"gray"}}>Phone</h6></label>
                                            <p>{this.state.user.phone}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="text-right" >
                                            <Link type="button" id="submit" name="submit" class="btn btn-info text-center" to={"/userUpdate"}>Update Profile</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default UserProfile;