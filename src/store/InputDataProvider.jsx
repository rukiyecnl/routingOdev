import { useState } from "react";
import { InputData } from "./contextApi";

export default function InputDataProvider({children}){
    const [formData, setFormData] = useState({});
    const handleFormData = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        // updateFormData(formObj);
        setFormData(formObj);
        console.log(formObj);
    }
    // const [formData, setFormData] = useState({});

    // function updateFormData(data){
    //     setFormData(data);
    // }

    return <InputData.Provider value={{formData, handleFormData}}>{children}</InputData.Provider>
}