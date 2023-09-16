// Write your code here
import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const themeChange = () => {
            toggleTheme(isDarkTheme)
          }

          let navClass
          let linkClass
          if (isDarkTheme) {
            navClass = 'navbar-dark'
            linkClass = 'navbar-link-dark'
          } else {
            navClass = 'navbar'
            linkClass = 'navbar-link'
          }

          return (
            <>
              <div className={navClass}>
                {isDarkTheme ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                    alt="website logo"
                    className="website-logo"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                    alt="website logo"
                    className="website-logo"
                  />
                )}
                <ul className="navbar-ul">
                  <li>
                    <Link className={linkClass} to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className={linkClass} to="/about">
                      About
                    </Link>
                  </li>
                </ul>
                <button
                  className="theme-button"
                  type="button"
                  data-testid="theme"
                  onClick={themeChange}
                >
                  {isDarkTheme ? (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                      alt="theme"
                      className="navbar-theme-img"
                    />
                  ) : (
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                      alt="theme"
                      className="navbar-theme-img"
                    />
                  )}
                </button>
              </div>
              {isDarkTheme ? null : <hr className="line" />}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
