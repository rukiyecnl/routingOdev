import { createContext, useContext } from "react";

export const Data = createContext();

export function UseData() {
    return useContext(Data);
}