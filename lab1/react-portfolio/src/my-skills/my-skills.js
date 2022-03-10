import './my-skills.css'
import React from 'react'
class MySkills extends React.Component{
    constructor(){
        super()
        this.state={
            myArr:["HTML","CSS","JavaScript","React","Photoshop","Adobe XD","Node.js","WordPress"]
        }
    }
    render(){
        const {myArr} = this.state
        return(
            <div id='mySkills'>
        <div className="container p-5">
            <h2 className="text-center">Skills</h2>
            <p className="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a similique commodi maxime,
            eligendi facere esse quibusdam dignissimos at labore repudiandae quisquam repellendus dolorum nesciunt veniam
            recusandae libero temporibus nostrum!</p>
            <div className="row mt-5 gx-5">
                <div className="col-6">
                    <h5 className="text-center">MY FOCUS</h5>
                    <div className="parntleft">
                        <span className="row">UI/UX Design</span>
                        <span className="row">Responsive Design</span>
                        <span className="row">Web Design</span>
                        <span className="row">Mobile App Design</span>
                    </div>
                </div>
            <div className="col-6">
                
                    {myArr.map((el)=>{
                        return <div key={el} className="progress mt-2">
                            <div className="progress-bar" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0"
                            aria-valuemax="100">{el}</div>
                        </div>
                    })}
                    
            </div>
        </div>
    </div>
 </div>
        )
        
    }

        
}
export default MySkills