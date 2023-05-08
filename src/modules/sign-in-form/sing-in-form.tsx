import {FC} from "react";
import {SignInForm as SignInFormStyled} from './sing-in-form.styles.tsx';
import {Input} from "../../components/input";
import {Button} from "../../components/button";
import {Formik} from 'formik';
import {SignInFormFields, SignInFormTypes} from "./sign-in-form.types.ts";

export const SignInForm: FC = () => {
    const handleSubmit = (values: SignInFormTypes) => {
        console.log(values);
    }

    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
            password: '',
            retypePassword: ''
        }} onSubmit={handleSubmit}>
            {({
                  handleSubmit,
                  values,
                  handleChange,
              }) => (
                <SignInFormStyled onSubmit={handleSubmit}>
                    <Input label={'Email'} name={SignInFormFields.email} value={values.email} onChange={handleChange}/>
                    <Input label={'Password'} name={SignInFormFields.password} value={values.password} onChange={handleChange} type="password"/>
                    <Button className="submit-button" title={'Login'} type="submit"/>
                </SignInFormStyled>
            )}
        </Formik>
    )
};
