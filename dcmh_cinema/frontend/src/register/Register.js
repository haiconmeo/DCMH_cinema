import React from 'react'
import { Link } from 'react-router-dom';

import './Register.css'
class Register extends  React.Component{
    constructor(props){
        super(props)
            this.state = {
                user: {
                    Name: '',                    
                    username: '',
                    password: ''
                },
                submitted: false
            };
        }

    
    render(){
        const { user, submitted } = this.state;
        return (
            <div>
                <h6>Register</h6>
                <form name="From-register" action="{this.handleSubmit}">
                    <div>                       
                    
                        <label htmlFor="name" >Name</label>
                        <input type="text" name="name" value={user.Name} onChange={this.handleChange}/>
                    </div>
                    <div>                       
                    
                        <label htmlFor="username" >Username</label>
                        <input type="text" name="username" value={user.username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" value={user.password} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type="">Regiter</button>
                        {}
                        <Link to="/login" className="btn-link">Cancel</Link>
                    </div>
                </form>
                
            </div>
        )
    };
}
export default Register;