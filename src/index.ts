import $ from "jquery";
import { Film } from "./film";

const films = new Array<Film>();
const newFilms = new Array<Film>();

function populateArray() {
    films.push(new Film("Il Signore degli Anelli - Il Ritorno del Re", 400, "Fantasy"));
    films.push(new Film("Avengers: Infinity War", 160, "Action"));
    films.push(new Film("It - Il Pagliaccio Assassino", 113, "Horror"));

    newFilms.push(new Film("Tenet", 150, "Action"));
    newFilms.push(new Film("Wonder Woman 1984", 160, "Action"));
}

function getTable(films: Film[]) : string {
    let html = `
    <table id='films' border='1'>
        <thead id="body">
            <tr>
                <th>Nome</th>
                <th>Durata</th>
                <th>Genere</th>
            </tr>
        </thead>
        <tbody>`;

    html += films.map(film => `<tr><td>${film.name}</td><td>${film.duration}</td><td>${film.genre.substr(0, 3)}</td></tr>`);

    html += "</tbody></table>";

    return html;
}

function displayFilms() {
    let html = getTable(films);
        
    html += "<br />" + getTable(newFilms);

    let tmpFilms = [...films, ...newFilms];

    html += "<br />" + getTable(tmpFilms);

    $("#content").append(html);
}

populateArray();
displayFilms();