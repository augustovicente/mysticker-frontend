import {
    CardsListSkeletonContainer,
    CustomSkeleton,
    TitleSkeletonContainer
} from "../styles"

export const Skeletons = () => {
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
                    skeletonWidth="351px"
                    borderRadius={4}
                    baseColor="#3C375B"
                    highlightColor="#625C89"
                />
            </TitleSkeletonContainer>

            <CardsListSkeletonContainer>
                {[1, 2, 3].map((skeleton) => (
                    <div className="skeleton-card">
                        <CustomSkeleton
                            key={skeleton}
                            borderRadius={4}
                            skeletonWidth="70%"
                            skeletonHeight="35vh"
                            baseColor="#3C375B"
                            highlightColor="#625C89"
                        />
                        <CustomSkeleton
                            key={skeleton}
                            borderRadius={4}
                            skeletonWidth="70%"
                            skeletonHeight="2vh"
                            baseColor="#3C375B"
                            highlightColor="#625C89"
                        />
                        <CustomSkeleton
                            key={skeleton}
                            borderRadius={4}
                            skeletonWidth="70%"
                            skeletonHeight="2vh"
                            baseColor="#3C375B"
                            highlightColor="#625C89"
                        />
                        <CustomSkeleton
                            key={skeleton}
                            borderRadius={4}
                            skeletonWidth="70%"
                            skeletonHeight="15vh"
                            baseColor="#3C375B"
                            highlightColor="#625C89"
                        />
                    </div>
                ))}
            </CardsListSkeletonContainer>
        </>
    )
}
