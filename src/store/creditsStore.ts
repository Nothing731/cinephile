import { create } from "zustand";
import { API_KEY, API_URL } from "./links";
import axios, { AxiosResponse } from "axios";
import { CreditsState } from "../types/types";
const creditsStore = create<CreditsState>((set) => ({
    credits: [],
    fetchCredits: async (type, id, count = 6) => {
        try {
            set({ credits: [] })
            const url = `${API_URL + type}/${id}/credits?language=ru-RU&api_key=${API_KEY}` 
            const response:AxiosResponse<{results: any; key: string}> = await axios.get(url)
            set({ credits: response.data.cast.slice(0, count) })
        } catch (error) {
            console.error(error, 'Произошла ошибка при получении credits');
        }
    }
}))
export default creditsStore