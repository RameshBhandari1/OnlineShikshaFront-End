import axios from "axios";
import { Component } from "react";

class PostCourse extends Component {
    state = {
        courseTitle: "",
        courseCategory: "",
        courseDesc: "",
        courseFile: "",
        fileTitle:"",
        config: {
            headers: {
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        }
    }
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    filepath = (event) => {
        console.log(event.target.files[0])
        this.setState({
            courseFile: event.target.files[0]
        })

    }

    postcourse = (e) => {
        e.preventDefault();
        const courseData = new FormData()
        courseData.append("courseFile", this.state.courseFile)
        courseData.append("courseTitle", this.state.courseTitle)
        courseData.append("courseCategory", this.state.courseCategory)
        courseData.append("fileTitle", this.state.fileTitle)
        courseData.append("courseDesc", this.state.courseDesc)
        axios.post("http://localhost:90/course/post", courseData, this.state.config)
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
                <img class="waver" src="https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMjI4OTkyfHxlbnwwfHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="wave" />
                <div class="container containerr" style={{ backgroundColor: "#6c757d7d" }}>
                    <div class="img2" style={{marginTop:"0rem"}}>
                        <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="avatar" />
                        <h2 class="title">Upload a file</h2>
                        <div class="div">
                            <input type="file" onChange={this.filepath} id="file" name="file" style={{ padding: "20px", width: "100%" }} class="input"
                                required />
                        </div>
                        <div class="row px-3">
                                <label class="mb-1">
                                    <h5 class="mb-0 text-sm">File Title</h5>
                                </label>
                                <input type="text" class="form-control" name="fileTitle" placeholder="Enter File Title" value={this.state.fileTitle} onChange={this.changeHandle} style={{fontSize:"15px"}} required />
                            </div>
                    </div>
                    <div class="login-content">
                        <form class="form">
                            <img src="https://cdn3.iconfinder.com/data/icons/communication-3-4/512/129-512.png" alt="avatar" />
                            <h2 class="title">Post a Course</h2>
                            <div class="row px-3" style={{marginBottom:"10px"}}>
                                <label class="mb-1">
                                    <h5 class="mb-0 text-sm">Course Title</h5>
                                </label>
                                <input type="text" class="form-control" name="courseTitle" placeholder="Enter Course Title" value={this.state.courseTitle} onChange={this.changeHandle} style={{fontSize:"15px"}} required />
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
                            <div class="row px-3">
                                <label class="mb-1">
                                    <h5 class="mb-0 text-sm">Course Description</h5>
                                </label>
                                <textarea type="text" class="form-control" name="courseDesc" placeholder="Enter Course Desc" value={this.state.courseDesc} onChange={this.changeHandle} style={{fontSize:"15px"}} required />
                            </div>
                            <input type="submit" class="btn1" value="Save Course" style={{ width: "100%" }} onClick={this.postcourse} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default PostCourse;