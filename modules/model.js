export const renderHeader = ()=>{
    return`<header>
    <h3>Movies app</h3>
            <input class="search" type="search" placeholder="Search">
    </header>`
}
export const renderMain =()=>{
return `<main id="movie-list">

</main>`
}
export const renderFooter =()=>{
    return `<footer>Movie App</footer>`
}
    
export const renderMovies = (movies) => {
    const main = document.getElementById('movie-list');
    if (!movies.length) {
        main.innerHTML = `<p>No movies found.</p>`;
        return;
    }

    const cards = movies.map((movie) => `
        <div class="movie-card">
            <h4>${movie.title}</h4>
            <p>Rating: ${movie.vote_average}</p>
        </div>
    `).join('');
    
    main.innerHTML = `<div class="movie-grid">${cards}</div>`;
};

 


