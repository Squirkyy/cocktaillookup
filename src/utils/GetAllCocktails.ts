import axios from "axios";

export const GetAllCocktails = () => {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const lettersArray = [...letters];
    lettersArray.forEach(async (letter) => {
        const { data } = await axios(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    })
};
