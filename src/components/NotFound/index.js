// Write your code here
import './index.css'
import {Component} from 'react'
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              {isDarkTheme ? (
                <div className="not-found-dark">
                  <Navbar />
                  <div className="not-found-content-card">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                      alt="not found"
                      className="not-found-img"
                    />
                    <h1 className="not-found-heading-dark">Lost Your Way?</h1>
                    <p className="not-found-para-dark">
                      We cannot seem to find the page you are looking for
                    </p>
                  </div>
                </div>
              ) : (
                <div className="not-found">
                  <Navbar />
                  <div className="not-found-content-card">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                      alt="not found"
                      className="not-found-img"
                    />
                    <h1 className="not-found-heading">Lost Your Way?</h1>
                    <p className="not-found-para">
                      We cannot seem to find the page you are looking for
                    </p>
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

export default NotFound
