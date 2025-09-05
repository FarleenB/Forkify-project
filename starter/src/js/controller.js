// import * as model from './model.js'
import * as model from '../model.js';
import recipeView from '../views/recipeview.js';



import 'core-js/stable';
import 'regenerator-runtime/runtime'

const img = document.createElement("img");
img.src = icons;
document.body.appendChild(img);

const recipeContainer = document.querySelector('.recipe');


const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try{

     const id = window.location.hash.slice(1);
     console.log(id);
     if(!id) return

   recipeView.renderSpinner();
   
await model.loadRecipe(id);


//2)  Rendering recipe
recipeView.render(model.state.recipe);
//const recipeView = new recipeView(model.state.recipe);


  } catch(err) {
    //alert(err);
    console.log(err)
  }
};

controlRecipes();

['hashchange', 'load'].forEach(ev => window.addEventListener(ev,showRecipe )) 

// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);












