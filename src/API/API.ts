import axios from 'axios';

const API = {
    getNewestTitle: () => { return axios.get(`https://rrprofile.herokuapp.com/api/self/newestText`) },
    getNewestText: () => { return axios.get(`https://rrprofile.herokuapp.com/api/self/newestTitle`) } 
}

export default API