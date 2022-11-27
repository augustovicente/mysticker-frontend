import { useAuth } from "contexts/auth.context"
import * as S from "./styles"
import { Button, Divider, Popover, Tooltip } from 'antd';
import { useTheme } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as SettingsIcon } from "assets/imgs/settings.svg";
import { ReactComponent as WalletIcon } from "assets/imgs/wallet.svg";
import { ReactComponent as SignoutIcon } from "assets/imgs/sign-out.svg";
import { useState } from "react";

export const LoginButton = () => {
    const { user, signOut } = useAuth();
    const theme = useTheme();
    const navigate = useNavigate();
    const [showTooltip, setShowTooltip] = useState(false);
    const [popoverIsVisible, setPopoverIsVisible] = useState(false);

    const handleOnClick = () => {
        if (!user) {
            navigate('/login');
        }
    }

    const content = (
        <S.ProfilePopover>
            <header>
                <strong title={user?.name}>{user?.name}</strong>

                <div className="avatar">
                    <i className="fi-sr-user"></i>
                </div>
            </header>

            <div className="divider" />

            <section>
                <Link onClick={() => setPopoverIsVisible(false)} to="/profile" className="">
                    <SettingsIcon width={28} height={28} />

                    <span>Meus Dados</span>
                </Link>

                <Link to="/profile" className="">
                    <WalletIcon width={28} height={28} />

                    <span>Minha carteira</span>
                </Link>
            </section>

            <div className="divider" />

            <section>
                <Link onClick={signOut} to="/login">
                    <SignoutIcon width={28} height={28} />

                    <span>Sair</span>
                </Link>
            </section>

        </S.ProfilePopover>
    );

    return (
        <Tooltip
            placement="bottom"
            color={theme.colors.middleL}
            title={user && "Perfil"}
            open={showTooltip}
            onOpenChange={setShowTooltip}
        >
            <Popover
                placement="bottomRight"
                content={content}
                trigger={user ? "click" : "none"}
                zIndex={9999}
                showArrow={false}
                color="#1d1733"
                open={popoverIsVisible}
                onOpenChange={(visible) => {
                    setShowTooltip(false);
                    setPopoverIsVisible(visible);
                }}
            >
                <S.LoginButtonContainer onClick={handleOnClick} isAuthenticated={!!user}>
                    <img src="/assets/img/use-avatar.svg" />
                </S.LoginButtonContainer>
            </Popover>
        </Tooltip>
    )
}
