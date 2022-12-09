import {
    CardsListSkeletonContainer,
    CustomSkeleton,
    TitleSkeletonContainer
} from "../styles"

export const Skeletons = ({ isLoadingReveal }: { isLoadingReveal: boolean; }) => {
    return (
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
                    skeletonWidth="251px"
                    borderRadius={4}
                    baseColor="#3C375B"
                    highlightColor="#625C89"
                />
            </TitleSkeletonContainer>

            <CardsListSkeletonContainer>
                <div className="skeleton-card">
                    <CustomSkeleton
                        borderRadius={4}
                        skeletonWidth="70%"
                        skeletonHeight="35vh"
                        baseColor="#3C375B"
                        highlightColor="#625C89"
                    />
                    <CustomSkeleton
                        borderRadius={4}
                        skeletonWidth="70%"
                        skeletonHeight="2vh"
                        baseColor="#3C375B"
                        highlightColor="#625C89"
                    />
                    <CustomSkeleton
                        borderRadius={4}
                        skeletonWidth="70%"
                        skeletonHeight="2vh"
                        baseColor="#3C375B"
                        highlightColor="#625C89"
                    />
                    <CustomSkeleton
                        borderRadius={4}
                        skeletonWidth="70%"
                        skeletonHeight="15vh"
                        baseColor="#3C375B"
                        highlightColor="#625C89"
                    />
                </div>
            </CardsListSkeletonContainer>

            {isLoadingReveal && (
                <div className="revealing-message-container">
                    <div className="revealing-message">
                        <h4>Revelando!</h4>
                        <p>Aguarde um instante...</p>

                        <img className="revealing-spin" src="/assets/img/favicon.png" alt="" />
                    </div>
                </div>
            )}
        </>
    )
}
