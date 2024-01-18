// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="navbar-website-logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="navbar-sm-logout"
      />
      <ul className="navbar-lg-route-items">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/product" className="navbar-link">
            Products
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart" className="navbar-link">
            Cart
          </Link>
        </li>
        <li className="navbar-item">
          {/* <Link to="" className="navbar-link"> */}
          <button type="button" className="logout-button navbar-item">
            Logout
          </button>
          {/* </Link> */}
        </li>
      </ul>
    </div>
    <ul className="navbar-sm-route-items">
      <li className="navbar-sm-item">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="navbar-link-icon"
          />
        </Link>
      </li>
      <li className="navbar-sm-item">
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="navbar-link-icon"
          />
        </Link>
      </li>
      <li className="navbar-sm-item">
        <Link to="/cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="navbar-link-icon"
          />
        </Link>
      </li>
    </ul>
  </>
)

export default Header
