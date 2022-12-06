import { InvitedFriendsContainer } from "./styles"

export const InvitedFriends = ({ invitedFriends }: { invitedFriends?: number }) => {
    return (
        <InvitedFriendsContainer>
            <h4>
                <span>{invitedFriends}</span>
                /10
            </h4>
            <ul>
                {new Array(10).fill('').map((item, index) => (
                    <li key={item} className={invitedFriends && invitedFriends >  index ? "invited" : ""}>
                        <img src="/assets/img/icons/invited-friends-card-icon.svg" alt="" />
                        <span />
                    </li>
                ))}
            </ul>
        </InvitedFriendsContainer>
    )
}
