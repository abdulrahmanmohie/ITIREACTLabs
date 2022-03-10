import React from 'react'
import Image from '../assets/1.jpg'
import './header.css'
class Header extends React.Component{
    constructor(){
        super()
        this.state={
            firstName:'Abdelrahman',
            lastName:'Mohyeldin',
            jobTitle:"MEARN Stack Web developer"
        }
        
    }

    render(){
        return(
            <>
            <div className="card bg-dark text-white ">
                <img src={Image} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h5 className="card-title mt-5">{this.state.firstName} {this.state.lastName}</h5>
                    <p className="card-text mt-3">{this.state.jobTitle}</p>
                    <button id='btn1'>CONTACT ME</button>
                </div>
            </div>
            </>
        )
    }
}
export default Header