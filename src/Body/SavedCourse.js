import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class SavedCourse extends Component{
    state = {
        courses: [],
        config: {
            headers: { "authorization": `Bearer ${localStorage.getItem("token")}` }
        },
        count:""
    }
    componentDidMount() {
        axios.get("http://localhost:90/course/save", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    courses: response.data.data,
                    count : response.data.count
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    courseDelete = (coId) => {
        axios.delete("http://localhost:90/course/save/delete/" + coId, this.state.config)
            .then((response) => {
                window.location.href="/savecourse"
                console.log(response)
            })
            .catch()
    }
    render(){
        if(!localStorage.getItem("token") || localStorage.getItem("accounttype")!=="Learner"){
            window.location.href="/"
       }
        return(
            <div style={{ backgroundColor: "#ffffff87" }}>
                <section>
                    <img class="waver" src="https://www.apa.org/images/continuing-education_tcm7-211074.jpg" alt="wave" />
                    <div class="container">
                        <div class="row">
                            <div class="col-12" style={{ marginTop: "18px" }}>
                                <div class="section-head col-sm-12" style={{ backgroundColor: "rgb(0 0 0 / 88%)", color: "white", marginBottom: "0rem" }}>
                                    <h4><span style={{ color: "white" }}>Saved</span> Courses</h4>
                                    <p style={{color:"white" }}>Your Total number of saved Course : {this.state.count} </p>
                                    <hr />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

                <div class="container">
                    {
                        this.state.courses.map((courses, index) => {
                            return (
                                <div class="card" style={{ backgroundColor: "#000000d1", marginBottom: "10px", color:"white" }}>
                                    <div class="row no-gutters">
                                        <div class="col-md-10">
                                            <div class="card-body">
                                            <h5 class="card-title">
                                                {this.state.courses[index].CourseID.courseTitle} <span class="badge badge-primary">New</span>
                                                </h5><p class="card-text">
                                                    <span class="badge badge-pill badge-success">  {this.state.courses[index].CourseID.courseCategory}</span>
                                                </p>
                                                <p class="card-text">
                                                    {this.state.courses[index].CourseID.courseDesc} <Link to={"/coursedetail/" + this.state.courses[index].CourseID._id} class="card-link">read more...</Link>
                                                </p>
                                                <div class="mb-5">
                                                    <p class="card-text">
                                                        <small class="text-muted"> <i class="fa fa-clock-o"></i> Last Updated: {this.state.courses[index].CourseID.postDate}</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 mr-auto"  style={{textAlign:"center", padding:"10px", marginTop:"auto", marginBottom:"auto"}}>
                                                <Link class="btn btn-primary btn-block" onClick={() =>{ 
                                                    if(window.confirm("Are you sure to Unsave Course?")){this.courseDelete(courses._id)};}} style={{ background:"red", marginBottom:"4rem"}}>
                                                    <i class="fa fa-window-close pr-2"></i> Cancel
                                                </Link>
                                                <Link class="btn btn-primary btn-block" to={"/coursedetail/" + this.state.courses[index].CourseID._id}>
                                                    <i class="fa fa-newspaper-o pr-2"></i> Read more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}
export default SavedCourse;