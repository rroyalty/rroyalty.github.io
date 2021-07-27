import axios from 'axios';

const API = {
    // getNewestText: () => { return axios.get(`https://rrprofile.herokuapp.com/api/self/newestText`) },
    // getNewestTitle: () => { return axios.get(`https://rrprofile.herokuapp.com/api/self/newestTitle`) }, 
    // getNewestDate: () => { return axios.get(`https://rrprofile.herokuapp.com/api/self/newestDate`) },
    getAllPosts: async () => { return await axios.get(`https://rrprofile.herokuapp.com/api/self/allPosts`) }  
}

export default API