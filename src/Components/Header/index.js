import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/ebank/login')
  }

  return (
    <>
      <div className="nav-container">
        <img
          className="header-logo"
          src="https://assets.ccbp.in/frontend/react-js/ebank-logo-img.png"
          alt="website logo"
        />
        <button
          className="header-logout-button"
          type="button"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default withRouter(Header)
