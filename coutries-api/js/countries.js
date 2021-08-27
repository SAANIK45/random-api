const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => getCountries(data))
}

loadCountries();

const getCountries = (data) => {
    const countryContainer = document.getElementById('countries');
    for(const country of data){
        console.log(country)
        const div = document.createElement('div');
        div.classList = 'country';
        div.innerHTML = `
        <h4>Name : ${country.name}</h4>
        <h5>Capital : ${country.capital}</h5>
        <p>Region : ${country.region}</p>
        <h6>Population : ${country.population}</h6>
        `
        countryContainer.appendChild(div);
    }
}