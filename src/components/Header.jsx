import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <div className="header">
            <Link to='/' className="link">Giriş Bilgileri</Link>
            <Link to='/kullanicilar' className="link">Kullanıcılar</Link>
        </div>
    )
}