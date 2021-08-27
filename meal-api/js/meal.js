const loadMeal = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = ' ';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data => searchMeals(data.meals))
}

const searchMeals = (meal) =>{
    const mealContainer = document.getElementById('meals-container');
    for(const food of meal){
        console.log(food)
        const div = document.createElement('div');
        div.classList = 'fooditem';
        div.innerHTML = `
            <div class="card-body">
                <img width="200px" src="${food.strMealThumb}" class="card-img-top" alt="...">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strTags}</p>
                <a href="#" class="btn btn-primary">More Info</a>
            </div>
        `
        mealContainer.appendChild(div);
    }
}