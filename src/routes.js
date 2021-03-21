import  WatchAnime  from "./components/WatchAnime.vue";
import AnimeList from './components/AnimeList'
import Home from './components/Home.vue';
import PopularAnime from './components/PopularAnime'

export const routes = [
    { 
        path: '', 
        component: Home 
    },
    {
        path: '/animeList',
        component: AnimeList
    },
    {
        path: '/popularAnime',
        component: PopularAnime
    },
    { 
        path: '/watch', 
        component: WatchAnime
    }

]