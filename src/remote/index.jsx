import axios from "axios";
const conduitAxios = axios.create({
    baseURL : 'https://conduit.productionready.io/api'
});

/**
  @param {"user": {
    "username":"string",
    "email": "string",
    "password": "string"
  }} user
 
  @returns {Promise<{user: {
    email: 'string',
    token: 'string',
    username: 'string',
    bio: 'string',
    image: 'string'
  }}>}
 */

const postRegisterUser=(user)=>conduitAxios.post('/users',{user});

export {postRegisterUser};