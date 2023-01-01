import {publicProcedure, router} from "../trpc";

export const cocktails = router({
    allCocktails: publicProcedure
        .query(async () => {
            const letters = "abcdefghijklmnopqrstuvwxyz";
            const lettersArray = [...letters];
            const data = await Promise.all(lettersArray.map(letter => {
                fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`).then(resp => resp.json());
            }))
            return {
                cocktails: data,
            }
        })
})
