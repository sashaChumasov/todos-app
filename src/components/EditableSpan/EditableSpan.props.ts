import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface IEditableSpanProps extends DetailedHTMLProps<HTMLAttributes<JSX.Element>, JSX.Element>{
    children?: ReactNode
    title: string
}