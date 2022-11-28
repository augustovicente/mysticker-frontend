import { Modal } from "antd"
import { AlbumContainer } from "pages/Album/styles"
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton"
import { AlbumStickersContainer, SkeletonAlbumModal } from "./styles"
import { ReactComponent as HomeIcon } from "../../../../assets/imgs/home.svg";

export const AlbumSkeletons = ({ modalIsOpen }: { modalIsOpen: boolean }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        setIsModalOpen(modalIsOpen)
    }, [modalIsOpen])

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    return (
        <AlbumContainer>
            <Skeleton
                height={49}
                baseColor='#3C375B'
                highlightColor='#6345EE'
                borderRadius={4}
                style={{ marginBottom: "24px", width: "15vw" }}
            />

            <Skeleton
                height={32}
                baseColor='#3C375B'
                highlightColor='#6345EE'
                borderRadius={4}
                style={{ width: "60vw", marginBottom: "30px" }}
            />

            <Skeleton
                height={93}
                baseColor='#3C375B'
                highlightColor='#6345EE'
                borderRadius={4}
                style={{ width: "85vw", marginBottom: "30px" }}
            />

            <AlbumStickersContainer>
                <Skeleton
                    height={93}
                    baseColor='#3C375B'
                    highlightColor='#6345EE'
                    borderRadius={4}
                    style={{ width: "100%", marginBottom: "80px" }}
                />

                <Skeleton
                    height={192}
                    baseColor='#3C375B'
                    highlightColor='#6345EE'
                    borderRadius={4}
                    style={{ width: "100%", marginBottom: "56px" }}
                />

                <Skeleton
                    height={192}
                    baseColor='#3C375B'
                    highlightColor='#6345EE'
                    borderRadius={4}
                    style={{ width: "100%" }}
                />
            </AlbumStickersContainer>

            <SkeletonAlbumModal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h1><span style={{ color: "#6345EE", fontWeight: "bold" }}>Rede</span> incorreta!</h1>
                <p>Conecte sua carteira digital a rede <span style={{ color: "#6345EE", fontWeight: "bold" }}>Goerli.</span></p>
                <a href="/album">
                    <HomeIcon />

                    Recarregar a página
                </a>
            </SkeletonAlbumModal>
        </AlbumContainer>
    )
}
