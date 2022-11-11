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
    errors?: any;
};

const Input: ForwardRefRenderFunction<HTMLInputElement, TextInputProps> = (
    {
        label,
        onChange,
        onBlur,
        errors,
        value,
        ...rest
    },
    ref
) => {
    return (
        <ContainerTextInput>
            <label className="the-label">
                {label}
            </label>

            <input
                {...rest}
                ref={ref}
                value={value}
                className="the-input"
                onBlur={onBlur}
            />

            {errors && (
                <span className="error-msg">{errors?.message}</span>
            )}
        </ContainerTextInput>
    );
};

export default forwardRef(Input);
