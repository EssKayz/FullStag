import React from 'react'
import Person from './Person'


const Numbers = (props) => {
    const numbas = props.ppl
                    .filter(p => p.name.toLowerCase().includes(props.searchName.toLowerCase()))
                    .map((p, i) => <Person key={i} name={p.name} number={p.number}/>)
    return (
        <>
            <ul>
                {numbas}
            </ul>
        </>
    )
}

export default Numbers