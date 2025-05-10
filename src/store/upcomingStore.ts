import { create } from "zustand";
import { API_KEY, API_URL } from "./links";
import axios, { AxiosResponse } from "axios";
import { MovieAndTv, UpcomingState } from "../types/types";
const upcomingStore = create<UpcomingState>((set) => ({
    upcoming: [],
    fetchUpcoming: async () => {
        try {
            const url = `${API_URL}movie/upcoming?language=ru-RU&api_key=${API_KEY}` 
            const response:AxiosResponse<{ results: MovieAndTv[] }> = await axios.get(url)
            set({ upcoming: response.data.results })
        } catch (error) {
            console.error(error, 'Произошла ошибка при получении upcoming');
        }
    }
}))
export default upcomingStore