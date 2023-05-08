import {FC} from "react";
import {SignUpForm as SignUpFormStyled} from './sign-up-form.styles';
import {Input} from "../../components/input";
import {Button} from "../../components/button";
import {Formik} from 'formik';
import {SignUpFormFields, SignUpFormTypes} from "./sign-up-form.types.ts";

export const SignUpForm: FC = () => {
    const handleSubmit = (values: SignUpFormTypes) => {
        console.log(values);
    }
    console.log('rerender')
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
                <SignUpFormStyled onSubmit={handleSubmit}>
                    <div>
                        <div className="name-block">
                            <Input label={'First Name'} name={SignUpFormFields.firstName} value={values.firstName} onChange={handleChange}/>
                            <Input label={'Last Name'} name={SignUpFormFields.lastName} value={values.lastName} onChange={handleChange}/>
                        </div>
                        <Input label={'Email'} name={SignUpFormFields.email} value={values.email} onChange={handleChange}/>
                        <Input label={'Username'} name={SignUpFormFields.userName} value={values.userName} onChange={handleChange}/>
                        <Input label={'Password'} name={SignUpFormFields.password} value={values.password} onChange={handleChange} type="password"/>
                        <Input label={'Retype Password'} name={SignUpFormFields.retypePassword} value={values.retypePassword} onChange={handleChange} type="password"/>
                    </div>
                    <Button className="submit-button" title={'Sign Up'} type="submit"/>
                </SignUpFormStyled>
            )}
        </Formik>
    )
};
