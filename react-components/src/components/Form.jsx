import { useState } from 'react'
import Button from './Button.jsx'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName || !trimmedEmail) {
      setFeedback('Please enter both your name and email.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFeedback('Please enter a valid email address.')
      return
    }

    setFeedback(`Thanks, ${trimmedName}. This sample form is valid; no data was sent.`)
    setName('')
    setEmail('')
  }

  return (
    <form className="sample-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="sample-name">Name</label>
      <input
        id="sample-name"
        name="name"
        type="text"
        autoComplete="name"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        aria-describedby="form-feedback"
      />
      <label htmlFor="sample-email">Email</label>
      <input
        id="sample-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        aria-describedby="form-feedback"
      />
      <Button type="submit">Check form</Button>
      <p id="form-feedback" className="form-feedback" role="status" aria-live="polite">{feedback}</p>
    </form>
  )
}

export default Form
