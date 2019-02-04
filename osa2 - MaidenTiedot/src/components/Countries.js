import React from 'react'
import Country from './Country';

const Countries = (props) => {
    const ctrNames = props.ctrs
        .filter(c => c.name.toLowerCase().includes(props.filter.toLowerCase()))
        .map((c, i) => <li key={i}>{c.name} <button onClick={ () => props.buttonHandler(c)}>Show</button> </li>)

    if (ctrNames.length == 0) {
        return (
            <></>
        )
    }


    if (ctrNames.length > 10 && props.filter.length != 0) {
        return (
            <p> Too many matches, specify another filter </p>
        )
    }

    if (ctrNames.length > 1) {
        return (
            <>
                <ul>
                    {ctrNames}
                </ul>
            </>
        )
    }

    const single = props.ctrs
        .filter(f => f.name.toLowerCase().includes(props.filter.toLowerCase()))
        .map((c, i) => <Country key={i} name={c.name} cap={c.capital} langs={c.languages} pop={c.population} flag={c.flag} />)

    return (
        <>
            {single}
        </>
    )

}

export default Countries