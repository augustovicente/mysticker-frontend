import React, { DetailedHTMLProps, HTMLAttributes } from "react";

export type CardBenefitProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    title: string;
    description: string;
    image: string;
    order: number;
};

export const CardBenefit = ({ title, description, image, order, ...rest }: CardBenefitProps) => {
    return (
        <div {...rest} className="benefit">
            <div className="container-img">
                <img src={image} loading="lazy" alt="Pacote de figurinha" />

                <span>{order}º</span>
            </div>

            <h6 className="title">{title}</h6>

            <p>{description}</p>
        </div>
    )
}
