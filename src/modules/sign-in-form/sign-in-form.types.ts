
export enum SignInFormFields {
    email = 'email',
    password = 'userName',
}
export interface SignInFormTypes {
    [SignInFormFields.email]: string;
    [SignInFormFields.password]: string;
}
