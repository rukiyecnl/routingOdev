import { useState } from "react"
import { useInputData } from "../store/contextApi";

export const InputValues = () => {

    const { user, setUser } = useInputData();

    const [nameSurname, setNameSurname] = useState("rukiye canlı");
    const [phone, setPhone] =  useState(111111);
    const [email, setEmail] = useState("sdkjf@gmail.com");
    const [password, setPassword] = useState("");

    const handleFormData = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        setUser(user => {
            return {
                ...user,
                nameSurname: formObj.nameSurname,
                phone: formObj.phone,
                email: formObj.email,
                password: formObj.password  
            }
        });
    }

    return (
        <>
            <form onSubmit={handleFormData}>
                <label htmlFor="nameSurname">Name Surname:</label>
                <input
                    type="text"
                    name="nameSurname"
                    value={user.nameSurname}
                    onChange={(e) => setNameSurname(e.target.value)} />

                <label htmlFor="email">email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="number"
                    name="phone"
                    value={user.phone}
                    onChange={(e) => setPhone(e.target.value)} />

                <label htmlFor="password">password:</label>
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">submit</button>
            </form>


        </>
    )
}