
import { Component } from "react";
import axios from "axios";

 class UpdateUser extends Component{
    state = {
        fullname: "",
        username: "",
        email: "",
        address: "",
        profile:"",
        phone: "",
        bio: "",
        config: {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }, 
        userID:""
    }

    componentDidMount() {
        axios.get("http://localhost:90/user/getme", this.state.config)
            .then((result) => {
                this.setState({
                    fullname: result.data.data.fullname,
                    username: result.data.data.username,
                    email: result.data.data.email,
                    address: result.data.data.address,
                    phone: result.data.data.phone,
                    bio: result.data.data.bio,
                    profile: result.data.data.profile,
                    userID : result.data.data._id
                })
                console.log(result)
            })
            .catch()
    }
    updateImage = (e) =>{
        e.preventDefault();
        const userData = new FormData()
        userData.append("profile", this.state.profile)
        axios.put("http://localhost:90/user/photo/"+ this.state.userID, userData, this.state.config)
            .then((response) => {
                console.log(response)
                window.alert(response.data.message)
                window.location.assign("/userUpdate")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    UpdateUser = (e) => {
        e.preventDefault();
        const userData = {
            fullname: this.state.fullname,
            username:  this.state.username,
            email:  this.state.email,
            address:  this.state.address,
            phone:  this.state.phone,
            bio:  this.state.bio,
            profile:  this.state.profile,
            userID :  this.state.userID
        }
        axios.put("http://localhost:90/user/update/"+this.state.userID, userData, this.state.config)
            .then((response) => {
                console.log(response)
                window.alert(response.data.message)
                window.location.assign("/profile")
            })
            .catch((err) => {
                console.log(err.response)
            })

    }
     render(){ 
        if(!localStorage.getItem("token")){
            window.location.href="/"
        }
         if(this.state.profile !== ""){
            var pp = <img src={"http://localhost:90/uploads/"+ this.state.profile} alt="Maxwell Admin" id="upload-img" />
         }  
         else{
            pp = <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" alt="Maxwell Admin" id="upload-img" />
         }    
         return(
            <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto" style={{backgroundColor:"#b7cee5d9"}}>
                <div class="row gutters">
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div class="card h-100">
                            <div class="card-body" style={{border:"2px solid",  borderRadius:"20px"}}>
                                <div class="account-settings">
                                    <div class="user-profile" style={{marginTop:"65px"}}>
                                        <div class="user-avatar">
                                            {pp}
                                        </div>
                                        <hr/>
                                        <div class="custom-file">
                                            <label for="fileupload">Change Image</label>
                                            <input type="file" id="fileupload" value={this.fileHandler}
                                                onChange={(event) => {this.setState({ profile: event.target.files[0]})}}  />
                                        </div>
                                       
                                    </div>
                                    <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="text-right">
                                            <button type="button" id="submit" name="submit" class="btn btn-info text-center" onClick={this.updateImage}>Save Image</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div class="card h-100">
                            <div class="card-body" style={{border:"2px solid",  borderRadius:"20px"}}>
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h5 class="mb-2 text-primary">Personal Details</h5>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="fullName">Full Name</label>
                                            <input type="text" class="form-control" id="fullName" name="fullname" placeholder="Enter full name" value={this.state.fullname}
                                                onChange={(event) => { this.setState({ fullname: event.target.value }) }} />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="username">Username</label>
                                            <input type="text" class="form-control" id="username" name="username" placeholder="Enter your username" value={this.state.username}
                                                onChange={(event) => { this.setState({ username: event.target.value }) }} />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" value={this.state.email}
                                                onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="address">Address</label>
                                            <input type="text" class="form-control" id="email" name="address" placeholder="Enter your address" value={this.state.address}
                                                onChange={(event) => { this.setState({ address: event.target.value }) }} />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="phone">Phone</label>
                                            <input type="text" class="form-control" id="email" name="phone" placeholder="Enter your phone" value={this.state.phone}
                                                onChange={(event) => { this.setState({ phone: event.target.value }) }} />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="bio">Bio</label>
                                            <textarea type="text" class="form-control" id="email" name="bio" maxLength="200" placeholder="Enter your bio" value={this.state.bio}
                                                onChange={(event) => { this.setState({ bio: event.target.value }) }} />
                                        </div>
                                    </div>
                                </div>
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="text-right">
                                            <button type="button" id="submit" name="submit" class="btn btn-info text-center" onClick={this.UpdateUser}>Update</button>
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
 export default UpdateUser;