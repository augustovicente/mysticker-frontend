import { useAuth } from "contexts/auth.context"
import { LoginButtonContaine, UserAvatarLogged } from "./styles"

export const LoginButton = () => {
    const { user } = useAuth()

    return (
        <>
            {user ? (
                <UserAvatarLogged to="/profile">
                    <img src="/assets/img/use-avatar.svg" />
                </UserAvatarLogged>
            ) : (
                <LoginButtonContaine to="/login">
                    Login
                    <img src="/assets/img/use-avatar.svg" />
                </LoginButtonContaine>
            )}
        </>

    )
}
