import { useInputData } from "../store/contextApi"

export const Users = () => {
    const {user} = useInputData();
    
    return (
        <div className="userInfos">
            <p>{`Kullanıcı adı: ${user.nameSurname}`}</p>
        </div>
    )
}