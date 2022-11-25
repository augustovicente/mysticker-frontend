import { useAuth } from "contexts/auth.context";
import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";
import * as S from './styles';
import { ReactComponent as ArrowIcon } from 'assets/imgs/arrow-left-white.svg';
import { AnimatePresence } from "framer-motion";

type MobileNavProps = HTMLAttributes<HTMLLIElement> & {
    id: 'language' | 'wallet' | 'rewards' | 'notifications' | null;
    selectedMenu: 'language' | 'wallet' | 'rewards' | 'notifications' | null;
    setSelectedMenu?: Dispatch<SetStateAction<any>>;
    icon: string;
    title: string;
    needsAuth?: boolean;
    children?: ReactNode;
    onClick?: () => void;
}

export const MobileNav = (props: MobileNavProps) => {
    const { user } = useAuth();

    if (props.needsAuth && !user) return null;

    const handleOpenMenu = (id: string) => {
        if (props.selectedMenu === id) {
            props.setSelectedMenu?.(null);
        } else {
            props.setSelectedMenu?.(id);
        }
    }

    return (
        <>
            <S.Container {...props}
                onClick={() => props.children && props.setSelectedMenu
                    ? handleOpenMenu(props.id)
                    : props.onClick?.()
                }
                >
                <div>
                    <img src={props.icon} alt="" />

                    <span>{props.title}</span>
                </div>

                {props.children && (
                    <button >
                        <ArrowIcon style={{
                            transform: props.selectedMenu === props.id ? 'rotate(90deg)' : 'rotate(-90deg)'
                        }} className="arrow-icon" />
                    </button>
                )}
            </S.Container>

            <AnimatePresence presenceAffectsLayout>
                {props.selectedMenu === props.id && props.children &&  (
                    <S.AnimatedChildren
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'fit-content' }}
                        transition={{ ease: 'easeInOut', duration: 0.2 }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div>
                            {props.children}
                        </div>
                    </S.AnimatedChildren>
                )}
            </AnimatePresence>
        </>
    )
}
