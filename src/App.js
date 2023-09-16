import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = val => {
    this.setState({isDarkTheme: !val})
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <Switch>
        <ThemeContext.Provider
          value={{isDarkTheme, toggleTheme: this.toggleTheme}}
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </ThemeContext.Provider>
      </Switch>
    )
  }
}

export default App
