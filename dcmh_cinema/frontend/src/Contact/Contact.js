import React from 'react';
import './Contact.css'

export default class Contact extends React.Component{
    render(){
        return(
            <div className="Contact">
                <div className="inner">
                    <h1>Get in touch with us</h1>
                    <input type="text" className="name-contact" placeholder="Your name"></input>
                    <input type="email" className="email" placeholder="Your email"></input>
                    <textarea rows="1" placeholder="Messenger" className="message"></textarea>
                    <button>Get in touch</button>
                </div>
                
            </div>
        );
    }
}