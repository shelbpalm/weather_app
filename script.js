const APIKEY = "ec5e50121a0b343cc8b802ebda5dacd4";
const city = "spokane";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`;

// check
console.log(url);

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // app goes here
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);

    //display data
    const city = document.querySelector("#city");
    const temp = document.querySelector("#temp");

    city.textContent = data.name;
    temp.textContent = data.main.temp;
  });
