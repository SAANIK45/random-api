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
        // console.log(food)
        const div = document.createElement('div');
        div.classList = 'fooditem';
        div.innerHTML = `
            <div class="card-body">
                <img src="${food.strMealThumb}" class="card-img-top" alt="...">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0,250)}</p>
                <a href="#" onclick="loadMore(${food.idMeal})" class="btn btn-primary">More Info</a>
            </div>
        `
        mealContainer.appendChild(div);
    }
}

const loadMore = (foodId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMore(data.meals[0]))
}

const displayMore = (item) =>{
    const mealDetail = document.getElementById('meal-detail');
    const moreDiv = document.createElement = 'div';
    moreDiv.innerHTML = `Info : ${item.strArea}`
    mealDetail.appendChild(moreDiv);

}