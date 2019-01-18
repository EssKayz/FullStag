import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [clicks, setClicks] = useState({
    hyva: 0, neutraali: 0, huono: 0
  })

  const handleHyvaClick = () => {
    const newClicks = {
      hyva: clicks.hyva + 1,
      neutraali: clicks.neutraali,
      huono: clicks.huono
    }
    setClicks(newClicks)
  }

  const handleNeutraaliClick = () => {
    const newClicks = {
      hyva: clicks.hyva,
      neutraali: clicks.neutraali + 1,
      huono: clicks.huono
    }
    setClicks(newClicks)
  }

  const handleHuonoClick = () => {
    const newClicks = {
      hyva: clicks.hyva,
      neutraali: clicks.neutraali,
      huono: clicks.huono + 1
    }
    setClicks(newClicks)
  }

  const handlers = [handleHyvaClick, handleNeutraaliClick, handleHuonoClick]

  return (
    <>
      <Header title='anna palautetta' />
      <VoteButtons handlers={handlers} />
      <br />
      <Header title='statistiikka' />
      <Stats clicks={clicks} />
    </>
  )
}

const VoteButtons = (props) => {
  return (
    <div>
      <Button handleClick={props.handlers[0]} text="hyvä" />
      <Button handleClick={props.handlers[1]} text="neutraali" />
      <Button handleClick={props.handlers[2]} text="huono" />
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Stats = (props) => {
  const sum = props.clicks.hyva + props.clicks.neutraali + props.clicks.huono
  const avg = (props.clicks.hyva + (props.clicks.huono * -1)) / sum
  const positive = (props.clicks.hyva / sum) * 100

  if (sum !== 0) {
    return (
      <>
      <table>
        <tbody>
          <tr><Stat statName="hyvä" statValue={props.clicks.hyva} /></tr>
          <tr><Stat statName="neutraali" statValue={props.clicks.neutraali} /></tr>
          <tr><Stat statName="huono" statValue={props.clicks.huono} /></tr>
          <tr><Stat statName="yhteensä" statValue={sum} /></tr>
          <tr><Stat statName="keskiarvo" statValue={sum !== 0 ? avg : 0} /></tr>
          <tr><Stat statName="positiivisia" statValue={sum !== 0 ? positive : 0} postposition="%" /></tr>
        </tbody>
      </table>
      </>
    )
  } else {
    return (
      <p>Ei yhtään palautetta annettu</p>
    )
  }
}

const Stat = (props) => {
  return (
    <>
      <td>{props.statName}</td> 
      <td>{props.statValue}{props.postposition}</td>
    </>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))