import { reRender } from "../Render";

let state = {
    messagesPage: {
        dialogData : [
            {id : 1,
            name : "Oleg"
            },
            {id : 2,
            name : "petr"
            },
            {id : 3,
            name : "almaz"
            },
            {id : 4,
            name : "sergey"
            },
            {id : 5,
            name : "kana"
             },
            {id : 6,
            name : "korzh"
            }
          ],
        massagesData : [
            {id: 1, massage: "Hola!"},
            {id: 2, massage: "How are you?!"},
            {id: 3, massage: "Sugoi"},
            {id: 4, massage: "Sugoiii!!"}
        ]
    },
    profilePage : {
        postsData : [
            {id: 1, post: "holla!", like: 22},
            {id: 2, post: "How are you?!", like: 56},
            {id: 3, post: "Sugoi", like: 10},
            {id: 4, post: "HOla holaaaaa", like:12}
            ],
        newPostData: 'newText'
    }
   
};

export let addPost = () =>{
    let newPost = {
        id: 5,
        post: state.profilePage.newPostData, 
        like:0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostData ='';
    reRender(state);
};

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostData = newText;
    reRender(state);
};


export default state;