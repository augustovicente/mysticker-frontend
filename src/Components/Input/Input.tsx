import { useToggle } from "hooks/useToggle";
import {
    forwardRef,
    ForwardRefRenderFunction,
    HTMLProps,
    ReactNode,
} from "react";
import { useTheme } from "styled-components";
import { ContainerTextInput } from "./styles";
import { useWindowSize } from 'hooks/useWindowSize';

export type TextInputProps = HTMLProps<HTMLInputElement> & {
    label: string;
    name: string;
    errors?: any;
    hasMobileStyle?: boolean;
    leftIcon?: ReactNode;
    isLoading?: boolean;
};

const Input: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
    {
        label,
        onChange,
        onBlur,
        errors,
        value,
        name,
        leftIcon,
        hasMobileStyle,
        isLoading,
        ...rest
    },
    ref
) => {
    const theme = useTheme();
    const [isVisiblePassword, setIsVisiblePassword] = useToggle(false);
    const { width } = useWindowSize();
    const isMobileDevice = (hasMobileStyle && width) <= 768;

    return (
        <ContainerTextInput isMobile={isMobileDevice} hasErrors={!!errors?.message} hasIconLeft={!!leftIcon}>
            {!isMobileDevice && (
                <label htmlFor={name} className="the-label">
                    {label}
                </label>
            )}

            <div className="box-input">
                <input
                    {...rest}
                    ref={ref}
                    value={value}
                    className={`the-input ${rest.type === 'password' && 'has-password'}  `}
                    onBlur={onBlur}
                    onChange={onChange}
                    placeholder={isMobileDevice ? label : ""}
                    id={name}
                    name={name}
                    aria-invalid={errors?.message ? 'true' : 'false'}
                    type={rest.type === 'password' && !isVisiblePassword && 'password' || 'text'}
                />

                {leftIcon && isMobileDevice && (
                    <>
                        {leftIcon}
                    </>
                )}

                {rest.type === 'password' && (
                    <button
                        tabIndex={-1}
                        type="button"
                        className="show-password"
                        onClick={() => {
                            setIsVisiblePassword(true);
                        }}
                    >
                        <i aria-hidden={true} id="password-icon" className={isVisiblePassword ? 'fi-sr-eye-crossed' : 'fi-sr-eye'}></i>
                    </button>
                )}
            </div>

            {errors && (
                <span
                    role="alert"
                    className="error-msg"
                    aria-errormessage={errors?.message}
                >
                    {errors?.message}
                </span>
            )}

        </ContainerTextInput>
    );
};

export default forwardRef(Input);
