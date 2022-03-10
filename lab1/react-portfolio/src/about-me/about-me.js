import './about-me.css'
function AboutMe(props){
    return(
        <>
        <section className="p-5 frst-sec container" id="#scrollspyHeading1">
            <div className="congtainer align-items-center gx-5 row d-flex">
                <h2 className="col-4 icons">About Me</h2>
                <div className="col">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo saepe consectetur non odit libero voluptatum,
            officia, cumque vel nobis sequi dolor facere accusantium modi quisquam eaque eos cupiditate. Vero, at.</p>
                    <button className="mt-4">Download Resume</button>
                </div>
                {/* <!-- <img src="https://via.placeholder.com/100" className="pt-4 col-4"> -->
                <!-- <i className="bi-hand-thumbs-up pt-4 col-4 icons"></i> --> */}
            </div>  
        </section>

        </>
    )
}

export default AboutMe