import $ from "jquery";
import { Film } from "./film";

const films = new Array<Film>();

function populateArray() {
    films.push(new Film("Il Signore degli Anelli - Il Ritorno del Re", 400, "Fantasy"));
    films.push(new Film("Avengers: Infinity War", 160, "Action"));
    films.push(new Film("It - Il Pagliaccio Assassino", 113, "Horror"));
}

function displayFilms() {
    var html = `
    <table id='summaryOfResults' border='1'>
        <thead id="body">
            <tr>
                <th>Nome</th>
                <th>Durata</th>
                <th>Genere</th>
            </tr>
        </thead>
        <tbody>`;

    films
        .filter(film => film.duration > 120)
        .forEach(film => {
            html += "<tr>";
            Object.keys(film).forEach(prop => {
                if (prop in film)
                    html += '<td>' + (prop === "genre" ? film[prop].toString().substr(0, 3) : (<any>film)[prop].toString()) + '</td>';
            });
            html += "</tr>";
        });

    html += "</tbody></table>";

    $("#content").append(html);
}

populateArray();
displayFilms();