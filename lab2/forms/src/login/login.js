import './login.css'
import {useState,useEffect} from 'react'

export default function Login(){

    const [loginFormData,setLoginFormData] = useState({
        userEmail:'',
        userPass:''
    })

    const[loginFormErrors,setLoginFormErrors] = useState({
        userEmailErr:null,
        userPassErr:null
    })

    useEffect(() => {
        // console.log(loginFormData);
      }, [loginFormData]);
    


    const handleForm = (e)=>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(e.target.name === 'email'){
            setLoginFormData({
                ...loginFormData,
                userEmail: e.target.value,
              });
              setLoginFormErrors({
                ...loginFormErrors,
                userEmailErr:
                  e.target.value.length === 0
                    ? "This field is required"
                    : regex.test(e.target.value) === false
                    ? "Enter valid email!"
                    : null,
              });
        }else if(e.target.name === 'pass'){
            setLoginFormData({
                ...loginFormData,
                userPass: e.target.value,
              });
              setLoginFormErrors({
                ...loginFormErrors,
                userPassErr:
                  e.target.value.length === 0
                    ? "This field is required"
                    : e.target.value < 8
                    ? "Min. length is 8 "
                    : null,
              });
        }
    }
    const formSubmit = (e) => {
        e.preventDefault();
        console.log(loginFormData);
      };
    return(
        <div>
      <h2>Login</h2>
      <form onSubmit={(e) => formSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              loginFormErrors.userEmailErr ? "border-danger" : ""
            }`}
            name="email"
            aria-describedby="useremailHelp"
            value={loginFormData.userEmail}
            onChange={(e) => handleForm(e)}
          />
          <div id="useremailHelp" className="text-danger form-text">
            {loginFormErrors.userEmailErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="pass"
            value={loginFormData.userPass}
            aria-describedby="passHelp"
            onChange={(e) => handleForm(e)}
          />
          <div id="ageHelp" className="text-danger form-text">
            {loginFormErrors.userPassErr}
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    )
}