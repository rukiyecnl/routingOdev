import { useInputData } from "../store/contextApi"

export const ShowSummary = () => {
    const { formData } = useInputData();
    // console.log("summary" + JSON.stringify(formData, null, 2));
    const data = JSON.stringify(formData, null, 2);
    console.log(data.phone);
    return (
        <>


        </>
    )
}