import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";


class Android extends Component {
    state = {
        courses: [],
        config: {
            headers: { "authorization": `Bearer ${localStorage.getItem("token")}` }
        }
    }
    componentDidMount() {
        axios.get("http://localhost:90/course/Android", this.state.config)
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
    render() {
        if(!localStorage.getItem("token")){
            window.location.href="/"
        }
        return (
            <div style={{ backgroundColor: "#ffffff87" }}>
                <section>
                    <img class="waver" src="https://miro.medium.com/max/1200/1*-dcsNK7Y4C1BLGZ9cuHNCA.png" alt="wave" />
                    <div class="container">
                        <div class="row">
                            <div class="col-12" style={{ marginTop: "18px" }}>
                                <div class="section-head col-sm-12" style={{ backgroundColor: "rgb(0 0 0 / 88%)", color: "white", marginBottom: "0rem" }}>
                                    <h4><span style={{ color: "white" }}>Android</span> Development</h4>
                                    <p style={{ color: "white" }}>Meet the OS that’s optimised for how you use your phone. Helping you to manage conversations. And organising your day.
                                <br class="d-lg-block d-none" /> With even more tools and privacy controls that put you in charge.</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </section>

                <div class="container">
                    {
                        this.state.courses.map((course, index) => {
                            return (
                                <div class="card" style={{ backgroundColor: "#000000d1", marginBottom: "10px", color:"white" }}>
                                    <div class="row no-gutters">

                                        <div class="col-md-12">
                                            <div class="card-body">
                                            <h5 class="card-title">
                                                {course.courseTitle} <span class="badge badge-primary">New</span>
                                                <h6 class="text-muted float-right">Post By: {this.state.courses[index].addedby.fullname}</h6>
                                                </h5>
                                                <p class="card-text">
                                                    <span class="badge badge-pill badge-success"> <i class="fa fa-android"></i> Android</span>
                                                </p>
                                                <p class="card-text">
                                                    {course.courseDesc} <Link to={"/coursedetail/" + course._id} class="card-link">read more...</Link>
                                                </p>
                                                <div class="mb-5">
                                                    <p class="card-text float-right">
                                                        <small class="text-muted"> <i class="fa fa-clock-o"></i> Last Updated: {course.postDate}</small>
                                                    </p>
                                                </div>
                                                <Link class="btn btn-primary btn-block" to={"/coursedetail/" + course._id}>
                                                    <i class="fa fa-newspaper-o pr-2"></i> Read more
                                            </Link>
                                            </div>
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
export default Android;