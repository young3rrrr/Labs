const phoneBook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'John Doe', phone: '+1234567890' },
    { name: 'Jane Smith', phone: '+1987654321' },
    { name: 'Alice Johnson', phone: '+1122334455' }
];

function findPhoneByName(name) {
    for (let contact of phoneBook) {
        if (contact.name === name) {
            console.log(contact.phone);
            return contact.phone;
        }
    }
    console.log('Контакт не знайдено');
    return 'Контакт не знайдено';
}

findPhoneByName('Jane Smith'); // '+1987654321'
findPhoneByName('Alice Johnson'); // '+1122334455'
findPhoneByName('Bob Brown'); // 'Контакт не знайдено'
