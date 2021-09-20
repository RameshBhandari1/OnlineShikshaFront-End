import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div class="main-content">
                        <div class="left box">
                            <h2>About us</h2>
                            <div class="content">
                                <p>At Online शिक्षा, our mission is to provide an outstanding learning experience through flexible learning and expert teaching. 
                                You'll be taught by instructors who are leaders in their fields. They will encourage and challenge you, helping you to reach your
                                 full potential.</p>
                                <div class="social">
                                    <a href="#/"><img class="sicon" src="https://iconape.com/wp-content/png_logo_vector/facebook-f-logo-2019.png" alt="facebook" /></a>
                                    <a href="#/"><img class="sicon" src="https://seeklogo.com/images/T/twitter-logo-A84FE9258E-seeklogo.com.png" alt="twitter" /></a>
                                    <a href="#/"><img class="sicon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" alt="instagram" /></a>
                                    <a href="#/"><img class="sicon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" alt="youtube" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="center box">
                            <h2>Address</h2>
                            <div class="content">
                                <div class="place">
                                    <FontAwesomeIcon class=" fas icon" icon="map-marker-alt" />
                                    <span class="text">Kathmandu, Jorpati</span>
                                </div>
                                <div class="phone">
                                    <FontAwesomeIcon class="fas icon" icon="phone-volume" />
                                    <span class="text">+977-9863622122, 9804924926</span>
                                </div>
                                <div class="email">
                                    <FontAwesomeIcon class="fas icon" icon="envelope" />
                                    <span class="text">onlineshiksha@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div class="right box">
                            <h2>Contact us</h2>
                            <div class="content">
                                <form action="#">
                                    <div class="email">
                                        <div class="etext">Email *</div>
                                        <input type="email" required />
                                    </div>
                                    <div class="msg">
                                        <div class="etext">Message *</div>
                                        <input type="text" required />
                                    </div>
                                    <div class="btnsend">
                                        <button type="submit">Send</button>
                                    </div>
                                    {/* <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241316.64333236168!2d72.74110193617271!3d19.082522317332813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1547151374329"
                                            frameborder="0"></iframe>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="bottom" >
                        <center style={{background:"#004d80"}}>
                            <span class="credit">Created By <a href="/">Online शिक्षा</a> | </span>
                            <FontAwesomeIcon class="fas iconcopyright" icon="copyright" /><span> 2021 All rights reserved.</span>
                        </center>
                    </div>
                </footer>
            </div>
        )
    }
}
export default Footer;