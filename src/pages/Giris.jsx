import { InputValues } from "../components/InputValues"
import { ShowSummary } from "../components/summary"
import InputDataProvider from "../store/InputDataProvider"

export const Giris = () => {

    return (
        <>
        <InputDataProvider>
            <InputValues />
            <ShowSummary />
        </InputDataProvider>
        </>
    )
}