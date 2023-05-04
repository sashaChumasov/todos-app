import {ReactNode} from "react";

export interface IActionButtonProps {
    children: ReactNode
    onClickHandler: () => void
}