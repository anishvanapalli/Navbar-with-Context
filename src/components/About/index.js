// Write your code here
import './index.css'
import {Component} from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              {isDarkTheme ? (
                <div className="about-dark">
                  <Navbar />
                  <div className="about-content-card">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                      alt="about"
                      className="about-img"
                    />
                    <h1 className="about-heading-dark">About</h1>
                  </div>
                </div>
              ) : (
                <div className="about">
                  <Navbar />
                  <div className="about-content-card">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                      alt="about"
                      className="about-img"
                    />
                    <h1 className="about-heading">About</h1>
                  </div>
                </div>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
