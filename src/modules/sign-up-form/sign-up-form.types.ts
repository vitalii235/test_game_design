
export enum SignUpFormFields {
    firstName = 'firstName',
    lastName = 'lastName',
    email = 'email',
    userName = 'userName',
    password = 'password',
    retypePassword = 'retypePassword',
}
export interface SignUpFormTypes {
    [SignUpFormFields.firstName]: string;
    [SignUpFormFields.lastName]: string;
    [SignUpFormFields.email]: string;
    [SignUpFormFields.userName]: string;
    [SignUpFormFields.password]: string;
    [SignUpFormFields.retypePassword]: string;
}
