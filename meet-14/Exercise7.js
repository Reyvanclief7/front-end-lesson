// 1. Menggunakan destructuring pada parameter object
const calculateAge = (birthYear) => 2019 - birthYear;

const yearUntilRetirement = ({ year, firstName }) => {
    const age = calculateAge(year);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
    } else {
        console.log(`${firstName} is already retired.`);
    }
};

yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2. Menggunakan rest operator untuk menerima semua argumen
const addNumber = (...numbers) => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum;
};

console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Menggunakan destructuring pada object parameter
const phi = 3.14;
let radius = 0;

const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

radius = 21;
const area21 = calculateArea({ radius, power: 2 });

radius = 7;
const area7 = calculateArea({ radius, power: 2 });

console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Menggunakan default value pada parameter method
const makeAjaxRequest = (url, method = 'GET') => {
    console.log(url, method);
};

makeAjaxRequest('www.google.com');
