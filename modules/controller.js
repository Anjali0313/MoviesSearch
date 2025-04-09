import { renderHeader, renderMain, renderFooter, renderMovies } from './model.js';
import { PopularMovies,searchMovies } from './view.js'

export const initApp = () => {
    const app = document.getElementById('app');

    app.innerHTML = `
        ${renderHeader()}
        ${renderMain()}
        ${renderFooter()}
    `;

const searchInput = document.querySelector('.search');
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.trim();
        if (query.length > 2) {
            searchMovies(query, (data) => {
                renderMovies(Array.isArray(data) ? data : [data]);
            });
        } else {
            PopularMovies((data) => {
                renderMovies(Array.isArray(data) ? data : [data]);
            });
        }
    });
  
};
