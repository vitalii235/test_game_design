import {Header as HeaderStyled} from './header.styles.tsx'
import {Button} from "../../components/button";
import Logo from '../../assets/Logo.svg'
import {useLocation} from "react-router-dom";
import {Paths} from "../../routes/paths.ts";
export const Header = () => {
    const {pathname} = useLocation();

    const buttonTitle = pathname === Paths.SIGN_IN ? 'Sign Up' : 'Login';

    return (
        <HeaderStyled>
            <img src={Logo} alt="App logo" />
            <Button title={buttonTitle}/>
        </HeaderStyled>
    )
}
