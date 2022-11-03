import axios from "axios";
import {getAllMovie, searchMovies} from "../utils/ApiRoute.js";

class DataSource {
    static async getAllMovie() {
        const movies = await (await axios.get(getAllMovie)).data.Search;
        return movies;
    }

    static async searchMovies(keyword) {
        const movies = await (await axios.get(`${searchMovies}${keyword}`)).data.Search;
        return movies;
    }
}

export default DataSource;
