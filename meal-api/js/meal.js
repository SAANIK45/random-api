//load data
const loadMeal = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = ' ';
    //check the search field value
    if(searchText == ' '){
        alert('please write something to order');
    }else{
        //Api calling
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => searchMeals(data.meals))
    }
}
//get the data and loop through and add element
const searchMeals = (meal) =>{
    const mealContainer = document.getElementById('meals-container');
    mealContainer.textContent = '';
    for(const food of meal){
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
//here calling the element of data using IdMeal
const loadMore = (foodId) =>{
    //calling api using meal id
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMore(data.meals[0]))
}
//here show more detail about the data 
const displayMore = (item) =>{
    console.log(item);
    const mealContainer = document.getElementById('meal-detail');
    mealContainer.textContent =' ';
    const mealDiv = document.createElement('div');
    mealDiv.classList = 'meal-detail';
    mealDiv.innerHTML = `
    <div class="card-body">
         <img src="${item.strMealThumb}" class="card-img-top" alt="...">
         <h5 class="card-title">${item.strMeal}</h5>
         <p class="card-text">${item.strInstructions.slice(0,250)}</p>
         <h4>Item Id : ${item.idMeal}</h4>
    </div>
    `;
    mealContainer.appendChild(mealDiv);
    console.log(mealDiv);

}