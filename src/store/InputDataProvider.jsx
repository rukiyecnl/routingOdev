import { useState } from "react";
import { InputData } from "./contextApi";

export default function InputDataProvider({children}){
    const [user, setUser] = useState({
        nameSurname: "",
        cell: "",
        email: "",
        password: ""
    });

    // const [formData, setFormData] = useState({});

    // function updateFormData(data){
    //     setFormData(data);
    // }

    return <InputData.Provider value={{user, setUser}}>{children}</InputData.Provider>
}