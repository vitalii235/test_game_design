import {Footer as FooterStyled} from "./footer.styles";
import Logo from "../../assets/Logo.svg";
import MockContacts from "../../assets/mock_contacts.svg";
import MockSocial from "../../assets/mock_social.svg";

export const Footer = () => {
    return (
        <FooterStyled>
            <img src={MockContacts} alt="mock_contacts" />
            <img src={Logo} alt="App logo" className="app-logo" />
            <img src={MockSocial} alt="mock_social" />
        </FooterStyled>
    )
}
