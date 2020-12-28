import api from '@/api'

const home={

    state:{
      content:JSON.parse(localStorage.getItem('content'))||{},
      language:localStorage.getItem('language')||'',
      index:  localStorage.getItem('index')||'',
    },


    actions:{
        async setContent({commit,state},payload){
            const {index,language}=payload
            const news=await api.list.getNews(language)
            if(news.code==0){
               commit('SET_CONTENT',{
                   content:news.data[index],
                   language,
                   index
               })
            }
        }
    },

    mutations:{
        SET_CONTENT(state,payload){
            console.log(payload)
            const {content,index,language}=payload
            state.content=content
            localStorage.setItem('content',JSON.stringify(content))
            state.index=index
            localStorage.setItem('index',index)
            state.language=language
            localStorage.setItem('language',language)
        }
    }
}
export default home