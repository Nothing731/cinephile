import { create } from "zustand";
import { API_KEY, API_URL } from "./links";
import axios, { AxiosResponse } from "axios";
import { MovieAndTv, PopularState } from "../types/types";
const popularStore = create<PopularState>((set) => ({
    popularMovies: [],
    popularTvs: [],
    fetchPopular: async (type, page = 1) => {
        try {
            const url = `${API_URL + type}/popular?language=ru-RU&api_key=${API_KEY}&page=${page}` 
            const response:AxiosResponse<{ results: MovieAndTv[] }> = await axios.get(url)
            if(type === 'movie') set({ popularMovies: response.data.results })
            else set({ popularTvs: response.data.results })
        } catch (error) {
            console.error(error, 'Произошла ошибка при получении popular');
        }
    }
}
))
export default popularStore