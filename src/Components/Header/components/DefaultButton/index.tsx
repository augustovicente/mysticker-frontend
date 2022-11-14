import { DefaultButtonContainer } from "./styles"

type DefaultButtonProps = {
    to: string;
    src: string;
}

export const DefaultButton = ({ to, src }: DefaultButtonProps) => {
    return (
        <DefaultButtonContainer to={to}>
            <img src={src} />
        </DefaultButtonContainer>
    )
}
