import { Component } from "react";


class Home extends Component {
    render() {
        if(!localStorage.getItem("token")){
            var android = <a onClick={()=>{window.alert("Please Login First!!")}} href="/login" class="boxed-btn">Resources</a>
        }
        else{
            android = <a href="/android" class="boxed-btn">Resources</a>
        }
        if(!localStorage.getItem("token")){
            var web = <a onClick={()=>{window.alert("Please Login First!!")}} href="/login" class="boxed-btn">Resources</a>
        }
        else{
            web = <a  href="/web" class="boxed-btn">Resources</a>
        }
        if(!localStorage.getItem("token")){
            var iot = <a onClick={()=>{window.alert("Please Login First!!")}} href="/login" class="boxed-btn">Resources</a>
        }
        else{
            iot = <a  href="/iot" class="boxed-btn">Resources</a>
        }
        return (
            <div>
                <section class="bg-hero" id="home">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="banner_content">
                                    <h4>Welcome To Online शिक्षा</h4>
                                    <h2>Learn Online from Home</h2>
                                    <p>At Online शिक्षा, our mission is to provide an outstanding learning experience through flexible learning and expert teaching.
                                        </p>
                                    <button type="button" class="main-btn mb-3">
                                        <a href="/login" style={{ textDecoration: "none", color: "black" }}>Get Enrolled</a> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="services" id="services">
                    <div class="container">
                        <div class="row">
                            <div class="section-head col-sm-12">
                                <h4><span>Top</span> Courses</h4>
                                <p>These popular free courses all have top ratings and can be completed in less time, and are among Online शिक्षा"s most completed
                                    <br class="d-lg-block d-none" /> courses in 2021. Take the course for free and decide whether or not you"ll choose to pay for a certificate.</p>
                            </div>

                            <div class="col-lg-4 col-sm-6 service-box">
                                <div class="service-item">
                                    <figure>
                                        <img src="https://yt3.ggpht.com/ytc/AAUvwng8vsKs2CDl14rjq7nArGUE5Aiuup5g0tn9JPtuHfM=s900-c-k-c0x00ffffff-no-rj" class="img-fluid" alt="" />
                                        <figcaption>
                                            <div class="inner-text">
                                                {android}
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <h5 class="pt-2">Android</h5>
                                    <p class="py-2">Meet the OS that’s optimised for how you use your phone. Helping you to manage conversations.
                                     And organising your day. With even more tools and privacy controls that put you in charge.</p>

                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 service-box">
                                <div class="service-item">
                                    <figure>
                                        <img src="https://www.seowebsitedesign.com/wp-content/uploads/2012/12/Web_development.jpg" class="img-fluid" alt="" />
                                        <figcaption>
                                            <div class="inner-text">
                                                {web}
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <h5 class="pt-2">Web Development</h5>
                                    <p class="py-2">Web development is the work involved in developing a Web site for the Internet.
                                There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.</p>

                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 service-box">
                                <div class="service-item">
                                    <figure>
                                        <img src="https://www.pngitem.com/pimgs/m/360-3600842_internet-of-things-iot-device-icon-transparent-hd.png" class="img-fluid" alt="" />
                                        <figcaption>
                                            <div class="inner-text">
                                                {iot}
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <h5 class="pt-2">Internet of Things</h5>
                                    <p class="py-2">The Internet of Things, or "IoT" for short, is about extending the power of the internet beyond computers and smartphones
                                        to a whole range of other things, processes, and environments.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 service-box">
                                <div class="service-item">
                                    <figure>
                                        <img src="https://yt3.ggpht.com/ytc/AAUvwng8vsKs2CDl14rjq7nArGUE5Aiuup5g0tn9JPtuHfM=s900-c-k-c0x00ffffff-no-rj" class="img-fluid" alt="" />
                                        <figcaption>
                                            <div class="inner-text">
                                                {android}
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <h5 class="pt-2">Android</h5>
                                    <p class="py-2">Meet the OS that’s optimised for how you use your phone. Helping you to manage conversations.
                                     And organising your day. With even more tools and privacy controls that put you in charge.</p>

                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 service-box">
                                <div class="service-item">
                                    <figure>
                                        <img src="https://www.seowebsitedesign.com/wp-content/uploads/2012/12/Web_development.jpg" class="img-fluid" alt="" />
                                        <figcaption>
                                            <div class="inner-text">
                                                {web}
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <h5 class="pt-2">Web Development</h5>
                                    <p class="py-2">Web development is the work involved in developing a Web site for the Internet.
                                There are three kinds of Web developer specialization: front-end developer, back-end developer, and full-stack developer.</p>

                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 service-box">
                                <div class="service-item">
                                    <figure>
                                        <img src="https://www.pngitem.com/pimgs/m/360-3600842_internet-of-things-iot-device-icon-transparent-hd.png" class="img-fluid" alt="" />
                                        <figcaption>
                                            <div class="inner-text">
                                                {iot}
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <h5 class="pt-2">Internet of Things</h5>
                                    <p class="py-2">The Internet of Things, or "IoT" for short, is about extending the power of the internet beyond computers and smartphones
                                        to a whole range of other things, processes, and environments.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <section class="features">
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
                </section>
            </div>
        )
    }
}
export default Home;