var Company;
(function (Company) {
    Company[Company["Apple"] = 0] = "Apple";
    Company[Company["Samsung"] = 1] = "Samsung";
})(Company || (Company = {}));
var Phone = /** @class */ (function () {
    function Phone(id, name, price, company) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.company = company;
    }
    return Phone;
}());
var PhoneStore = /** @class */ (function () {
    function PhoneStore(phones) {
        this.phones = phones;
    }
    PhoneStore.prototype.addPhones = function () {
        var phone = new Phone(3, "iPhone 12 Mini", 500, Company.Apple);
        this.phones.push(phone);
    };
    return PhoneStore;
}());
function CreatePhones() {
    return [
        new Phone(1, "iPhone 12", 900, Company.Apple),
        new Phone(2, "Galaxy S10", 800, Company.Samsung)
    ];
}
function VisualizePhones(store) {
    var htmlTable = "<table><thead><tr><th>Name</th><th>Price</th><th>Company</th></tr></thead><tbody>";
    for (var i = 0; i < store.phones.length; i++) {
        var el = store.phones[i];
        htmlTable += "<tr><td>" + el.name + "</td><td>" + el.price + "</td><td>" + Company[el.company] + "</td></tr>";
    }
    htmlTable += "</tbody></table>";
    $("#phone-list").html(htmlTable);
}
$(document).ready(function () {
    var phones = CreatePhones();
    var store = new PhoneStore(phones);
    $("#add-phone").click(function () {
        store.addPhones();
        VisualizePhones(store);
    });
    VisualizePhones(store);
});
