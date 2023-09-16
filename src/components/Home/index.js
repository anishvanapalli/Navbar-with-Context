// Write your code here
import './index.css'
import {Component} from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          let homeClass
          let headingClass
          if (isDarkTheme) {
            homeClass = 'home-dark'
            headingClass = 'home-heading-dark'
          } else {
            homeClass = 'home'
            headingClass = 'home-heading'
          }

          return (
            <div className={homeClass}>
              <Navbar />
              <div className="home-content-card">
                {isDarkTheme ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                    alt="home"
                    className="home-img"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                    alt="home"
                    className="home-img"
                  />
                )}
                <h1 className={headingClass}>Home</h1>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
