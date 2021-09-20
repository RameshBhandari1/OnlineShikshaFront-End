import { Component } from "react";
import logo from "./Online_शिक्षा-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";

class Header extends Component {
	state = {
		user: [],
		config: {
			headers: { "authorization": `Bearer ${localStorage.getItem("token")}` }
		}
	}
	componentDidMount() {
		axios.get("http://localhost:90/user/getme", this.state.config)
			.then((response) => {
				console.log(response)
				this.setState({
					user: response.data.data
				})
			})
			.catch((err) => {
				console.log(err.response)
			})
	}
	render() {

		if (localStorage.getItem("token") && localStorage.getItem("accounttype") === "Professor") {
			if (this.state.user.profile !== "") {
				var pp = <img src={"http://localhost:90/uploads/" + this.state.user.profile} height="40px" width="40px" style={{ borderRadius: "15px", marginRight: "15px", backgroundColor: "whitesmoke" }} alt="" />
			}
			else {
				pp = <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" height="40px" width="40px" style={{ borderRadius: "15px", marginRight: "15px", backgroundColor: "whitesmoke" }} alt="" />
			}
			var menunav =
				<div>
					<div class="p-1" id="topHeader" style={{ background: "#ffffffdb" }}>
						<div class="container">
							<div class="row">
								<div class="col-12 text-right">
									<Link class="p-1 ttt" to="tel:+9779804924926" style={{ marginRight: "70px" }}> <FontAwesomeIcon id="navphone" icon="phone-volume" />+977 9863622122 </Link>
									<Link class="p-1 ttt" to="#/"> <FontAwesomeIcon icon="envelope" id="navemail" />onlineshiksha@gmail.com</Link>
								</div>
							</div>
						</div>
					</div>
					<div class="headerbg" style={{ background: "#004d80" }}>
						<nav class="navbar navbar-expand-lg navbar-light">
							<Link class="navbar-brand" to="/" style={{ background: "white", borderRadius: "10px", width: "16%" }}>
								<img src={logo} alt="logo" style={{ height: "7vh", width: "98%" }} /></Link>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarNav">
								<div class="offcanvas-header mt-3">
									<button type="button" class="btn-close float-left">
										<FontAwesomeIcon id="navphone" icon="window-close" />
									</button>
									<h5 class="text-white py-2 menu">Menu</h5>
								</div>
								<ul class="navbar-nav mr-auto">
									<li class="nav-item active">
										<Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/allcourse">Our Courses</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/aboutus">About</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/contact">Contact</Link>
									</li>
								</ul>
								<ul class="navbar-nav">
									<li class="nav-item" style={{ marginTop: "7px" }}>
										<Link class="nav-link" to="/postcourse" id="login">Post a Course</Link>
									</li>
									<li class="nav-item dropdown" style={{ marginRight: "20px" }}>
										<Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
											data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											{pp}
											{this.state.user.fullname}
										</Link>
										<div class="dropdown-menu" aria-labelledby="navbarDropdown">
											<Link class="dropdown-item" to="/profile">My Profile</Link>
											<Link class="dropdown-item" to="/mycourses">My Courses</Link>
											<Link class="dropdown-item" to="/" onClick={e => {
												e.preventDefault();
												if (window.confirm("Are you sure you want to logout?")) {
													localStorage.removeItem("token")
													localStorage.removeItem("accounttype")
													window.location.assign("/")
												}
											}}>logout</Link>
										</div>
									</li>
								</ul>
							</div>
						</nav>
						{/* search */}
						<div class="search-bar">
							<div class="container">
								<div class="row">
									<div class="col-lg-10 mx-auto">
										<form>
											<div class="p-1 bg-light shadow-sm">
												<div class="input-group">
													<input type="search" placeholder="Search for Course" class="form-control border-0 bg-light" />
													<div class="input-group-append">
														<div class="btn-group">
															<button type="button" class="btn btn-outline-secondary dropdown-toggle smallscreen" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																Select Course </button>
															<div class="dropdown-menu">
																<a class="dropdown-item" href="/iot" >IOT</a>
																<a class="dropdown-item" href="/android">Android</a>
																<a class="dropdown-item" href="/web">Web</a>
															</div>
														</div>
														<div class="input-group-append">
															<button type="submit" class="btn btn-outline-primary border-0">Search</button>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		}
		else if (localStorage.getItem("token") && localStorage.getItem("accounttype") === "Learner") {
			if (this.state.user.profile !== "") {
				pp = <img src={"http://localhost:90/uploads/" + this.state.user.profile} height="40px" width="40px" style={{ borderRadius: "15px", marginRight: "15px", backgroundColor: "whitesmoke" }} alt="" />
			}
			else {
				pp = <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/82b8d8efd3b0ac6382b9d0d71a99c6cf9dcefa23/img/avatar.svg" height="40px" width="40px" style={{ borderRadius: "15px", marginRight: "15px", backgroundColor: "whitesmoke" }} alt="" />
			}
			menunav =
				<div>
					<div class="p-1" id="topHeader" style={{ background: "#ffffffdb" }}>
						<div class="container">
							<div class="row">
								<div class="col-12 text-right">
									<Link class="p-1 ttt" to="tel:+9779804924926" style={{ marginRight: "70px" }}> <FontAwesomeIcon id="navphone" icon="phone-volume" />+977 9863622122 </Link>
									<Link class="p-1 ttt" to="#/"> <FontAwesomeIcon icon="envelope" id="navemail" />onlineshiksha@gmail.com</Link>
								</div>
							</div>
						</div>
					</div>
					<div class="headerbg" style={{ background: "#004d80" }}>
						<nav class="navbar navbar-expand-lg navbar-light">
							<Link class="navbar-brand" to="/dashboard" style={{ background: "white", borderRadius: "10px", width: "16%" }}>
								<img src={logo} alt="logo" style={{ height: "7vh", width: "98%" }} /></Link>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarNav">
								<div class="offcanvas-header mt-3">
									<button type="button" class="btn-close float-left">
										<FontAwesomeIcon id="navphone" icon="window-close" />
									</button>
									<h5 class="text-white py-2 menu">Menu</h5>
								</div>
								<ul class="navbar-nav mr-auto">
									<li class="nav-item active">
										<Link class="nav-link" to="/dashboard">Home <span class="sr-only">(current)</span></Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/allcourse">Our Courses</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/aboutus">About</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/contact">Contact</Link>
									</li>
								</ul>
								<ul class="navbar-nav" style={{ marginRight: "20px" }}>
									<li class="nav-item dropdown">
										<Link class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
											data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											{pp}
											{this.state.user.fullname}
										</Link>
										<div class="dropdown-menu" aria-labelledby="navbarDropdown">
											<Link class="dropdown-item" to="/profile">My Profile</Link>
											<Link class="dropdown-item" to="/savecourse">Saved Courses</Link>
											<Link class="dropdown-item" to="/" onClick={e => {
												e.preventDefault();
												if (window.confirm("Are you sure you want to logout?")) {
													localStorage.removeItem("token")
													localStorage.removeItem("accounttype")
													window.location.assign("/")
												}
											}}>logout</Link>
										</div>
									</li>
								</ul>
							</div>
						</nav>
						{/* search */}
						<div class="search-bar">
							<div class="container">
								<div class="row">
									<div class="col-lg-10 mx-auto">
										<form>
											<div class="p-1 bg-light shadow-sm">
												<div class="input-group">
													<input type="search" placeholder="Search for Course" class="form-control border-0 bg-light" />
													<div class="input-group-append">
														<div class="btn-group">
															<button type="button" class="btn btn-outline-secondary dropdown-toggle smallscreen" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																Select Course </button>
															<div class="dropdown-menu">
																<a class="dropdown-item" href="/iot" >IOT</a>
																<a class="dropdown-item" href="/android">Android</a>
																<a class="dropdown-item" href="/web">Web</a>
															</div>
														</div>
														<div class="input-group-append">
															<button type="submit" class="btn btn-outline-primary border-0">Search</button>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		}
		else {
			menunav =
				<div>
					<div class="p-1" id="topHeader" style={{ background: "#ffffffdb" }}>
						<div class="container">
							<div class="row">
								<div class="col-12 text-right">
									<Link class="p-1 ttt" to="tel:+9779804924926" style={{ marginRight: "70px" }}> <FontAwesomeIcon id="navphone" icon="phone-volume" />+977 9863622122 </Link>
									<Link class="p-1 ttt" to="#/"> <FontAwesomeIcon icon="envelope" id="navemail" />onlineshiksha@gmail.com</Link>
								</div>
							</div>
						</div>
					</div>
					<div class="headerbg" style={{ background: "#004d80" }}>
						<nav class="navbar navbar-expand-lg navbar-light">
							<Link class="navbar-brand" to="/" style={{ background: "white", borderRadius: "10px", width: "16%" }}>
								<img src={logo} alt="logo" style={{ height: "7vh", width: "98%" }} /></Link>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
							<div class="collapse navbar-collapse" id="navbarNav">
								<div class="offcanvas-header mt-3">
									<button type="button" class="btn-close float-left">
										<FontAwesomeIcon id="navphone" icon="window-close" />
									</button>
									<h5 class="text-white py-2 menu">Menu</h5>
								</div>
								<ul class="navbar-nav mr-auto">
									<li class="nav-item active">
										<Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/allcourse">Our Courses</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/aboutus">About</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/contact">Contact</Link>
									</li>
								</ul>
								<ul class="navbar-nav" style={{ marginRight: "20px" }}>
									<li class="nav-item">
										<Link class="nav-link" to="/login" id="login">Login</Link>
									</li>
									<li class="nav-item">
										<Link class="nav-link" to="/register" id="signup">Sign Up</Link>
									</li>
								</ul>
							</div>
						</nav>
						{/* search */}
						<div class="search-bar">
							<div class="container">
								<div class="row">
									<div class="col-lg-10 mx-auto">
										<form>
											<div class="p-1 bg-light shadow-sm">
												<div class="input-group">
													<input type="search" placeholder="Search for Course" class="form-control border-0 bg-light" />
													<div class="input-group-append">
														<div class="btn-group">
															<button type="button" class="btn btn-outline-secondary dropdown-toggle smallscreen" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																Select Course </button>
															<div class="dropdown-menu">
																<a class="dropdown-item" href="/" >IOT</a>
																<a class="dropdown-item" href="/">Android</a>
																<a class="dropdown-item" href="/">Web Development</a>
																<div class="dropdown-divider"></div>
																<a class="dropdown-item" href="/">Science</a>
															</div>
														</div>
														<div class="input-group-append">
															<button type="submit" class="btn btn-outline-primary border-0">Search</button>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		}
		return (
			<div>
				{menunav}
			</div>

		)
	}
}
export default Header;