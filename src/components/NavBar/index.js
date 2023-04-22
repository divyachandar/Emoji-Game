// Write your code here.
import './index.css'
import {Component} from 'react'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, topScore, isGameOver} = this.props
    if (isGameOver) {
      return null
    }
    return (
      <div className="score-container">
        <p className="score-label">
          Score:<span className="score-value">{currentScore}</span>
        </p>
        <p className="score-label">
          Total Score:<span className="score-value">{topScore}</span>
        </p>
      </div>
    )
  }

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-title-container">
          <img
            className="logo-image"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <p className="logo-title">Emoji Game</p>
        </div>
        {this.renderScores()}
      </div>
    )
  }
}
export default NavBar
