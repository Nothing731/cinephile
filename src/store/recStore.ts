import { create } from "zustand";
import { API_KEY, API_URL } from "./links";
import axios, { AxiosResponse } from "axios";
import { MovieAndTv, RecState } from "../types/types";
const recStore = create<RecState>((set) => ({
    rec: null,
    fetchRec: async (type, id) => {
        try {
            set({ rec: null })
            const url = `${API_URL + type}/${id}/recommendations?language=ru-RU&api_key=${API_KEY}` 
            const response:AxiosResponse<{ results: MovieAndTv[] }> = await axios.get(url)
            console.log(response);
            set({ rec: response.data.results.slice(0,4) })
        } catch (error) {
            console.error(error, 'Произошла ошибка при получении rec');
        }
    }
}))
export default recStore