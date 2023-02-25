import { useState } from "react"
import "../styles.css";

export function CommentForm({
  loading,
  error,
  onSubmit,
  autoFocus = false,
  initialValue = "",
}) {
  const [message, setMessage] = useState(initialValue)

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(message).then(() => setMessage(""))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="comment-form-row">
        <input
          autoFocus={autoFocus}
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="message-input"
        />
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Loading" : "Post"}
        </button>
      </div>
      <div className="error-msg">{error}</div>
    </form>
  )
}
