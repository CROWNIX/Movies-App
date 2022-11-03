export const movieCard = (movie) => {
    return `<div class="col-md-4 mb-3">
    <div class="card" style="width: 18rem">
        <img src="${movie.Poster}" class="card-img-top" alt="..." />
        <div class="card-body">
            <h5 class="card-title">${movie.Title}</h5>
            <p class="card-text">${movie.Year}</p>
        </div>
    </div>
</div>`;
};
