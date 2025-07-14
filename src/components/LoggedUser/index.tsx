import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-service'
import { ContextToken } from '../../utils/context-token'

export default function LoggedUser() {

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
    }

    console.log("Token payload:", contextTokenPayload);

    return (
        
        contextTokenPayload && authService.isAuthenticated()
            ? (
                <div className="dsc-logged-user">
                    <p>{contextTokenPayload.username}</p>
                    <span onClick={handleLogoutClick}>Sair</span>
                </div>
            )
            : (
                <Link to="/login">
                    Entrar
                </Link>
            )
    );
}
