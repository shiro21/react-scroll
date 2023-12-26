import React from "react";
import { DataProps } from "../../interface/scroll";

interface CardProps {
    item: DataProps
}

const Card: React.FC<CardProps> = ({ item }) => {
    return (
        <div>
            {item.id}
        </div>
    );
}

export default Card;