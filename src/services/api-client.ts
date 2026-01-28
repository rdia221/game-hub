import axios from "axios";
export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"d6bb00bed7da460390f2fd5757fa23e0"

    }
})