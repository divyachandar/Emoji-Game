/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    isGameOver: false,
    topScore: 0,
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  endGameAndTopScore = newScore => {
    const {topScore} = this.state
    if (newScore > topScore) {
      this.setState({topScore: newScore})
    }
    this.isGameOver(true)
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresentEmoji = clickedEmojis.includes(id)
    if (isPresentEmoji) {
      this.endGameAndTopScore(clickedEmojis.length)
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        this.endGameAndTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, id],
      }))
    }
  }

  restartGame = () => {
    this.setState({clickedEmojis: [], isGameOver: true})
  }

  renderWinOrLoss = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = emojisList.length === clickedEmojis.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.restartGame}
        score={clickedEmojis.length}
      />
    )
  }

  renderEmojiList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emoji-list">
        {shuffledEmojisList.map(emojiItem => (
          <EmojiCard
            key={emojiItem.id}
            emojiDetails={emojiItem}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojis, isGameOver, topScore} = this.state
    const currentScore = clickedEmojis.length

    return (
      <div className="app-container">
        <NavBar
          currentScore={currentScore}
          topScore={topScore}
          isGameOver={isGameOver}
        />
        <div className="emoji-body-container">
          {isGameOver ? this.renderWinOrLoss() : this.renderEmojiList()}
        </div>
      </div>
    )
  }
}
export default EmojiGame
