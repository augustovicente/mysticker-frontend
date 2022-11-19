import Skeleton, { SkeletonProps } from "react-loading-skeleton";
import * as S from './styles'

type SkeletonProfileProps =  SkeletonProps &{
}

export const SkeletonProfile = ({ className }: SkeletonProfileProps) => {
    return (
        <div>
            <Skeleton
                width={70}
                height={24}
                baseColor='#3C375B'
                highlightColor='#6345EE'
                borderRadius={4}
                className={className}
            />

            <Skeleton
                height={60}
                baseColor='#3C375B'
                highlightColor='#6345EE'
                borderRadius={4}
                className={className}
            />
        </div>
    )
}
