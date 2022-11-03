import DataSource from "../data/DataSource.js";
import "../components/navbar.js";
import {movieCard} from "../templates/templateCreator.js";

const moviesContainer = document.querySelector("#movies-container");
const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");

const searchMovies = async (keyword) => {
    try {
        const movies = await DataSource.searchMovies(keyword);
        renderMovies(movies);
    } catch (err) {
        console.log(err.message);
    }
};

const renderMovies = (movies) => {
    let cards = ``;

    if (movies) {
        movies.forEach((movie) => {
            cards += movieCard(movie);
        });

        moviesContainer.innerHTML = cards;
    }
};

const getMovies = async () => {
    try {
        const movies = await DataSource.getAllMovie();
        renderMovies(movies);
    } catch (err) {
        console.log(err.message);
    }
};

const main = () => {
    getMovies();

    searchButton.addEventListener("click", () => {
        if (!searchInput.value.trim().length) {
            getMovies();
            return;
        }

        const keyword = searchInput.value;
        searchMovies(keyword);
    });
};

export default main;
