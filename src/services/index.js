import axios from "axios";

export const instanceCats = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images/search",
});

export const instanceFacts = axios.create({
  baseURL: "https://cat-fact.herokuapp.com/facts/random?animal_type=cat",
});
