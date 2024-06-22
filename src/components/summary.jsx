import { Link } from "react-router-dom";
import { useInputData } from "../store/contextApi"

export const ShowSummary = () => {
    const { user, isSaved , setIsSaved} = useInputData();
    return (
        <>
        {isSaved ? (
            <div className="summary">
                <p>{`İsim: ${user.nameSurname}` }</p>
                <p>{`Email: ${user.email}` }</p>
                <p>{`Telefon: ${user.phone}` }</p>
                <Link to="/kullanicilar">
                    <button className="confirmBtn">Onayla</button>
                </Link>
                <button className="changeBtn" onClick={(e) => setIsSaved(false)}>Düzenle</button>
                
            </div>
        ) : " "}



        </>
    )
}