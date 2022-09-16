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
  const getLoginUser=()=>conduitAxios.get('/user',{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}});
  
  
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
    image: string;
  }}}
*/
  const putLoginUser=(user)=>conduitAxios.put('/user',{user},{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}});



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

  // profile [post] ,[delete] 부분




  //Article

   /**
   @returns {{articles: [
    {
      slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [
    string
  ];
  createdAt: 2022-09-11T06:38:57.899Z;
  updatedAt: 2022-09-11T06:38:57.899Z;
  favorited: true;
  favoritesCount: 0;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
      }
    }
  ],
  articlesCount: 0;
}}
   */
  const getYourFeedArticles = () => conduitAxios.get('articles/feed?limit=20&offset=0',{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})


   /**
   @returns {{articles: [
    {
      slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [
    string
  ];
  createdAt: 2022-09-11T06:38:57.899Z;
  updatedAt: 2022-09-11T06:38:57.899Z;
  favorited: true;
  favoritesCount: 0;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
      }
    }
  ],
  articlesCount: 0;
}}
   */

const getGlobalArticles = () => conduitAxios.get('/articles?limit=30&offset=0')


  /**
   @returns {{articles: [
    {
      slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [
    string
  ];
  createdAt: 2022-09-11T06:38:57.899Z;
  updatedAt: 2022-09-11T06:38:57.899Z;
  favorited: true;
  favoritesCount: 0;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
      }
    }
  ],
  articlesCount: 0;
}}
   */

const getGlobalLoginArticles = () => conduitAxios.get(`/articles?limit=30&offset=0`,{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})

/**
   @param {string} author
   @returns {{articles: [
    {
      slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [
    string
  ];
  createdAt: 2022-09-11T06:38:57.899Z;
  updatedAt: 2022-09-11T06:38:57.899Z;
  favorited: true;
  favoritesCount: 0;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
      }
    }
  ],
  articlesCount: 0;
}}
   */

const getArticles = (author) => conduitAxios.get(`/articles?author=${author}&limit=30&offset=0`)

/**
   @param {string} author
   @returns {{articles: [
    {
      slug: string;
  title: string;
  description: string;
  body: string;
  tagList: [
    string
  ];
  createdAt: 2022-09-11T06:38:57.899Z;
  updatedAt: 2022-09-11T06:38:57.899Z;
  favorited: true;
  favoritesCount: 0;
  author: {
    username: string;
    bio: string;
    image: string;
    following: true;
      }
    }
  ],
  articlesCount: 0;
}}
   */

const getLoginArticles = (author) => conduitAxios.get(`/articles?author=${author}&limit=30&offset=0`,{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})

/**
 @param {{article: {
    title: string;
    description: string;
    body: string;
    tagList: [
      string
    ];}
}} article

@returns {{article:
  {
    slug: string;
title: string;
description: string;
body: string;
tagList: [
  string
];
createdAt: 2022-09-11T06:38:57.899Z;
updatedAt: 2022-09-11T06:38:57.899Z;
favorited: true;
favoritesCount: 0;
author: {
  username: string;
  bio: string;
  image: string;
  following: true;
    }
  }
}}
 */

const createArticle = (article) => conduitAxios.post('/articles',{article},{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})

/**
 @param {string} slug
 @returns {{article:
  {
    slug: string;
title: string;
description: string;
body: string;
tagList: [
  string
];
createdAt: 2022-09-11T06:38:57.899Z;
updatedAt: 2022-09-11T06:38:57.899Z;
favorited: true;
favoritesCount: 0;
author: {
  username: string;
  bio: string;
  image: string;
  following: true;
    }
  }
}}
 */
const getSlugArticle = (slug) => conduitAxios.get(`/articles/${slug}`)

/**
@param {string} slug
 */
const deleteSlugArticle = (slug) => conduitAxios.delete(`/articles/${slug}`,{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})


//comments
/**
 @param {string} slug
 @returns {{
  comments: [
    {
      id: 0;
      createdAt: 2022-09-13T09:11:17.036Z;
      updatedAt: 2022-09-13T09:11:17.036Z;
      body: string;
      author: {
        username: string;
        bio: string;
        image: string;
        following: true
      }
    }
  ]
}}
 */
const getComment = (slug) => conduitAxios.get(`/articles/${slug}/comments`)


/**
 @param {string} slug
 @returns {{
  comments: [
    {
      id: 0;
      createdAt: 2022-09-13T09:11:17.036Z;
      updatedAt: 2022-09-13T09:11:17.036Z;
      body: string;
      author: {
        username: string;
        bio: string;
        image: string;
        following: true
      }
    }
  ]
}}
 */
const getLoginComment = (slug) => conduitAxios.get(`/articles/${slug}/comments`,{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})

/**
 @param {string} slug
 @param {{
  comment: {
    body: string;
  }
}} comment
 @returns {{
  comment: [
    {
      id: 0;
      createdAt: 2022-09-13T09:11:17.036Z;
      updatedAt: 2022-09-13T09:11:17.036Z;
      body: string;
      author: {
        username: string;
        bio: string;
        image: string;
        following: true
      }
    }
  ]
}}
 */

const postComment =(slug,comment) => conduitAxios.post(`/articles/${slug}/comments`,{comment},{headers:{authorization:`Bearer ${localStorage.getItem('token')}`}})

  export {postRegisterUser,postLoginUser,getLoginUser,putLoginUser,getProfile,getYourFeedArticles,getGlobalLoginArticles,getGlobalArticles,getArticles,getLoginArticles,createArticle,getSlugArticle,deleteSlugArticle,getComment,getLoginComment,postComment};