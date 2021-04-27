import vue from 'vue'
import router from 'vue-router'

import Home from "@/views/Home"
import About from "@/views/About"
import Error from '@/views/Error'
import CoinDetail from '@/views/CoinDetail'
import Chat from '@/views/Chat'

vue.use(router)

export default new router({
mode: "history",

routes: [

    {
        path: "/",
        name: "home",
        component: Home
    },

    {
        path: "/about",
        name: "about",
        component: About
    },

    {
        path: '/coin/:id',
        name: 'coin-detail',
        component: CoinDetail
    },

    {
        path: "/chat",
        name: "chat",
        component: Chat        
    },

    {
        path: '*',
        name: 'Error',
        component: Error
    }
    
 ]

});