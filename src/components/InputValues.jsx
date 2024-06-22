import { useState } from "react"
import { useInputData } from "../store/contextApi";

export const InputValues = () => {
    const [nameSurname, setNameSurname] = useState("rukiye canlı");
    const [phone, setPhone] =  useState(111111);
    const [email, setEmail] = useState("sdkjf@gmail.com");
    const [password, setPassword] = useState("");

    const { handleFormData } = useInputData();



    return (
        <>
            <form onSubmit={handleFormData}>
                <label htmlFor="nameSurname">Name Surname:</label>
                <input
                    type="text"
                    name="nameSurname"
                    value={nameSurname}
                    onChange={(e) => setNameSurname(e.target.value)} />

                <label htmlFor="email">email:</label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} />

                <label htmlFor="password">password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">submit</button>
            </form>


        </>
    )
}