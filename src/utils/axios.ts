//--------FIREBASE--------

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://project-gfit-72239-default-rtdb.firebaseio.com/',
});

export { api };

//--------API FOOD--------

const apiFood = axios.create({
    baseURL: 'https://trackapi.nutritionix.com/v2',

});
apiFood.defaults.headers={
    "x-app-id": "c6305500",
    "x-app-key": "d487d6f994c985cde848bfa6c4bff487",
}

export { apiFood };

//--------API TRANING-------

const apiTraining = axios.create({
    baseURL: "https://fitness-calculator.p.rapidapi.com",

});
apiTraining.defaults.headers={
    "x-rapidapi-host": "fitness-calculator.p.rapidapi.com",
	"x-rapidapi-key": "5b02a5acccmshf383fb9552b8944p12c3bfjsn713c8beb8bc6",
}

export { apiTraining };