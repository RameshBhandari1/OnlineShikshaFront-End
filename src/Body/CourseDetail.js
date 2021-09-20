import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class CourseDetail extends Component {
    state = {
        courses: [],
        id: this.props.match.params.id,
        config: {
            headers: { "authorization": `Bearer ${localStorage.getItem("token")}` }
        }

    }
    componentDidMount() {
        axios.get("http://localhost:90/course/single/" + this.state.id, this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    courses: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    saveCourse = (e) => {
        e.preventDefault();
        const data = {
            CourseID: this.state.id,
        }
        axios.post("http://localhost:90/course/save", data, this.state.config)
            .then((response) => {
                console.log(response)
                window.alert("You hav saved a course.")
                window.location.assign("/savecourse")
            })
            .catch()
    }
    render() {
        if (!localStorage.getItem("token")) {
            window.location.href = "/"
        }
        if (localStorage.getItem("accounttype") === "Professor") {
            var save = <Link class="btn btn-primary btn-block" onClick={()=>{window.alert("You are not allowed to save course!!")}} to="/login" ><i class="fa fa-heart pr-2"></i> Save Course</Link>
        }else{
           save = <Link class="btn btn-primary btn-block" onClick={this.saveCourse} > <i class="fa fa-heart pr-2"></i> Save Course</Link>
        }
        return (
            <div>
                <section>
                    <img class="waver" src="https://www.dporganizer.com/wp-content/uploads/2018/02/15145454/education-background.jpg" alt="wave" />
                    <div class="container">
                        <div class="row">
                            <div class="col-12" style={{ marginTop: "18px" }}>
                                <div class="section-head col-sm-12" style={{ backgroundColor: "rgb(0 0 0 / 88%)", color: "white", marginBottom: "0rem" }}>
                                    <h4><span style={{ color: "white" }}>Course</span> Detail</h4>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <div class="container">
                    <div class="card" style={{ backgroundColor: "#000000d1", marginBottom: "10px", color: "white" }}>
                        <div class="row no-gutters">
                            <div class="col-md-12">
                                <div class="card-body">
                                    <h5 class="card-title">
                                        {this.state.courses.courseTitle}
                                    </h5>
                                    <p class="card-text">
                                        <span class="badge badge-pill badge-success"> {this.state.courses.courseCategory}</span>
                                    </p>
                                    <p class="card-text">
                                        {this.state.courses.courseDesc}
                                    </p>
                                    <p class="card-text">
                                        Click the below link to read or to download the file. <br />
                                                    File : <a href={"http://localhost:90/uploads/" + this.state.courses.courseFile} target="_blank" rel="noreferrer"> {this.state.courses.fileTitle}</a>
                                    </p>
                                    <div class="mb-5">
                                        <p class="card-text float-right">
                                            <small class="text-muted"> <i class="fa fa-clock-o"></i> Last Updated: {this.state.courses.postDate}</small>
                                        </p>
                                    </div>
                                    {save}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseDetail;