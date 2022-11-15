import {
    forwardRef,
    ForwardRefRenderFunction,
    HTMLProps,
    useEffect
} from "react";
import { FieldErrors } from "react-hook-form";
import { useTheme } from "styled-components";
import { ContainerTextInput } from "./styles";

export type TextInputProps = HTMLProps<HTMLInputElement> & {
    label: string;
    name: string;
    errors?: any;
    isMobile?: boolean;
    leftIcon?: React.Component;
};

const Input: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
    {
        label,
        onChange,
        onBlur,
        errors,
        value,
        name,
        isMobile = false,
        ...rest
    },
    ref
) => {
    const theme = useTheme();

    return (
        <ContainerTextInput isMobile={isMobile}>
            {!isMobile && (
                <label htmlFor={name} className="the-label">
                    {label}
                </label>
            )}

            {/* <i className="fi-sr-user"></i> */}
            {/* <i className="fi-sr-building"></i>
            <i className="fi-sr-marker"></i>
            <i className="fi-sr-call-incoming"></i>
            <i className="fi-sr-subtitles"></i>
            <i className="fi-sr-user"></i>
            <i className="fi-sr-envelope"></i> */}

            <input
                {...rest}
                ref={ref}
                value={value}
                className="the-input"
                onBlur={onBlur}
                onChange={onChange}
                placeholder={isMobile ? label : ""}
                id={name}
                name={name}
                aria-invalid={errors?.message ? 'true' : 'false'}
                style={{
                    outline: errors?.message ? `2px solid ${theme.colors.red}` : '',
                }}
            />

            {errors && (
                <span role="alert" className="error-msg">{errors?.message}</span>
            )}

        </ContainerTextInput>
    );
};

export default forwardRef(Input);
