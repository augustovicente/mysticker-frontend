import { ReactNode, useState } from "react";
import Skeleton from "react-loading-skeleton"
import styled from "styled-components";
import { MarketplaceContainer } from "./styles"

type SkeletonProps = {
    skeletonWidth?: string;
    skeletonHeight?: string;
    children?: ReactNode;
}

const TitleSkeletonContainer = styled.div`
    display: flex;
    gap: 30px;
`

const CustomSkeleton = styled(Skeleton) <SkeletonProps>`
    width: ${props => props.skeletonWidth ? props.skeletonWidth : "unset"};
    height: ${props => props.skeletonHeight ? `${props.skeletonHeight} !important` : "unset"};
`

const CardsListSkeletonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 600px;
    width: 100%;

    .skeleton-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 28%;
        padding: 80px;
        border-radius: 20px;
        background: ${props => props.theme.colors.middle};
    }
`

export const Marketplace = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <MarketplaceContainer>
            {isLoading ? (
                <>
                    <TitleSkeletonContainer>
                        <CustomSkeleton
                            height={40}
                            skeletonWidth="40px"
                            borderRadius={4}
                            baseColor="#3C375B"
                            highlightColor="#625C89"
                        />
                        <CustomSkeleton
                            height={40}
                            skeletonWidth="351px"
                            borderRadius={4}
                            baseColor="#3C375B"
                            highlightColor="#625C89"
                        />
                    </TitleSkeletonContainer>

                    <CardsListSkeletonContainer>
                        {[1, 2, 3].map((skeleton, index) => (
                            <div className="skeleton-card">
                                <CustomSkeleton
                                    key={index}
                                    borderRadius={4}
                                    skeletonWidth="100%"
                                    skeletonHeight="220px"
                                    baseColor="#3C375B"
                                    highlightColor="#625C89"
                                    children={<>ads</>}
                                />
                            </div>
                        ))}
                    </CardsListSkeletonContainer>
                </>

            ) : (
                <>
                    <h1>
                        <img src="/assets/img/icons/market-icon.svg" />
                        Loja de Figurinhas
                    </h1>

                    <ul>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </>
            )}
        </MarketplaceContainer>

    )
}
