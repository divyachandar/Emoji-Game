// Write your code here.
import './index.css'
import {Component} from 'react'

class EmojiCard extends Component {
  render() {
    const {emojiDetails, onClickEmoji} = this.props
    const {emojiName, emojiUrl, id} = emojiDetails
    const onClickEmojiItem = () => {
      onClickEmoji(id)
    }
    return (
      <li className="emoji-item" onClick={onClickEmojiItem}>
        <img key={id} src={emojiUrl} className="emoji-image" alt={emojiName} />
      </li>
    )
  }
}

export default EmojiCard
