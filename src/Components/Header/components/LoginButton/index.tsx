import { LoginButtonContaine } from "./styles"

export const LoginButton = () => {
    return (
        <LoginButtonContaine to="/login">
            Login
            <img src="/assets/img/use-avatar.svg" />
        </LoginButtonContaine>
    )
}
