import { Component } from "react";
import axios from "axios";

class CourseUpdate extends Component {
    state = {
        courseTitle: "",
        courseCategory: "",
        courseDesc: "",
        courseFile: "",
        fileTitle: "",
        courseID:"",
        config: {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        },
        id: this.props.match.params.id
    };
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        axios.get("http://localhost:90/course/single/" + this.state.id, this.state.config)
            .then((response) => {
                this.setState({
                    courseID : response.data.data._id,
                    courseTitle: response.data.data.courseTitle,
                    courseDesc: response.data.data.courseDesc,
                    courseCategory: response.data.data.courseCategory,
                    courseFile: response.data.data.courseFile,
                    fileTitle: response.data.data.fileTitle
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    updateFile = (e) =>{
        e.preventDefault();
        const data = new FormData()
        data.append("courseFile", this.state.courseFile)
        axios.put("http://localhost:90/course/file/"+ this.state.courseID, data, this.state.config)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    updateCourse = (e) => {
        e.preventDefault()
        const data = {
            courseID: this.state.id,
            courseTitle: this.state.courseTitle,
            courseDesc: this.state.courseDesc,
            courseCategory: this.state.courseCategory,
            courseFile: this.state.courseFile,
            fileTitle: this.state.fileTitle
        }
        axios.put("http://localhost:90/course/update/"+this.state.courseID, data, this.state.config)
            .then((response) => {
                console.log(response)
                window.alert(response.data.message)
                window.location.assign("/mycourses")
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        if(!localStorage.getItem("token") || localStorage.getItem("accounttype")!=="Professor"){
            window.location.href="/"
       }
        return (
            <div>
                <img class="waver" src="https://image.freepik.com/free-photo/laptop-computer-mockup-work-desk-close-up-scene-with-plants-books-table-modern-thin-laptop-design-isolated-screen-mockup-app-web-site-promotion_176814-63.jpg" alt="wave" />
                <div class="container containerr" style={{ backgroundColor: "#6c757d7d" }}>
                    <div class="img2">
                        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="avatar" />
                        <h2 class="title">Upload a file</h2>
                        <div class="div">
                            <input type="file"  onChange={(event) => {this.setState({ courseFile: event.target.files[0]})}} id="file" style={{ padding: "20px", width: "100%" }} class="input" required />
                        </div>

                        <input type="submit" class="btn1" value="Save File" style={{ width: "100%" }} onClick={this.updateFile} />
                    </div>
                    <div class="login-content">
                        <form class="form">
                            <img src="https://cdn3.iconfinder.com/data/icons/communication-3-4/512/129-512.png" alt="avatar" />
                            <h2 class="title">Update a Course</h2>
                            <div class="row px-3" style={{ marginBottom: "10px" }}>
                                <label class="mb-1">
                                    <h5 class="mb-0 text-sm">Course Title</h5>
                                </label>
                                <input type="text" class="form-control" name="courseTitle" placeholder="Enter Course Title" value={this.state.courseTitle} onChange={this.changeHandle} style={{ fontSize: "15px" }} required />
                            </div>
                            <div class="row px-3">
                                <label class="mb-1">
                                    <h5 class="mb-0 text-sm">Course Category</h5>
                                </label>
                                <select class="form-control mb-4" name="courseCategory" value={this.state.courseCategory} onChange={this.changeHandle} required>
                                    <option selected>Select course category</option>
                                    <option value="Android"> Android </option>
                                    <option value="WebDevelopment"> Web Development </option>
                                    <option value="IOT"> Internet of Things </option>
                                </select>
                            </div>
                            <div class="row px-3" style={{ marginBottom: "10px" }}>
                                <label class="mb-1">
                                    <h5 class="mb-0 text-sm">File Title</h5>
                                </label>
                                <input type="text" class="form-control" name="fileTitle" placeholder="Enter File Title" value={this.state.fileTitle} onChange={this.changeHandle} style={{ fontSize: "15px" }} required />
                            </div>
                            <div class="row px-3">
                                <label class="mb-1">
                                    <h5 class="mb-0 text-sm">Course Description</h5>
                                </label>
                                <textarea type="text" class="form-control" name="courseDesc" placeholder="Enter Course Desc" value={this.state.courseDesc} onChange={this.changeHandle} style={{ fontSize: "15px" }} required />
                            </div>
                            <input type="submit" class="btn1" value="Save Course" style={{ width: "100%" }} onClick={this.updateCourse} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default CourseUpdate;