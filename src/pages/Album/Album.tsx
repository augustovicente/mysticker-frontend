import BaseTemplate from "Components/BaseTemplate"
import { AlbumContainer } from "./styles"

export const Album = () => {
    return (
        <BaseTemplate footer={false}>
            <AlbumContainer>
                Album
            </AlbumContainer>
        </BaseTemplate>
    )
}
