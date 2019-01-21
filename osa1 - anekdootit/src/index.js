import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <>
      <button onClick={props.handler}>{props.text}</button>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * 6))
  const [ary, setPoints] = useState(new Uint8Array(6))
  const [index, setMostVoted] = useState(0)

  const nextAnecdote = () => {
    if (selected < 5) {
      setSelected(selected + 1)
    } else {
      setSelected(0)
    }
  }

  const addVote = () => {
    const copy = { ...ary }
    copy[selected] += 1;

    let biggest = copy[index];
    let mostV = index;
    for (let i = 0; i < 6; i++) {

        if (copy[i] > biggest) {
            biggest = ary[i]
            mostV = i;
        }

    }

    setPoints(copy)
    setMostVoted(mostV)
}

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {ary[selected]} votes</p>
      <Button handler={addVote} text="vote" />
      <Button handler={nextAnecdote} text="next anecdote" />
      <MostVotes votes={ary} index={index} anecdotes={props.anecdotes} />
    </div>
  )
}

const MostVotes = (props) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[props.index]}
      <p>has {props.votes[props.index]} votes</p>
    </>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)