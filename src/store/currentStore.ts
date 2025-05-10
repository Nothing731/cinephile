import { create } from "zustand";
import { API_KEY, API_URL } from "./links";
import axios, { AxiosResponse } from "axios";
import { MovieAndTv, CurrentState } from "../types/types";
const currentStore = create<CurrentState>((set) => ({
    current: null,
    fetchCurrent: async (type, id) => {
        try {
            set({ current: null })
            const url = `${API_URL + type}/${id}?language=ru-RU&api_key=${API_KEY}` 
            const response:AxiosResponse<{ results: MovieAndTv }> = await axios.get(url)
            set({ current: response.data })
        } catch (error) {
            console.error(error, 'Произошла ошибка при получении current');
        }
    }
}))
export default currentStore