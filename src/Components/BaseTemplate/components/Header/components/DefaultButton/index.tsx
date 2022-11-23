import { Tooltip } from "antd";
import { useTheme } from "styled-components";
import { DefaultButtonContainer } from "./styles"

type DefaultButtonProps = {
    to: string;
    src: string;
    title: string;
}

export const DefaultButton = ({ to, src, title }: DefaultButtonProps) => {
    const theme = useTheme();

    return (
        <Tooltip
            placement="bottom"
            color={theme.colors.middleL}
            title={title}
        >
            <DefaultButtonContainer to={to}>
                <img src={src} />
            </DefaultButtonContainer>
        </Tooltip>
    )
}
