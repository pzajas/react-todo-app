import { ErrorMessage } from '@hookform/error-message'
import { HTTP_URLS } from '../../libs/http'
import { LoginClear } from '../../assets/icons/LoginClear'
import { LoginIcon } from '../../assets/icons/LoginIcon'
import { LoginSchema } from '../../validation/schemas/LoginSchema'
import { SecondaryTextContainer } from './SecondaryTextContainer'
import { changeTokenState } from '../../redux/features/tokenSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'

import Cookies from 'universal-cookie'
import PrimaryButton from '../../elements/buttons/PrimaryButton'
import SecondaryText from '../../elements/SecondaryText'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import styled from 'styled-components'

const StyledForm = styled.form`
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 2.5rem;

  margin-top: 4rem;

  input {
    padding: 0;
    background-color: #181818;

    margin-bottom: 2.5rem;

    font-size: 1rem;
    font-family: Montserrat, system-ui, Avenir, Helvetica, Arial, sans-serif;

    outline: none;

    border: none;
    border-bottom: 0.1rem solid #01ff8a;

    width: 100%;
    height: 2.8rem;
  }
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 3.4rem;
`

export const LoginForm = (): any => {
  const [setData] = useState(0)

  const cookies = new Cookies()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
    mode: 'onChange',
  })

  const onSubmit: any = (data: any) => {
    axios
      .post(HTTP_URLS.LOGIN, {
        username: data.username,
        password: data.password,
      })
      .then((response) => {
        const token = response.data.token
        jwtDecode(token)

        cookies.set('token', token)
        dispatch(changeTokenState(Date.now()))

        setData(Date.now())
        reset()
      })
      .catch((err: any) => {
        console.log(err.response.data)

        dispatch(changeTokenState(0))
      })
  }

  return (
    <div>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('username')}
          placeholder="username or email"
          autoComplete="off"
        />
        <ErrorMessage errors={errors} name="username" />

        <input
          {...register('password')}
          placeholder="password"
          autoComplete="off"
        />
        <ErrorMessage errors={errors} name="password" />

        <SecondaryTextContainer>
          <SecondaryText text="REMEMBER ME?" />
          <SecondaryText text="FORGOT PASS?" />
        </SecondaryTextContainer>

        <StyledButtonContainer>
          <PrimaryButton
            type="submit"
            text="LOGIN"
            icon={<LoginIcon />}
          ></PrimaryButton>
          <PrimaryButton text="CLEAR" icon={<LoginClear />} />
        </StyledButtonContainer>
      </StyledForm>
    </div>
  )
}
