import { router } from "../trpc";
import { exampleRouter } from "./example";
import {cocktails} from "./cocktails";

export const appRouter = router({
  example: exampleRouter,
  cocktails: cocktails
});

// export type definition of API
export type AppRouter = typeof appRouter;
