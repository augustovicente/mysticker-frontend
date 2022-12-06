import { BuyedPackages } from "../BuyedPackages/BuyedPackages";
import { CompleteAlbumPercentage } from "../CompleteAlbumPercentage/CompleteAlbumPercentage";
import { IndicateMonetize } from "../IndicateMonetize/IndicateMonetize";
import { InvitedFriends } from "../InvitedFriends/InvitedFriends";
import { ChallengeCardContainer } from "./styles"

type ChallengeCardProps = {
    headerImage?: string;
    title?: string;
    link?: boolean;
    mainTopIcon: string;
    bg: string;
    text: string;
    redeemComponent: string;
    invitedFriends?: number;
    buyedPackages?: number;
    completeAlbum?: number;
}

export const ChallengeCard = ({ headerImage, title, link, mainTopIcon, bg, text, redeemComponent, invitedFriends, buyedPackages, completeAlbum }: ChallengeCardProps) => {
    return (
        <ChallengeCardContainer bg={bg}>
            <header>
                {headerImage && <img src={headerImage} alt="" />}

                <h1 className="title">{title}</h1>

                {link && (
                    <IndicateMonetize bg="gradient-purple" />
                )}
            </header>
            <main>
                <span className="main-top-icon">
                    <img src={mainTopIcon} alt="" />
                </span>

                <p>{text}</p>

                <div className="redeem-container">
                    {redeemComponent === "invited-friends" && <InvitedFriends invitedFriends={invitedFriends} />}
                    {redeemComponent === "buyed-packages" && <BuyedPackages buyedPackages={buyedPackages} />}
                    {redeemComponent === "complete-album" && <CompleteAlbumPercentage percentage={completeAlbum} />}
                    {redeemComponent === "indicate-monetize" && <IndicateMonetize bg="" />}

                    <button className="redeem-btn">
                        Resgate
                    </button>
                </div>
            </main>
        </ChallengeCardContainer>
    )
}
