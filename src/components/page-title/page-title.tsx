import {PageTitle as PageTitleStyled} from "./page-title.styled.tsx";
import {FC} from "react";

interface PageTitleProps {
    children: string;
    className?: string;
}
export const PageTitle:FC<PageTitleProps> = ({children, className}) => {
    return (
        <PageTitleStyled className={className}>
            {children}
            <div className="border-mark"/>
        </PageTitleStyled>
    )
};
