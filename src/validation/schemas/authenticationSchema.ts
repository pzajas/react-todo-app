import { object, string } from 'yup'

import { LOGIN_VALIDATION_MESSAGE } from '../messages/validationMessages'

export const AuthenticationSchema = object().shape({
  email: string()
    .typeError(LOGIN_VALIDATION_MESSAGE.USERNAME_MUST_BE_STRING)
    .min(5, 'short.')
    .trim(LOGIN_VALIDATION_MESSAGE.USERNAME_MUST_BE_TRIMMED)
    .email('provide correct email')
    .required(LOGIN_VALIDATION_MESSAGE.USERNAME_IS_REQUIRED),

  password: string()
    .typeError(LOGIN_VALIDATION_MESSAGE.PASSWORD_MUST_BE_STRING)
    .min(5, 'pass short')
    .trim(LOGIN_VALIDATION_MESSAGE.PASSWORD_MUST_BE_TRIMMED)
    .required(LOGIN_VALIDATION_MESSAGE.PASSWORD_IS_REQUIRED),
})
