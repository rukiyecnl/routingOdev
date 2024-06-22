import { useInputData } from "../store/contextApi"

export const ShowSummary = () => {
    const { user } = useInputData();
    console.log(user.nameSurname);
    return (
        <>
        


        </>
    )
}