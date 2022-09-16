import {atom} from 'recoil'


export const authState = atom({
    key: 'src/atoms/auth.jsx-authState', 
    default: false
  });


export const userState = atom({
  key: 'src/atoms/auth.jsx-userState', 
  default: {
    username:'',
    email:'',
    token:'',
    bio:null,
    image:'https://api.realworld.io/images/smiley-cyrus.jpeg',
  }
})

export const profileState = atom({
  key: 'src/atoms/auth.jsx-profileState',
  default :{
    username:'',
    bio:null,
    image:'https://api.realworld.io/images/smiley-cyrus.jpeg',
    following:false
  }
})

export const slugState = atom({
  key:'src/atoms/auth.jsx-slugState',
  default:''
})

export const commentsState = atom({
  key:'src/atoms/auth.jsx-commentsState',
  default:[]
})



// export const newArticleState = atom({
//   key: 'src/atoms/auth.jsx-newArticleState',
//   default:{
//     title: '',
//     description: '',
//     body: '',
//     tagList:[]
//   }
// })
