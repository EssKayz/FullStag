import React from 'react'

const Course = (props) => {
    return (
        <>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <br />
            <Total parts={props.course.parts} />
        </>
    )
}

const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    const partses = () => props.parts.map(part => <Part key={part.name} part={part} />)

    return (
        <div>
            {partses()}
        </div >
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = (props) => {
    const total = props.parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <p>
            yhteensä {total} tehtävää
      </p>
    )
}

export default Course