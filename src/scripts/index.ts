enum Company {
    Apple,
    Samsung
}

class Phone {
    id: number;
    name: string;
    price: number;
    company: Company;

    constructor(
        id: number, 
        name: string,
        price: number,
        company: Company) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.company = company;
    }
}

class PhoneStore {
    phones: Phone[];

    constructor(phones: Phone[]) {
        this.phones = phones;
    }

    addPhones() {
        var phone: Phone = new Phone(3, "iPhone 12 Mini", 500, Company.Apple);
        this.phones.push(phone);
    }
}

function CreatePhones(): Phone[] {
    return [
        new Phone(1, "iPhone 12", 900, Company.Apple),
        new Phone(2, "Galaxy S10", 800, Company.Samsung)
    ];
}

function VisualizePhones(store: PhoneStore) {
    var htmlTable: string = "<table><thead><tr><th>Name</th><th>Price</th><th>Company</th></tr></thead><tbody>";

    for (let i = 0; i < store.phones.length; i++) {
        const el = store.phones[i];
        htmlTable += `<tr><td>${el.name}</td><td>${el.price}</td><td>${Company[el.company]}</td></tr>`;
    }

    htmlTable += "</tbody></table>";

    $("#phone-list").html(htmlTable);
}

$(document).ready(() => {
    var phones: Phone[] = CreatePhones();
    var store: PhoneStore = new PhoneStore(phones);

    $("#add-phone").click(() => {
        store.addPhones();
        VisualizePhones(store);
    });

    VisualizePhones(store);
})