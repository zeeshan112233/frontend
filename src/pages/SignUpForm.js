import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:3000/users/signup";

class SignUpForm extends Component {
  constructor(props) {
    super();

    this.state = {
      // email: "",
      password: "",
      name: "",
      hasAgreed: false,
      signedup: false,
      profilephoto: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadimage = this.uploadimage.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value,
    });
  }

  uploadimage(e) {
    this.setState({ profilephoto: e.target.files[0] });

    //   const param = e.target.files[0];
    //   let reader = new FileReader();
    //   reader.readAsDataURL(param);
    //   this.setState({
    //     profilephoto: reader,
    //   });
    //   console.log(reader);
  }

  handleSubmit(e) {
    e.preventDefault();

    // let username = this.state.name;

    // let password = this.state.password;

    // let email = this.state.email;
    //    let profilephoto = this.state.profilephoto.result;

    // let data = {
    //   username,
    //   password,
    //   // email,
    //   //    profilephoto,
    // };
    //console.log(profilephoto);
    /// we use this. set state method to reload a page  on changing state of a variabel

    // this.setState({
    //   signedup: true,
    // });

    // console.log(this.state.signedup);

    const formData = new FormData();
    formData.append("username", this.state.name);
    formData.append("password", this.state.password);
    formData.append("profilephoto", this.state.profilephoto);

    // fetch(API, {
    //   method: "POST",
    //   // body: JSON.stringify(data),
    //   body: JSON.stringify(formData),

    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then(function (response) {
    //   if (response.ok) {
    //     alert("Signup Successfully done Bingo !!! ");
    //   } else {
    //     var error = new Error(response);
    //     error.response = response;
    //     throw error;
    //   }
    // });

    axios
      .post("http://localhost:3000/users/signup", formData, {})
      .then((res) => {
        console.log(res);
      });
  }

  render() {
    // not signed up  so redirect to login page with the return url
    if (this.state.signedup) {
      return <Redirect to={{ pathname: "/sign-in" }} />;
    } else {
      return (
        <div className='FormCenter'>
          <form
            onSubmit={this.handleSubmit}
            // encType='multipart/form-data'
            className='FormFields'
          >
            {/* <div className='FormField'>
              <label className='FormField__Label' htmlFor='email'>
                Email ID
              </label>
              <input
                type='text'
                id='email'
                className='FormField__Input'
                placeholder='Enter your email ID'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
 */}
            <div className='FormField'>
              <label className='FormField__Label' htmlFor='name'>
                Full Name
              </label>
              <input
                type='text'
                id='name'
                className='FormField__Input'
                placeholder='Enter your full name'
                name='name'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='password'>
                Password
              </label>
              <input
                type='password'
                id='password'
                className='FormField__Input'
                placeholder='Enter your password'
                name='password'
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className='FormField'>
              <label className='FormField__Label' htmlFor='profilephoto'>
                Upload Photo{" "}
              </label>
              <input
                type='file'
                accept='image/*'
                className='FormField__Input'
                // value={this.state.profilephoto}
                onChange={this.uploadimage}
              />
            </div>

            <div className='FormField'>
              <label className='FormField__CheckboxLabel'>
                <input
                  className='FormField__Checkbox'
                  type='checkbox'
                  name='hasAgreed'
                  value={this.state.hasAgreed}
                  onChange={this.handleChange}
                />{" "}
                I agree all statements in{" "}
                <a href='' className='FormField__TermsLink'>
                  terms of service
                </a>
              </label>
            </div>

            <div className='FormField'>
              <button className='FormField__Button mr-20'>Sign Up</button>{" "}
              <Link to='/sign-in' className='FormField__Link'>
                I'm already member
              </Link>
            </div>
          </form>
        </div>
      );
    }
  }
}

export default SignUpForm;
