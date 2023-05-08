import {Input as InputStyled} from './input.styles';
import {InputHTMLAttributes, FC} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
export const Input:FC<InputProps> = ({label, ...props}) => {
    return (
        <InputStyled>
            <label className="label">{label}</label>
            <input className="input" {...props}/>
        </InputStyled>
    )
}
