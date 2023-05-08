import {Button as ButtonStyled} from './button.styles';
import {ButtonHTMLAttributes, FC} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}
export const Button:FC<ButtonProps> = ({title, ...restProps}) => {
    return (
        <ButtonStyled {...restProps}>
            {title}
        </ButtonStyled>
    )
}
