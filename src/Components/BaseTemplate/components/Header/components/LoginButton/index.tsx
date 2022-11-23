import { useAuth } from "contexts/auth.context"
import { LoginButtonContainer } from "./styles"
import { Button, Popover, Tooltip } from 'antd';
import { useTheme } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToggle } from "hooks/useToggle";

export const LoginButton = () => {
    const { user, signOut } = useAuth();
    const theme = useTheme();
    const navigate = useNavigate();

    const handleOnClick = () => {
        if (!user) {
            navigate('/login');
        }
    }

    const text = <span>Title</span>;
    const content = (
        <div>
            <p>Content</p>
            <Button onClick={signOut}>
                Logout
            </Button>
        </div>
    );

    return (
        <Tooltip
            placement="bottom"
            color={theme.colors.middleL}
            title={user && "Perfil"}
        >
            <Popover
                placement="topLeft"
                title='Teste'
                content={content}
                trigger={user ? "click" : "none"}
                zIndex={9999}
            >
                <LoginButtonContainer onClick={handleOnClick} isAuthenticated={!!user}>
                    <img src="/assets/img/use-avatar.svg" />
                </LoginButtonContainer>

                {/* <Button>TL</Button> */}
            </Popover>
        </Tooltip>
    )
}
