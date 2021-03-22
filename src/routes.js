import  WatchAnime  from "./components/WatchAnime.vue";
import AnimeList from './components/AnimeList'
import Home from './components/Home.vue';
import PopularAnime from './components/PopularAnime';
import AnimeDetail from './components/AnimeDetail';

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
        path: '/animeDetail',
        component: AnimeDetail
    },
    { 
        path: '/watch', 
        component: WatchAnime
    }

]