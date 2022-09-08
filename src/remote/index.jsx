import axios from "axios";

// @ts-check

const conduitAxios = axios.create({
    baseURL : 'https://conduit.productionready.io/api'
});


/**
 @param {{user: {
    email: string;
    password: string
  }} }user
 @returns {{user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  }}}
 */
  const postLoginUser=(user)=>conduitAxios.post('/users/login',{user});

/**
  @param {{user: {
    username:string;
    email: string;
    password: string;
  }}} user
  @returns {{user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string;
  }}}
 */
const postRegisterUser=(user)=>conduitAxios.post('/users',{user});



  /**
   @returns {{ user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string
  }}}
   */
  const getLoginUser=()=>conduitAxios.get('/user');
  
  
/**
   @param {{ user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string
  }}} user
  @returns {{user: {
    email: string;
    token: string;
    username: string;
    bio: string;
    image: string
  }}}
*/
  const putLoginUser=(user)=>conduitAxios.put('/user',{user},{headers:{authorization:`Bearer ${user.token}`}});



// profile

/**
 @param {string} username
 @returns {{profile: {
    username: string;
    bio: string;
    image: string;
    following: true;
  }}}
 */

  const getProfile=(username)=>conduitAxios.get(`/profiles/${username}`)


  export {postRegisterUser,postLoginUser,getLoginUser,putLoginUser,getProfile};