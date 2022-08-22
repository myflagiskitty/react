import React, {FC} from "react";
import { ReactNode } from "react";
import { ReactChildren } from "react";

export enum CardVariant {
    outlined='outlined',
    primary = 'primary'
}

interface CardProps{
    width?:string;
    height?: string;
    variant:CardVariant;
    children:ReactNode;
}

const Card: FC<CardProps> = 
({
    width, 
    height,
    variant,
    children

},) => {
    return(
        <div style={{width, height, 
            border: variant ===CardVariant.outlined ? "1px solid grey" : "none",
            background: variant ===CardVariant.primary ? "lightgray" : "" 
        }}>
            {children}   
        </div>
    );
};

export default Card;