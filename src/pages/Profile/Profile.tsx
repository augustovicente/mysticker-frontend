import * as S from './styles';
import { ReactComponent as FingerprintIcon } from '../../assets/imgs/fingerprint.svg';
import { ReactComponent as GalleryIcon } from '../../assets/imgs/galery.svg';
import Input from 'Components/Input/Input';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GradientOverlay } from 'Components/GradientOverlay';
import { useTheme } from 'styled-components';
import { useToggle } from 'hooks/useToggle';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import { maskCEP, maskCPF, maskPhone } from 'utils/helpers';
import { Link } from 'react-router-dom';

type ProfileDataProps = {
    avatar: string | ArrayBuffer | null;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    address: string;
    number: string;
    neighborhood: string;
    cep: string;
    uf: string;
    city: string;
}

type dataCEP = {
    bairro: string;
    cep: string;
    complemento: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    uf: string;
    siafi: string;
}

// Validações para o formulário
const registerSchema = Yup.object().shape(
    {
        avatar: Yup.mixed().notRequired(),
        name: Yup.string().required('Campo obrigatório').trim(),
        email: Yup.string().email('E-mail inválido').required('Campo obrigatório').trim(),
        cpf: Yup.string().when('cpf', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().required('Campo obrigatório').min(11, 'CPF inválido'),
            otherwise: Yup.string().notRequired()
        }),
        phone: Yup.string().when("phone", {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(14, 'Telefone inválido').max(15, 'Telefone inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        address: Yup.string().when('cep', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(2, 'Endereço inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        number: Yup.number().when('cep', {
            is: (val: number) => !!val,
            then: Yup.number().positive('Número inválido').min(1, 'Número inválido').typeError('Número inválido'),
            otherwise: Yup.number().nullable(true).transform((_, val) => val === Number(val) ? val : null)
        }),
        neighborhood: Yup.string().when('cep', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(2, 'Bairro inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        cep: Yup.string().when("cep", {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(9, 'CEP inválido').max(9, 'CEP inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        uf: Yup.string().when('cep', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(2, 'UF inválido').max(2, 'UF inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        city: Yup.string().when('cep', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(2, 'Cidade inválida').trim(),
            otherwise: Yup.string().notRequired(),
        })
    },
    [
        ['phone', 'phone'],
        ['cep', 'cep'],
        ['cep', 'uf'],
        ['cep', 'city'],
        ['cep', 'address'],
        ['cep', 'number'],
        ['cep', 'neighborhood'],
        ['cpf', 'cpf']
    ]
);

export const Profile = () => {
    const { register, setValue, setError, handleSubmit, formState: { errors } } = useForm<ProfileDataProps>({
        resolver: yupResolver(registerSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const theme = useTheme();
    const [isLoading, setIsLoading] = useToggle();
    const [avatar, setAvatar] = useState<any>(null);

    const onSubmit: SubmitHandler<ProfileDataProps> = (data) => {
        console.log('data', data)
    };

    const searchCEP = async (cep: string) => {
        const response = await axios.get<dataCEP>(`https://viacep.com.br/ws/${cep}/json`);

        setError('cep', {
            type: 'manual',
            message: '',
        });

        if (response?.data?.cep) {
            setValue('address', response.data.logradouro);
            setValue('neighborhood', response.data.bairro);
            setValue('city', response.data.localidade);
            setValue('uf', response.data.uf);
        } else {
            setError('cep', {
                type: 'manual',
                message: 'CEP não encontrado',
            });
        }
    };

    const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const reader = new FileReader();

        if (file) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                setAvatar(reader.result);
            }
        }
    }

    return (
        <S.Container>
            {isLoading ?
                <Skeleton
                    height={60}
                    borderRadius={4}
                    baseColor='#3C375B'
                    highlightColor='#625C89'
                />
                : (
                    <>
                        <header>
                            <div className='title'>
                                <FingerprintIcon />
                                <h2>Meus dados</h2>
                            </div>

                            <div className='dots'>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </header>

                        <section>
                            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                                <header>
                                    <label className='label-input' htmlFor='avatar'>
                                        <input
                                            {...register('avatar')}
                                            type="file"
                                            accept='.jpeg, .webp, .jpg, .png'
                                            id="avatar"
                                            onChange={handleAvatar}
                                        />

                                        {avatar ? (
                                            <img
                                                className='avatar'
                                                src={avatar}
                                                alt=""
                                                onError={({ currentTarget }) => {
                                                    currentTarget.onerror = null;
                                                    currentTarget.src = 'https://via.placeholder.com/150';
                                                }}
                                            />
                                        ) : (
                                            <GalleryIcon />
                                        )}
                                    </label>

                                    <div className='header-inputs'>
                                        <Input
                                            {...register('name')}
                                            label='Nome'
                                            name='name'
                                            errors={errors.name}
                                            style={{
                                                outline: errors.name ? `2px solid ${theme.colors.red}` : 'none',
                                            }}
                                        />

                                        <Input
                                            {...register('email')}
                                            label='E-mail'
                                            errors={errors.email}
                                            name='email'
                                            style={{
                                                outline: errors.email ? `2px solid ${theme.colors.red}` : 'none',
                                            }}
                                        />
                                    </div>
                                </header>

                                <div className='form-content'>
                                    <Input
                                        {...register('cpf')}
                                        label='CPF'
                                        errors={errors.cpf}
                                        inputMode='numeric'
                                        name='cpf'
                                        maxLength={11}
                                        onChange={event => maskCPF(event)}
                                    />

                                    <Input
                                        {...register('phone')}
                                        label='Telefone'
                                        errors={errors.phone}
                                        inputMode="numeric"
                                        maxLength={11}
                                        name='phone'
                                        onChange={event => maskPhone(event)}
                                    />

                                    <Input
                                        {...register('address')}
                                        label='Endereço'
                                        autoComplete='address'
                                        errors={errors.address}
                                        name='address'
                                    />

                                    <Input
                                        {...register('number')}
                                        label='Nº'
                                        inputMode='numeric'
                                        type='number'
                                        errors={errors.number}
                                        name='number'
                                    />

                                    <Input
                                        {...register('neighborhood')}
                                        label='Bairro'
                                        errors={errors.neighborhood}
                                        name='neighborhood'
                                    />

                                    <Input
                                        {...register('cep')}
                                        label='CEP'
                                        errors={errors.cep}
                                        name='cep'
                                        maxLength={8}
                                        onChange={event => {
                                            const { value } = event.currentTarget;

                                            const cep = value.replace(/\D/g, '');
                                            if (cep.length === 8) {
                                                searchCEP(value);
                                            }

                                            maskCEP(event);
                                        }}
                                    />

                                    <Input
                                        {...register('uf')}
                                        label='UF'
                                        errors={errors.uf}
                                        name='uf'
                                    />

                                    <Input
                                        {...register('city')}
                                        label='Cidade'
                                        errors={errors.city}
                                        name='city'
                                    />
                                </div>

                                <footer>
                                    <button type="submit">
                                        Editar Dados
                                    </button>

                                    <button className='reset-password'>
                                        <Link to="reset-password">
                                            Redefinir Senha
                                        </Link>
                                    </button>

                                </footer>
                            </form>
                        </section>

                        <GradientOverlay />
                    </>
                )
            }
        </S.Container>
    )
}
