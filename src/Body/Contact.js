import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class Contact extends Component {
    state = {
        fullname: "",
        email: "",
        number: "",
        country: "",
        subject: "",
        message: ""
    };
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    contactpost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/contact/insert", this.state)
            .then((response) => {
                console.log(response);
                window.alert(response.data.message)
                window.location.assign("/contact")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div class="feature">
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-12" style={{ marginTop: "18px" }}>
                                <div class="section-head col-sm-12" style={{ backgroundColor: "rgb(0 0 0 / 88%)", color: "white" }}>
                                    <h4><span style={{ color: "white" }}>Contact</span> US</h4>
                                    <p style={{ color: "white" }}>We are always here to help. If your have requirements/queries about our services; fill up the contact formbelow and we"ll do our best
                                     <br class="d-lg-block d-none" /> to reply within 24 hours Alternatively simply pickup the phone and give us a call.</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </section>

                <section class="form-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <form action="">
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" name="fullname" placeholder="Full name *" value={this.state.fullname} onChange={this.changeHandle} />

                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="email" class="form-control" name="email" placeholder="Email Address *" value={this.state.email} onChange={this.changeHandle} />
                                        </div>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <input type="text" class="form-control" name="number" placeholder="Contact Number *" value={this.state.number} onChange={this.changeHandle}/>

                                        </div>
                                        <div class="form-group col-md-6">
                                            <input type="email" class="form-control" name="country" placeholder="Country *" value={this.state.country} onChange={this.changeHandle} />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <input type="text" class="form-control" name="subject" placeholder="Subject *" value={this.state.subject} onChange={this.changeHandle} />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
                                            <textarea type="text" class="form-control" rows="3" name="message" placeholder="Message *" value={this.state.message} onChange={this.changeHandle}></textarea>
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12 text-center">
                                            <button type="submit" class="btn btn-primary" onClick={this.contactpost}><FontAwesomeIcon class="fas icon" icon="paper-plane" style={{ height: "2.2vh", width: "5%" }} /> Send Message</button>
                                        </div>
                                    </div>

                                </form>

                            </div>
                            <div class="col-md-6 address">
                                <h5>Call Us / WhatsApp</h5>
                                <p><a href="tel:+9779804924926"><FontAwesomeIcon class="fas icon" icon="phone-volume" style={{ height: "2.2vh", width: "5%" }} /> +(977) 9804924926 </a><br />
                                </p>
                                <h5>Email / Website</h5>
                                <p>
                                    <a href="mailto:distru152200@gmail.com"><FontAwesomeIcon class="fas icon" icon="envelope" style={{ height: "2.2vh", width: "5%" }} /> onlineshiksha@gmail.com</a><br />
                                    <a href="/"><FontAwesomeIcon class="fas icon" icon="globe" style={{ height: "2.2vh", width: "5%" }} /> www.onlineshiksha.edu.np </a>

                                </p>
                                <h5>Working hours</h5>
                                <p>
                                    24/7 hours
                                </p>
                                <h5>Address</h5>
                                <p>
                                    Jorpati, Kathmandu, Nepal
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="container-fluid">
                        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d882.983031261451!2d85.3790125999998!3d27.719381879281947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1616426686378!5m2!1sen!2snp" width="100%" height="300px" allowfullscreen="" loading="lazy"></iframe>

                    </div>


                </section>
            </div>
        )
    }
}
export default Contact;