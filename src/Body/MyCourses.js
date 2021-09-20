import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class MyCourses extends Component {
    state = {
        courses: [],
        config: {
            headers: { "authorization": `Bearer ${localStorage.getItem("token")}` }
        },
        count: ""
    }
    componentDidMount() {
        axios.get("http://localhost:90/course/data", this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    courses: response.data.data,
                    count: response.data.count
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    courseDelete = (coId) => {
        axios.delete("http://localhost:90/course/delete/" + coId, this.state.config)
            .then((response) => {
                window.location.href = "/mycourses"
                console.log(response)
            })
            .catch()
    }
    render() {
        if (!localStorage.getItem("token") || localStorage.getItem("accounttype") !== "Professor") {
            window.location.href = "/"
        }
        return (
            <div>
                <section>
                    <img class="waver" src="https://www.brookdalecc.edu/wp-content/uploads/sites/246/2014/08/math-blue1.jpg" alt="wave" />
                    <div class="container">
                        <div class="row">
                            <div class="col-12" style={{ marginTop: "18px" }}>
                                <div class="section-head col-sm-12" style={{ backgroundColor: "rgb(0 0 0 / 88%)", color: "white", marginBottom: "0rem" }}>
                                    <h4><span style={{ color: "white" }}>My</span> Courses</h4>
                                    <p style={{ color: "white" }}>Total number of Courses you added : {this.state.count} </p>
                                    <hr />
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* <div class="row">
                    <div class="col-12" style={{ marginRight: "50px" }}>
                        <div class="card widget-inline">
                            <div class="card-body p-0">
                                <div class="row no-gutters" style={{ margin: "5px" }}>
                                    <div class="col">
                                        <a href="/#"class="text-secondary">
                                            <div class="card shadow-none m-0">
                                                <div class="card-body text-center">
                                                    <i class="dripicons-link text-muted" style={{ fontSize: "24px" }}></i>
                                                    <h3><span>
                                                        0                                    </span></h3>
                                                    <p class="text-muted font-15 mb-0">Active Courses</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col">
                                        <a href="/#" class="text-secondary">
                                            <div class="card shadow-none m-0 border-left">
                                                <div class="card-body text-center">
                                                    <i class="dripicons-link-broken text-muted" style={{ fontSize: "24px" }}></i>
                                                    <h3><span>
                                                        0                                    </span></h3>
                                                    <p class="text-muted font-15 mb-0">Pending Courses</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col">
                                        <a href="/#" class="text-secondary">
                                            <div class="card shadow-none m-0 border-left">
                                                <div class="card-body text-center">
                                                    <i class="dripicons-bookmark text-muted" style={{ fontSize: "24px" }}></i>
                                                    <h3><span>
                                                        0                                    </span></h3>
                                                    <p class="text-muted font-15 mb-0">Draft Courses</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col">
                                        <a href="/#" class="text-secondary">
                                            <div class="card shadow-none m-0 border-left">
                                                <div class="card-body text-center">
                                                    <i class="dripicons-star text-muted" style={{ fontSize: "24px" }}></i>
                                                    <h3><span>0</span></h3>
                                                    <p class="text-muted font-15 mb-0">Free Courses</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div class="col">
                                        <a href="/#" class="text-secondary">
                                            <div class="card shadow-none m-0 border-left">
                                                <div class="card-body text-center">
                                                    <i class="dripicons-tags text-muted" style={{ fontSize: "24px" }}></i>
                                                    <h3><span>0</span></h3>
                                                    <p class="text-muted font-15 mb-0">Paid Courses</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div class="container">
                    {
                        this.state.courses.map((course, index) => {
                            return (
                                <div class="card" style={{ backgroundColor: "#000000d1", marginBottom: "10px", color: "white" }}>
                                    <div class="row no-gutters">
                                        <div class="col-md-10">
                                            <div class="card-body">
                                                <h5 class="card-title">
                                                    {course.courseTitle} <span class="badge badge-primary">New</span>
                                                </h5><p class="card-text">
                                                    <span class="badge badge-pill badge-success"> {course.courseCategory}</span>
                                                </p>
                                                <p class="card-text">
                                                    {course.courseDesc}
                                                </p>

                                                <p class="card-text">
                                                    Click the below link to read or to download the file. <br />
                                                    File : <a href={"http://localhost:90/uploads/" + course.courseFile} target="_blank" rel="noreferrer"> {course.fileTitle}</a>
                                                </p>
                                                <div class="mb-5">
                                                    <p class="card-text">
                                                        <small class="text-muted"> <i class="fa fa-clock-o"></i> Last Updated: {course.postDate}</small>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-2 mr-auto" style={{ textAlign: "center", padding: "10px", marginTop: "auto", marginBottom: "auto" }}>
                                            <Link class="btn btn-primary btn-block" onClick={() => {
                                                if (window.confirm("Are you sure you want to delete??")) { this.courseDelete(course._id) };
                                            }} style={{ marginBottom: "4rem", background: "red" }}>
                                                <i class="fa fa-trash pr-2"></i> Delete
                                            </Link>
                                            <a class="btn btn-primary btn-block" href={"/update/" + course._id}>
                                                <i class="fa fa-edit pr-2"></i> Update
                                            </a>
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
export default MyCourses;