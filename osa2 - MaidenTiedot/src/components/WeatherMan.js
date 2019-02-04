import axios from 'axios'
const baseUrl = 'http://api.apixu.com/v1/current.json?key=197a07b1c8664355815122707190402&q='

const getAll = (props) => {
    const derp = baseUrl + props.name
    console.log(derp)
    return axios.get(derp)
}

export default {
    getAll: getAll
}