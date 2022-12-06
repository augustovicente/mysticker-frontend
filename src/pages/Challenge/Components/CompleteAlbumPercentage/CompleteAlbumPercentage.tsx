import { CompleteAlbumPercentageContainer, CustomProgress } from "./styles"

export const CompleteAlbumPercentage = ({ percentage }: { percentage?: number }) => {
    return (
        <CompleteAlbumPercentageContainer>
            <CustomProgress
                type="circle"
                percent={percentage}
                strokeColor={{ '0%': "#97FF57", '100%': "#97FF57" }}
                strokeWidth={10}
            />
            <div className={`percentage ${percentage && percentage > 9 && "two"}`}>
                <span>{percentage}</span>
                <p>%</p>
            </div>
        </CompleteAlbumPercentageContainer>
    )
}
