import { renderHeader, renderMain, renderFooter, renderMovies } from './model.js';
import { fetchPopularMovies,searchMovies } from './view.js'

export const initApp = () => {
    const app = document.getElementById('app');

    app.innerHTML = `
        ${renderHeader()}
        ${renderMain()}
        ${renderFooter()}
    `;

   fetchPopularMovies((data) => {
        renderMovies(data.results);
    });

    const searchInput = document.querySelector('.search');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query.length > 2) {
            searchMovies(query, (data) => {
                renderMovies(data.results);
            });
        } else {
            fetchPopularMovies((data) => {
                renderMovies(data.results);
            });
        }
    });
  
};
