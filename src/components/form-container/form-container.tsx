import {FC, ReactNode} from "react";
import {FormContainer as FormContainerStyled} from './form-container.styles';

interface FormContainerProps {
    children: ReactNode;
    className?: string;
}

export const FormContainer: FC<FormContainerProps> = ({children, className}) => {
    return (
        <FormContainerStyled className={className}>
            <div className={'top-right'}/>
            <div className={'top-left'}/>
            {children}
        </FormContainerStyled>
    )
};
