import {FC, ReactNode} from "react";
import {Header} from "../modules/header";
import {BaseLayout as BaseLayoutStyled} from "./base-layout.styles.tsx";
import {Footer} from "../modules/footer";

interface BaseLayoutProps {
    children: ReactNode;
}

export const BaseLayout:FC<BaseLayoutProps> = ({ children }) => {
    return (
        <BaseLayoutStyled>
            <Header/>
            {children}
            <Footer/>
        </BaseLayoutStyled>
    )
}
