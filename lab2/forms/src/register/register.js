import './register.css'
import {useState,useEffect} from 'react'

export default function Register(){

    const [registerFormData,setRegisterFormData] = useState({
        registerName:'',
        registerEmail:'',
        registerUsername:'',
        registerPass:'',
        registerConfirmPass:''
    })

    const[registerFormErrors,setRegisterFormErrors] = useState({
        registerNameErr:null,
        registerEmailErr:null,
        registerUsernameErr:null,
        registerPassErr:null,
        registerConfirmPassErr:null
    })

    useEffect(() => {
        // console.log(registerFormData);
      }, [registerFormData]);
    


    const handleRegisterForm = (e)=>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(e.target.name === 'registerEmail'){
            setRegisterFormData({
                ...registerFormData,
                registerEmail: e.target.value,
              });
              setRegisterFormErrors({
                ...registerFormErrors,
                registerEmailErr:
                  e.target.value.length === 0
                    ? "This field is required"
                    : regex.test(e.target.value) === false
                    ? "Enter valid email!"
                    : null,
              });
        }else if(e.target.name === 'registerName'){
            setRegisterFormData({
                ...registerFormData,
                registerName: e.target.value,
              });
              setRegisterFormErrors({
                ...registerFormErrors,
                registerNameErr:
                  e.target.value.length === 0
                    ? "This field is required"
                    : null,
              });
        }else if(e.target.name === 'registerUsername'){
            setRegisterFormData({
                ...registerFormData,
                registerUsername: e.target.value,
              });
              setRegisterFormErrors({
                ...registerFormErrors,
                registerUsernameErr:
                  e.target.value.length === 0
                    ? "This field is required"
                    : null,
              });
        }else if(e.target.name === 'registerPass'){
            setRegisterFormData({
                ...registerFormData,
                registerPass: e.target.value,
              });
              setRegisterFormErrors({
                ...registerFormErrors,
                registerPassErr:
                  e.target.value.length === 0
                    ? "This field is required"
                    : e.target.value < 8
                    ? "Min. length is 8 "
                    : null,
              });
        }else if(e.target.name === 'registerConfirmPass'){
            setRegisterFormData({
                ...registerFormData,
                registerConfirmPass: e.target.value,
              });
              setRegisterFormErrors({
                ...registerFormErrors,
                registerConfirmPassErr:
                  e.target.value.length === 0
                    ? "This field is required"
                    : e.target.value < 8
                    ? "Min. length is 8 "
                    : null,
              });
        }
    }
    const registerFormSubmit = (e) => {
        e.preventDefault();
        console.log(registerFormData);
      };
    return(
        <div>
      <h2>Register</h2>
      <form onSubmit={(e) => registerFormSubmit(e)}>

      <div className="mb-3">
          <label htmlFor="registerName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${
              registerFormErrors.registerNameErr ? "border-danger" : ""
            }`}
            name="registerName"
            aria-describedby="registerNameHelp"
            value={registerFormData.registerName}
            onChange={(e) => handleRegisterForm(e)}
          />
          <div id="registerNameHelp" className="text-danger form-text">
            {registerFormErrors.registerNameErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="registerEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${
              registerFormErrors.registerEmailErr ? "border-danger" : ""
            }`}
            name="registerEmail"
            aria-describedby="registerEmailHelp"
            value={registerFormData.registerEmail}
            onChange={(e) => handleRegisterForm(e)}
          />
          <div id="registerEmailHelp" className="text-danger form-text">
            {registerFormErrors.registerEmailErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="registerUsername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className={`form-control ${
              registerFormErrors.registerUsernameErr ? "border-danger" : ""
            }`}
            name="registerUsername"
            aria-describedby="registerUsernameHelp"
            value={registerFormData.registerUsername}
            onChange={(e) => handleRegisterForm(e)}
          />
          <div id="registerEmailHelp" className="text-danger form-text">
            {registerFormErrors.registerUsernameErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="registerPass" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="registerPass"
            value={registerFormData.registerPass}
            aria-describedby="registerPassHelp"
            onChange={(e) => handleRegisterForm(e)}
          />
          <div id="registerPassHelp" className="text-danger form-text">
            {registerFormErrors.userPassErr}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="registerConfirmPass" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="registerConfirmPass"
            value={registerFormData.registerConfirmPass}
            aria-describedby="registerConfirmPassHelp"
            onChange={(e) => handleRegisterForm(e)}
          />
          <div id="registerConfirmPassHelp" className="text-danger form-text">
            {registerFormErrors.userConfirmPassErr}
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
    )
}