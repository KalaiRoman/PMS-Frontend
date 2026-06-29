import { createContext } from "react";
const ListContexts=["Login"];
const contexts=ListContexts?.map(()=>createContext());
export const [LoginContext]=contexts;