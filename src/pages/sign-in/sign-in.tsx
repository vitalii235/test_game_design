import { SignIn as SignInStyled } from "./sign-in.styles";
import {PageTitle} from "../../components/page-title";
import {SignInForm} from "../../modules/sign-in-form/sing-in-form.tsx";
import {FormContainer} from "../../components/form-container";

export const SignIn = () => {
    return (
        <SignInStyled>
            <PageTitle className="page-title">Login to Haiku</PageTitle>
            <FormContainer className="form-container">
                <SignInForm/>
            </FormContainer>
        </SignInStyled>
    )
}
