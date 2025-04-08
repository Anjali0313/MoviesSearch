export function fetchPopularMovies(callback) {
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
        console.log(xhr.readyState);

        if (xhr.readyState === 4 && xhr.status === 200) {
            successCallback(JSON.parse(xhr.responseText));
        }
        console.log('request successful',JSON.parse(xhr.responseText));

    };
    xhr.send();
}




