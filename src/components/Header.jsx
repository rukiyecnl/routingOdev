import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <div className="header">
            <Link to='/'>Giriş Bilgileri</Link>
            <Link to='/kullanicilar'>Kullanıcılar</Link>
        </div>
    )
}