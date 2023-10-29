const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Use forEach to console log each name to the console
let logCount = 0;
names.forEach(name => {
  if (logCount < 7) {
    console.log(name);
    logCount++;
  }
});

// Use forEach to console log each name with a matching province
logCount = 0;
names.forEach((name, index) => {
  const province = provinces[index];
  if (logCount < 7) {
    console.log(`${name} (${province})`);
    logCount++;
  }
});

// Using map to turn all province names to uppercase and log the new array
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Create a new array with map that has the amount of characters in each name
const characterCount = names.map(name => name.length);
console.log(characterCount);

// Using sort to sort all provinces alphabetically
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

// Use filter to remove all provinces that have the word "Cape" in them
const filteredProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(filteredProvinces.length);

// Create a boolean array by using map and some to determine whether a name contains an 'S' character
const containsS = names.map(name => name.split("").some(char => char === 'S'));
console.log(containsS);

// Using reduce to turn the above into an object that indicates the province of an individual
const provinceObject = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(provinceObject);
