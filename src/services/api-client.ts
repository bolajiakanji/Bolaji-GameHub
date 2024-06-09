import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f4203cb34e50434daf6431bc051bda4e'
    }
})