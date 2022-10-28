import axios from "../axios";

const api = {
    getResults: async (payload: string) => {
        let response = await axios.get('/search?keyword=' + payload);
        return response.data.data;
    },
    getAutocomplete: async (payload: string) => {
        let response = await axios.get('/autocomplete?keyword=' + payload);
        return response.data.data
    }
}

export default api