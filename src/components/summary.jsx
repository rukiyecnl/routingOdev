import { Link } from "react-router-dom";
import { useInputData } from "../store/contextApi"

export const ShowSummary = () => {
    const { user, isSaved } = useInputData();
    return (
        <>
        {isSaved ? (
            <>
                <div>{user.nameSurname}</div>
                <Link to="/kullanicilar">
                    <button>Onayla</button>
                </Link>
            </>
        ) : " "}



        </>
    )
}