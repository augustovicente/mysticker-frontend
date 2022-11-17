import { FormEvent } from "react";

export const maskCPF = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 14;
    let value = e.currentTarget.value;

    if (!value.match(/^(\d{3}).(\d{3}).(\d{3})-(\d{2})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{2})$/, "$1-$2");
        e.currentTarget.value = value;
    }
    return e;
};

export const maskPhone = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 15;
    let value = e.currentTarget.value;

    if (!value.match(/^(\d{2}) (\d{4})-(\d{4})$/) && value.length <= 14) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{4})(\d)/, "$1-$2");
        e.currentTarget.value = value;
    } else if (!value.match(/^(\d{2}) (\d{5})-(\d{4})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        e.currentTarget.value = value;
    }
    return e;
};

export const maskCEP = (e: FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 9;
    let value = e.currentTarget.value;

    if (!value.match(/^(\d{5})-(\d{3})$/)) {
        value = value.replace(/\D/g, "");
        value = value.replace(/(\d{5})(\d)/, "$1-$2");
        e.currentTarget.value = value;
    }
    return e;
}
