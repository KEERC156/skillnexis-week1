import { useState } from 'react'
import Button from './components/Button.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import './App.css'

const practiceCards = [
  {
    title: 'Reusable by design',
    category: 'Components',
    description: 'Cards take their title, category, and description from props.',
  },
  {
    title: 'Small, focused pieces',
    category: 'Composition',
    description: 'The page combines components to build a complete practice app.',
  },
  {
    title: 'Accessible interactions',
    category: 'Interface',
    description: 'Buttons and form fields include clear labels and keyboard focus styles.',
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-shell">
      <Header
        title="Component Lab"
        subtitle="React reusable components practice"
        links={[
          { href: '#cards', label: 'Cards' },
          { href: '#counter', label: 'Counter' },
          { href: '#sample-form', label: 'Sample form' },
        ]}
      />

      <main className="page-content">
        <section className="welcome-panel" aria-labelledby="welcome-heading">
          <p className="eyebrow">WEEK 1 · REACT PRACTICE</p>
          <h1 id="welcome-heading">Build once.<br />Use it everywhere.</h1>
          <p>Each part of this page is composed from a small reusable component.</p>
        </section>

        <section id="cards" className="content-section" aria-labelledby="cards-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">REUSABLE UI</p>
              <h2 id="cards-heading">A few example cards</h2>
            </div>
            <p>Each card is customized through props.</p>
          </div>
          <div className="card-grid">
            {practiceCards.map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </section>

        <section id="counter" className="content-section counter-section" aria-labelledby="counter-heading">
          <div>
            <p className="eyebrow">STATE & EVENTS</p>
            <h2 id="counter-heading">Interactive counter</h2>
            <p>Use the buttons to update this value with React state.</p>
          </div>
          <div className="counter-widget">
            <output className="counter-value" aria-live="polite" aria-label="Current count">{count}</output>
            <div className="button-row">
              <Button onClick={() => setCount((value) => value + 1)}>Add one</Button>
              <Button variant="secondary" onClick={() => setCount(0)}>Reset</Button>
            </div>
          </div>
        </section>

        <section id="sample-form" className="content-section form-section" aria-labelledby="form-heading">
          <div>
            <p className="eyebrow">CONTROLLED INPUTS</p>
            <h2 id="form-heading">Sample form</h2>
            <p>Enter a name and email to see a local confirmation. Nothing is sent or stored.</p>
          </div>
          <Form />
        </section>
      </main>
      <Footer text="React Components Practice" />
    </div>
  )
}

export default App
