import axios from 'axios';

export default axios.create({
    baseURL: 'https://barefoot-nomad-app-v1.herokuapp.com/api/v1'

})