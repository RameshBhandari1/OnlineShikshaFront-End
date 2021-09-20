import { Component } from "react";
import logo from "../ui/Online_शिक्षा-removebg-preview.png";

class AboutUS extends Component {
    render() {
        return (
            <div class="about-feature">
                <section class="about-company-section">
                    <div class="container p-1 p-sm-3">
                        <div class="row">
                            <div class="section-head col-sm-12" style={{backgroundColor:"rgb(0 0 0 / 88%)", color:"white"}}>
                                    <h4><span style={{color:"white"}}>About</span> US</h4>
                             </div>
                                <hr />

                            <div class="col-md-3">
                                <img class="img-fluid" src={logo} alt="" />
                            </div>

                            <div class="col-md-9">
                                <p>
                                At Online शिक्षा, our mission is to provide an outstanding learning experience through flexible learning and expert teaching. 
                                You"ll be taught by instructors who are leaders in their fields. They will encourage and challenge you, helping you to reach your
                                 full potential. Our teaching staff are leading experts in their subject areas with connections in industry and other professional bodies.
                                  They use their industrial links, research and discoveries to make sure you"re taught the most up-to-date subjects. 
                                  
                                </p>
                                <p>
                                The lecturers are very approachable. You will be able to communicate with them to get advice and they will also point 
                                  you in the right direction. From this online learning platform Online शिक्षा, you"ll be submerged in this culture of innovation 
                                  and enterprise. You will become part of this community and be taught by experts carrying out crucial work.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="home-newsletter p-2 pt-md-2 pb-md-2">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h3>
                                Subscribe to our Website
                            </h3>
                            <div class="input-group p-3">
                                <input type="email" class="form-control" placeholder="Enter your email" />
                                <span class="input-group-btn">
                                    <button class="btn btn-theme" type="submit">Subscribe</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="feature-about">
                        <div class="container py-5">
                            <div class="row">
                                <div class="section-head col-sm-12">
                                    <h4><span class="text-light">Our</span> Features</h4>
                                    <p class="text-light">Special features of our website. </p>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="feature-box text-center">
                                        <div class="feature-icon">
                                            <p>Contact</p>
                                        </div>
                                        <h4>Direct Contact</h4>
                                        <p>Directly contact with professor and mentor through Online शिक्षा.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="feature-box text-center">
                                        <div class="feature-icon">
                                          <p>Free</p>
                                        </div>
                                        <h4>Free Courses</h4>
                                        <p>Learner can access free courses from Online शिक्षा.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                                    <div class="feature-box text-center">
                                        <div class="feature-icon">
                                           <p>New</p>
                                        </div>
                                        <h4>New Courses</h4>
                                        <p>Learner can get new idea and knowledge from Online शिक्षा.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )
    }
}
export default AboutUS;