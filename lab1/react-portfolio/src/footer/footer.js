import './footer.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'

function Footer(props){
    return(
        <>
        <div id='footer' className="bg-black">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        <span className="">© 2021 Company, Inc</span>
      </div>
      <button>CONTACT ME</button>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3"><a className="icn" href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li className="ms-3"><a className="icn" href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li className="ms-3"><a className="icn" href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
      </ul>
    </footer>
  </div>
        </>
    )
}

export default Footer