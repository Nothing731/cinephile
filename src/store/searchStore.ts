import { create } from "zustand";
import { API_KEY, API_URL } from "./links";
import axios, { AxiosResponse } from "axios";
import { MovieAndTv, SearchState } from "../types/types";
const searchStore = create<SearchState>((set) => ({
    search: [],
    fetchSearch: async (query) => {
        try {
            const url = `${API_URL}search/multi?query=${query}&language=ru-RU&api_key=${API_KEY}` 
            const response:AxiosResponse<{ results: MovieAndTv[] }> = await axios.get(url)
            set({ search: response.data.results })
        } catch (error) {
            console.error(error, 'Произошла ошибка при получении search');
        }
    }
}))
export const selectSearch = (state:SearchState) => state.search
export const selectFetchSearch = (state:SearchState) => state.fetchSearch
export default searchStore