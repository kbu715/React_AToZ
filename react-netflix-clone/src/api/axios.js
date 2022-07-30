import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "d9c59b6b74399f5fb7e70bff81c7e3d5",
        language: "ko-KR",
    },
});

export default instance;