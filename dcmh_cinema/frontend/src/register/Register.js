import React from 'react'


import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "./../actions/index";
import './Register.css'
class Register extends  React.Component{
    constructor(props){
        super(props)
            this.state = {
                user: {
                                      
                    username: '',
                    email: '', 
                    password: ''
                },
                submitted: false,
                confirm :''
            };
            
        }

        onSubmit = e => {
            if (this.state.confirm===this.state.password){
                e.preventDefault();
                // alert(this.state.username,this.state.email, this.state.password)
            this.props.register(this.state.username,this.state.email, this.state.password);
            }
            else{
                alert('Nhập chưa đúng yêu cầu')
            }
            
        }
    
    render(){
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        const { user, submitted,confirm } = this.state;
        return (
        <form className='form_login' onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Register</legend>
                    {this.props.errors.length > 0 && (
                        <ul>
                            {this.props.errors.map(error => (
                                <li key={error.field}>{error.message}</li>
                            ))}
                        </ul>
                    )}
                    <p>
                        <label htmlFor="username">Username</label>
                        <input className="input_login"
                            type="text" id="username"
                            onChange={e => this.setState({username: e.target.value})} />
                    </p>
                    <p>
                        <label htmlFor="username">Email</label>
                        <input className="input_login"
                            type="text" id="email"
                            onChange={e => this.setState({email: e.target.value})} />
                    </p>
                    <p>
                        <label htmlFor="password">Password</label>
                        <input className="input_login"
                            type="password" id="password"
                            onChange={e => this.setState({password: e.target.value})} />
                    </p>
                    <p>
                        <label htmlFor="password">confirm password</label>
                        <input className="input_login"
                            type="password" id="confirm"
                            onChange={e => this.setState({confirm: e.target.value})} />
                    </p>
                    <p>
                        <button className="button_sumit" type="submit">Register</button>
                    </p>

                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </fieldset>
            </form>
        )
    }
}

const mapStateToProps = state => {
    let errors = [];
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return {field, message: state.auth.errors[field]};
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = dispatch => {
    return {
        register: (username, email,password) => dispatch(auth.register(username,email, password)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);