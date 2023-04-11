import { object, string } from 'yup'

import { LOGIN_VALIDATION_MESSAGE } from '../messages/validationMessages'

export const LoginSchema = object().shape({
  // username: string(),
  // .typeError(LOGIN_VALIDATION_MESSAGE.USERNAME_MUST_BE_STRING)
  // .min(5, 'Wrong username or password.')
  // .trim(LOGIN_VALIDATION_MESSAGE.USERNAME_MUST_BE_TRIMMED)
  // .required(LOGIN_VALIDATION_MESSAGE.USERNAME_IS_REQUIRED),

  password: string()
    .typeError(LOGIN_VALIDATION_MESSAGE.PASSWORD_MUST_BE_STRING)
    .min(5, 'pass')
    .trim(LOGIN_VALIDATION_MESSAGE.PASSWORD_MUST_BE_TRIMMED)
    .required(LOGIN_VALIDATION_MESSAGE.PASSWORD_IS_REQUIRED),
})
