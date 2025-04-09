export function PopularMovies(callback) {
    const url = `https://jsonfakery.com/movies/random`;
    makeRequest('GET', url, callback);
}

export function searchMovies(query, callback) {
    const url = `https://jsonfakery.com/movies/random&query=${encodeURIComponent(query)}`;
    makeRequest('GET', url, callback);
}
function makeRequest(method, apiUrl, successCallback) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, apiUrl);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
                successCallback (JSON.parse(xhr.responseText));
        } 
    };
    xhr.send();
}


