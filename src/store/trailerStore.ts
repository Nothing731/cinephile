import { create } from "zustand";
import { API_KEY, API_URL } from "./links";
import axios, { AxiosResponse } from "axios";
import { TrailerState } from "../types/types";
const trailerStore = create<TrailerState>((set) => ({
    trailer: '',
    fetchTrailer: async (type, id) => {
        try {
            set({ trailer: '' })
            const url = `${API_URL + type}/${id}/videos?language=ru-RU&api_key=${API_KEY}` 
            const response:AxiosResponse<{results: any; key: string}> = await axios.get(url)
            set({ trailer: response.data.results[0].key })
        } catch (error) {
            console.error(error, 'Произошла ошибка при получении trailer');
        }
    }
}))
export default trailerStore