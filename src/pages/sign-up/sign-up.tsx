import {SignUp as SignUpStyled} from "./sign-up.styles";
import {FormContainer} from "../../components/form-container";
import {SignUpForm} from "../../modules/sign-up-form";
import {PageTitle} from "../../components/page-title";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../routes/paths.ts";

export const SignUp = () => {
    const navigate = useNavigate();

    const handleNavigateToSignIn = () => navigate(Paths.SIGN_IN)

    return (
        <SignUpStyled>
                <PageTitle className="page-title">Sign Up to Play</PageTitle>
                <FormContainer className="form-container">
                    <SignUpForm/>
                    <span className="link" onClick={handleNavigateToSignIn}>I already have an Haiku account.</span>
                </FormContainer>
        </SignUpStyled>
    );
}
