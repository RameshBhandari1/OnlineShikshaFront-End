import { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import CourseUpdate from "./CourseUpdate";
import profile from "./UserProfile";
import UpdateProfile from "./UpdateUser";
import PostCourse from "./PostCourse";
import AllCourses from "./AllCourses";
import Android from "./Android";
import IOT from "./IOT";
import Web from "./Web";
import MyCourses from "./MyCourses";
import CourseDetail from "./CourseDetail";
import SavedCourse from "./SavedCourse";
import Dashboard from "./Dashboard";
import AdminLogin from "./AdminLogin";
import CoursePage from "./course";
import { Route} from "react-router-dom";


class Body extends Component {
    render() {
        return (
            <div>
                <Route path="/register" component={Register} />
                <Route path="/Login" component={Login} />
                <Route path="/" exact component={Home} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/contact" component={Contact} />
                <Route path="/update/:id" component={CourseUpdate} />
                <Route path="/userUpdate" component={UpdateProfile} />
                <Route path="/profile" component={profile} />
                <Route path="/allcourse" component={AllCourses} />
                <Route path="/android" component={Android} />
                <Route path="/iot" component={IOT} />
                <Route path="/web" component={Web} />
                <Route path="/mycourses" component={MyCourses} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/course/:courseid" component={CoursePage} />
                <Route path="/adminlogin" component={AdminLogin} />
                <Route path="/coursedetail/:id" component={CourseDetail} />
                <Route path="/savecourse" component={SavedCourse} />
                <Route path="/postcourse" component={PostCourse} />

            </div>
        )
    }
}
export default Body;