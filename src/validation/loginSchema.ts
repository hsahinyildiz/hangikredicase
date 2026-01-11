import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup
        .string()
        .email('Geçerli bir e-mail girin')
        .required('E-mail zorunlu'),

    password: yup
        .string()
        .min(4, 'Şifre minimum 4 karakter olmalı')
        .required('Şifre zorunlu')
});
