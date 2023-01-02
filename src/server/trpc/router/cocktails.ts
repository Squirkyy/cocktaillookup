import { publicProcedure, router } from "../trpc";
import axios from "axios";

const baseUrl = "http://www.thecocktaildb.com/api/json/v1/1/search.php?f=";
const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const fetchData = async (letter: string): Promise<any> => {
  const response = await axios.get(baseUrl + letter);
  return response.data;
}

export const cocktails = router({
    allCocktails: publicProcedure
        .query(async () => {
          const request = letters.map(letter => fetchData(letter));
          return Promise.all(request);
        })
})
