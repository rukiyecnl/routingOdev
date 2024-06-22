import { createContext, useContext } from "react";

export const InputData = createContext();

export const useInputData = () => {
    return useContext(InputData);
}