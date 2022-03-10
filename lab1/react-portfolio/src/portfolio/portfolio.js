import './portfolio.css'
import React from 'react'
class Portfolio extends React.Component{
    constructor(){
        super()
        this.state={
            myArr:["WEB DESIGN","MOBILE DESIGN","LOGO DESIGN","WEB APPLICATION DEVELOPMENT","MOBILE APPLICATION DEVELOPMENT","PWA DEVELOPMENT"]
        }
    }
    render(){
        const {myArr} = this.state
        return(
            <div id='portfolio' className="container pt-5">
  <h2>Portfolio</h2>
  <div className="d-flex flex-wrap flex-row row">
            {myArr.map((el)=>{
            return <div key={el} className="card bg-dark text-white text-center col-3">
             <div className="card-img-overlay" >
            <h5 className="card-title mt-4 fs-6">{el}</h5>
            <hr/>
          </div>
    </div>

        })}

  </div>
</div>
        )
    }
}
export default Portfolio