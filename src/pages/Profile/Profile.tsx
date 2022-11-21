import * as S from './styles';
import { ReactComponent as FingerprintIcon } from 'assets/imgs/fingerprint.svg';
import { ReactComponent as GalleryIcon } from 'assets/imgs/galery.svg';
import Input from 'Components/Input/Input';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GradientOverlay } from 'Components/GradientOverlay';
import styled, { useTheme } from 'styled-components';
import { useToggle } from 'hooks/useToggle';
import axios from 'axios';
import { ChangeEvent, useEffect, useReducer, useState } from 'react';
import Skeleton from 'react-loading-skeleton'
import { cepFormatter, cpfFormatter, maskCEP, maskCPF, maskPhone, phoneFormatter } from 'utils/helpers';
import { Link } from 'react-router-dom';
import { useAuth, UserModel } from 'contexts/auth.context';
import { SkeletonProfile } from 'pages/Profile/Skeleton';
import { api } from 'services/api';
import { toast } from 'react-toastify';

type ProfileDataProps = UserModel & {
    avatar: string | ArrayBuffer | null;
    uf: string | null;
    city: string | null;
    address: string | null;
    neighborhood: string | null;
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
            then: Yup.string().required('Campo obrigatório').min(14, 'CPF inválido').matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, 'CPF inválido'),
            otherwise: Yup.string().notRequired()
        }),
        full_number: Yup.string().when("full_number", {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(14, 'Telefone inválido').max(15, 'Telefone inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        address: Yup.string().when('address_zip_code', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(2, 'Endereço inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        address_number: Yup.number().when('address_zip_code', {
            is: (val: number) => !!val,
            then: Yup.number().positive('Número inválido').min(1, 'Número inválido').typeError('Número inválido'),
            otherwise: Yup.number().nullable(true).transform((_, val) => val === Number(val) ? val : null)
        }),
        neighborhood: Yup.string().when('address_zip_code', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(2, 'Bairro inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        address_zip_code: Yup.string().when("address_zip_code", {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(9, 'CEP inválido').max(9, 'CEP inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        uf: Yup.string().when('address_zip_code', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(2, 'UF inválido').max(2, 'UF inválido').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        city: Yup.string().when('address_zip_code', {
            is: (val: string) => val?.length > 0,
            then: Yup.string().min(2, 'Cidade inválida').trim(),
            otherwise: Yup.string().notRequired(),
        }),
        address_complement: Yup.string().notRequired().nullable().trim(),
    },
    [
        ['full_number', 'full_number'],
        ['address_zip_code', 'address_zip_code'],
        ['address_zip_code', 'uf'],
        ['address_zip_code', 'city'],
        ['address_zip_code', 'address'],
        ['address_zip_code', 'number'],
        ['address_zip_code', 'neighborhood'],
        ['cpf', 'cpf']
    ]
);


const SkeletonInputs = [
    {
        className: 'cpf'
    },
    {
        className: 'full_number'
    },
    {
        className: 'address_zip_code'
    },
    {
        className: 'uf'
    },
    {
        className: 'city'
    },
    {
        className: 'address'
    },
    {
        className: 'number'
    },
    {
        className: 'neighborhood'
    },
    {
        className: 'address_complement'
    }
];

export const Profile = () => {
    const { register, setValue, setError, getValues, handleSubmit, trigger, formState: { errors } } = useForm<ProfileDataProps>({
        resolver: yupResolver(registerSchema),
        mode: 'onChange',
        reValidateMode: 'onChange',
        shouldFocusError: true,
    });

    const [avatar, setAvatar] = useState<any>(null);
    const [isLoading, setIsLoading] = useState({
        formLoading: true,
        submitLoading: false
    });

    const onSubmit: SubmitHandler<ProfileDataProps> = async (formValues) => {
        const formattedValues = {
            ...formValues,
            cpf: formValues?.cpf?.replace(/\D/g, ''),
            full_number: formValues?.full_number?.replace(/\D/g, ''),
            address_zip_code: formValues?.address_zip_code?.replace(/\D/g, ''),
            address_number: formValues?.address_number?.toString()
        }

        setIsLoading(prevState => ({
            ...prevState,
            submitLoading: true
        }));

        try {
            const { data } = await api.post('edit-data', formattedValues);

            if (data) {
                toast.success('Editado com sucesso')
            }

            setIsLoading(prevState => ({
                ...prevState,
                submitLoading: false
            }));

            getUpdateProfile();
        } catch (error) {
            setIsLoading(prevState => ({
                ...prevState,
                submitLoading: false
            }));
        }
    };

    const { getUser } = useAuth();

    const searchCEP = async (address_zip_code: string) => {
        const response = await axios.get<dataCEP>(`https://viacep.com.br/ws/${address_zip_code}/json`);

        setError('address_zip_code', {
            type: 'manual',
            message: '',
        });

        if (response?.data?.cep) {
            setValue('address', response.data.logradouro);
            setValue('neighborhood', response.data.bairro);
            setValue('city', response.data.localidade);
            setValue('uf', response.data.uf);
        } else {
            setError('address_zip_code', {
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
    };

    const getUpdateProfile = async () => {
        await getUser()
            .then((user) => {
                setValue('name', user?.name || '');
                setValue('email', user?.email || '');
                setValue('cpf', cpfFormatter(user?.cpf || ''));
                setValue('full_number', phoneFormatter(user?.full_number || ''));
                setValue('address_zip_code', cepFormatter(user?.address_zip_code || ''));
                setValue('address_number', user?.address_number || '');
                setValue('address_complement', user?.address_complement || '');

                if (user?.address_zip_code?.length === 8) {
                    searchCEP(user?.address_zip_code);
                }
            })

        setIsLoading(prevState => ({
            ...prevState,
            formLoading: false
        }));
    }

    useEffect(() => {
        getUpdateProfile();
    }, []);

    if (isLoading.formLoading) {
        return <ProfileSkeleton />
    }

    return (
        <S.Container>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                    maxLength={255}
                                    hasMobileStyle
                                    leftIcon={(
                                        <i className="left-icon fi-sr-user"></i>
                                    )}
                                />

                                <Input
                                    {...register('email')}
                                    label='E-mail'
                                    errors={errors.email}
                                    name='email'
                                    maxLength={255}
                                    hasMobileStyle
                                    leftIcon={(
                                        <i className="left-icon fi-sr-envelope"></i>
                                    )}
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
                                hasMobileStyle
                                leftIcon={(
                                    <i className="left-icon fi-sr-subtitles"></i>
                                )}
                            />

                            <Input
                                {...register('full_number')}
                                label='Telefone'
                                errors={errors.full_number}
                                inputMode="numeric"
                                maxLength={11}
                                name='full_number'
                                onChange={event => maskPhone(event)}
                                hasMobileStyle
                                leftIcon={(
                                    <i className="left-icon fi-sr-call-incoming"></i>
                                )}
                            />

                            <Input
                                {...register('address_zip_code')}
                                label='CEP'
                                errors={errors.address_zip_code}
                                name='address_zip_code'
                                maxLength={8}
                                onChange={event => {
                                    const { value } = event.currentTarget;

                                    const address_zip_code = value.replace(/\D/g, '');
                                    if (address_zip_code.length === 8) {
                                        searchCEP(value);
                                    }

                                    maskCEP(event);
                                }}
                                hasMobileStyle
                                leftIcon={(
                                    <i className="left-icon fi-sr-marker"></i>
                                )}
                            />

                            <Input
                                {...register('uf')}
                                label='UF'
                                errors={errors.uf}
                                name='uf'
                                hasMobileStyle
                            />

                            <Input
                                {...register('city')}
                                label='Cidade'
                                errors={errors.city}
                                name='city'
                                hasMobileStyle
                                leftIcon={(
                                    <i className="left-icon fi-sr-building"></i>
                                )}
                            />

                            <Input
                                {...register('address')}
                                label='Endereço'
                                autoComplete='address'
                                errors={errors.address}
                                name='address'
                                hasMobileStyle
                                leftIcon={(
                                    <i className="left-icon fi-sr-marker"></i>
                                )}
                            />

                            <Input
                                {...register('address_number')}
                                label='Nº'
                                inputMode='numeric'
                                type='number'
                                errors={errors.address_number}
                                name='address_number'
                                hasMobileStyle
                                maxLength={8}
                                leftIcon={(
                                    <i className="left-icon fi-sr-envelope"></i>
                                )}
                            />

                            <Input
                                {...register('neighborhood')}
                                label='Bairro'
                                errors={errors.neighborhood}
                                name='neighborhood'
                                hasMobileStyle
                                leftIcon={(
                                    <i className="left-icon fi-sr-marker"></i>
                                )}
                            />

                            <Input
                                {...register('address_complement')}
                                label='Complemento'
                                errors={errors.address_complement}
                                name='address_complement'
                                maxLength={25}
                                hasMobileStyle
                            />
                        </div>

                        <footer>
                            <button disabled={isLoading.submitLoading} type="submit">
                                {isLoading.submitLoading ?
                                    (
                                        <span className="spinner-border spinner-border-md">
                                        </span>
                                    )
                                    : 'Editar Dados'
                                }
                            </button>

                            <Link className='reset-password' to="reset-password">
                                Redefinir Senha
                            </Link>
                        </footer>
                    </form>
                </section>
                <GradientOverlay />
            </>
        </S.Container>
    )
}

const ProfileSkeleton = () => {
    return (
        <S.Container>
            <>
                <header>
                    <div className='title'>
                        <Skeleton
                            width={53}
                            height={46}
                            baseColor='#3C375B'
                            highlightColor='#6345EE'
                            borderRadius={4}
                        />

                        <Skeleton
                            width={340}
                            height={46}
                            baseColor='#3C375B'
                            highlightColor='#6345EE'
                            borderRadius={4}
                        />
                    </div>

                    <div className='dots'>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </header>

                <section>
                    <form>
                        <header>
                            <Skeleton
                                width={144}
                                height={144}
                                circle
                                baseColor='#3C375B'
                                highlightColor='#6345EE'
                            />

                            <div className='header-inputs'>
                                <SkeletonProfile />
                            </div>
                        </header>

                        <div className="form-content">
                            {SkeletonInputs.map(input => (
                                <SkeletonProfile
                                    key={input.className}
                                    className={input.className}
                                />
                            ))}
                        </div>
                    </form>
                </section>

                <GradientOverlay />
            </>
        </S.Container>
    )
}
