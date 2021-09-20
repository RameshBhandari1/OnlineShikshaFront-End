import { Component } from "react";
import { Link } from "react-router-dom";

class AllCourses extends Component {
    render() {
        return (
            <div class="feature">
                <div class="container">
                    <div class="section-head col-sm-12" style={{backgroundColor:"rgb(0 0 0 / 88%)", color:"white"}}>
                        <h4><span style={{color:"white"}}>Our</span> Courses</h4>
                        <p style={{color:"white"}}>These popular free courses all have top ratings and can be completed in less time, and are among Online शिक्षा's most completed
                          <br class="d-lg-block d-none" /> courses in 2021. Take the course for free and decide whether or not you'll choose to pay for a certificate.</p>
                    </div>
                    <div class="card-deck homeCard">
                        <div class="card shadow service-item2" style={{ backgroundColor: "darkolivegreen", color: "white" }}>
                            <div class="inner" style={{ borderRadius: "1.25rem" }}>
                                <img class="card-img-top" src="https://img.over-blog-kiwi.com/2/58/40/81/20180202/ob_706d1c_hire-android-developer.png" alt="android" style={{ height: "25vh" }} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Android</h5>
                                <p class="card-text">Meet the OS that’s optimised for how you use your phone. Helping you to manage conversations.
                                And organising your day. With even more tools and privacy controls that put you in charge.</p>
                            </div>
                            <div class="card-footer" style={{ textAlign: "center", backgroundColor: "darkslategray", borderRadius: "1.25rem" }}>
                                <Link style={{ color: "white" }} to="/android">View All Resources</Link>
                            </div>
                        </div>
                        <div class="card shadow service-item2" style={{ backgroundColor: "aqua" }}>
                            <div class="inner" style={{ borderRadius: "1.25rem" }}>
                                <img class="card-img-top" src="https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg" alt="wed" style={{ height: "25vh" }} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Web Development</h5>
                                <p class="card-text">Web development is the work involved in developing a Web site for the Internet.
                                There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.</p>
                            </div>
                            <div class="card-footer" style={{ textAlign: "center", backgroundColor: "darkslategray", borderRadius: "1.25rem" }}>
                                <Link style={{ color: "white" }} to="/web">View All Resources</Link>
                            </div>
                        </div>
                        <div class="card shadow service-item2" style={{ backgroundColor: "#2a2a6c", color: "white" }}>
                            <div class="inner" style={{ borderRadius: "1.25rem" }}>
                                <img class="card-img-top" src="https://tridenstechnology.com/wp-content/uploads/2019/08/IoT-devices.jpg" alt="iot" style={{ height: "25vh" }} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Internet of Things</h5>
                                <p class="card-text">The Internet of Things, or "IoT" for short, is about extending the power of the internet beyond computers and smartphones
                                to a whole range of other things, processes, and environments.</p>
                            </div>
                            <div class="card-footer" style={{ textAlign: "center", backgroundColor: "darkslategray", borderRadius: "1.25rem" }}>
                                <Link style={{ color: "white" }} to="/iot">View All Resources</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default AllCourses;