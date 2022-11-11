import Input from 'Components/Input/Input';
import React from 'react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const emailSchema = z.object({
    email: z.string().email('E-mail inválido'),
    password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
});

type emailSchemaType = z.infer<typeof emailSchema>;

import * as S from './styles';
import { useToggle } from 'hooks/useToggle';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<emailSchemaType>({
        resolver: zodResolver(emailSchema),
        mode: 'all',
    });

    const [isLoading, setIsLoading] = useToggle(false);

    const onSubmit: SubmitHandler<emailSchemaType> = (data) => {
        console.log(data);

        setIsLoading(true);
    };

    return (
        <S.Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>

                <div className="container-inputs">
                    <Input
                        {...register('email')}
                        label='E-mail'
                        autoComplete='email'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.email}
                    />

                    <Input
                        {...register('password')}
                        label='Senha'
                        autoComplete='password'
                        autoCapitalize='off'
                        autoCorrect='off'
                        errors={errors.password}
                    />
                </div>

                <button type="submit">
                    {/* if is loading create a spinner loading in text of button */}
                    {isLoading ? (
                        <div className="spinner-border" role="status">
                        </div>
                    ) : 'Login'}
                </button>
            </form>
        </S.Container>
    )
}
