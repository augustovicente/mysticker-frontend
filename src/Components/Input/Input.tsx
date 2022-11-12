import {
    forwardRef,
    ForwardRefRenderFunction,
    HTMLProps,
    useEffect
} from "react";
import { FieldErrors } from "react-hook-form";
import { ContainerTextInput } from "./styles";

export type TextInputProps = HTMLProps<HTMLInputElement> & {
    label: string;
    name: string;
    errors?: any;
};

const Input: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
    {
        label,
        onChange,
        onBlur,
        errors,
        value,
        name,
        ...rest
    },
    ref
) => {
    return (
        <ContainerTextInput>
            <label htmlFor={name} className="the-label">
                {label}
            </label>

            <input
                {...rest}
                ref={ref}
                value={value}
                className="the-input"
                onBlur={onBlur}
                name={name}
            />

            {errors && (
                <span className="error-msg">{errors?.message}</span>
            )}
        </ContainerTextInput>
    );
};

export default forwardRef(Input);
