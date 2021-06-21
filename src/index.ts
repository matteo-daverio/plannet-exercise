import $ from "jquery";
import { map, take } from "rxjs/operators";
import { User } from "./user";
import { UserService } from "./user.service";

const FIRST_USER_DB = "https://my-json-server.typicode.com/matteo-daverio/user-db/users";
const SECOND_USER_DB = "https://my-json-server.typicode.com/matteo-daverio/user-db2/users";

let users = new Array<User>();

async function populateArray() {
    const firstUsers = await UserService.getUsers<Array<User>>(FIRST_USER_DB)
        .pipe(
            map(users => users.filter(user => user.id > 2))
        )
        .toPromise();
    const secondUsers = await UserService.getUsers<Array<User>>(SECOND_USER_DB).toPromise();

    users = [...firstUsers, ...secondUsers];
}

function getTable(users: User[]) : string {
    let html = `
    <table id='users' border='1'>
        <thead id="body">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>`;

    for (const user of users) {
        html += "<tr>";
        Object.keys(user).forEach(prop => {
            html += '<td>' + user[prop].toString() + '</td>';
        });
        html += "</tr>";
    }

    html += "</tbody></table>";

    return html;
}

function displayUsers() {
    let html = getTable(users);

    $("#content").append(html);
}

async function main() {
    await populateArray();
    displayUsers();
}

main();
