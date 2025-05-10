import { create } from "zustand";
import { API_KEY, API_URL } from "./links";
import axios, { AxiosResponse } from "axios";
import { MovieAndTv, TopState } from "../types/types";
const topStore = create<TopState>((set) => ({
    top: [],
    fetchTop: async () => {
        try {
            const url = `${API_URL}movie/top_rated?language=ru-RU&api_key=${API_KEY}` 
            const response:AxiosResponse<{ results: MovieAndTv[] }> = await axios.get(url)
            set({ top: response.data.results.slice(0, 10) })
        } catch (error) {
            console.error(error, 'Произошла ошибка при получении top');
        }
    }
}))
export const selectTop = (state:TopState) => state.top
export const selectFetchTop = (state:TopState) => state.fetchTop
export default topStore