import { HTTP_URLS } from '../../libs/http'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTokenState } from '../../redux/features/tokenSlice'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from '@hookform/error-message'
import { LoginSchema } from '../../validation/schemas/LoginSchema'
import styled from 'styled-components'

import axios from 'axios'
import jwtDecode from 'jwt-decode'
import Cookies from 'universal-cookie'
import SecondaryText from '../../elements/SecondaryText'

const cookies = new Cookies()

const StyledFormContainer = styled.div``

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

    border: none;
    border-bottom: 0.1rem solid #01ff8a;

    width: 100%;
    height: 2.8rem;
  }
`

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 2.4rem;

  button {
    width: 8.3rem;
    height: 2.7rem;
    background-color: #181818;

    border-radius: 0.2rem;

    border: 0.1rem solid #01ff8a;
    cursor: pointer;

    font-size: 1rem;
  }
`

const StyledOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 3.4rem;

  gap: 2rem;
`

const StyledLinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.3rem;
  margin: 2.4rem 0rem 2.4rem 0rem;

  div {
    width: 4.3rem;
    height: 4.3rem;

    background-color: #252525;
  }
`

const StyledRegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  span {
    font-size: 0.8rem;
    color: #01ff8a;
  }
`

const StyledConnectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
`

const StyledRectangle = styled.div`
  width: 56px;
  height: 2px;
  background: linear-gradient(
      90deg,
      rgba(0, 195, 101, 0.4) -73.21%,
      rgba(0, 195, 113, 0) 139.29%
    ),
    linear-gradient(
      90deg,
      rgba(0, 195, 101, 0.06) 0%,
      rgba(0, 195, 101, 0) 0.02%
    );
`

const StyledRectangleRotated = styled.div`
  width: 56px;
  height: 2px;
  background: linear-gradient(
      90deg,
      rgba(0, 195, 101, 0.4) -73.21%,
      rgba(0, 195, 113, 0) 139.29%
    ),
    linear-gradient(
      90deg,
      rgba(0, 195, 101, 0.06) 0%,
      rgba(0, 195, 101, 0) 0.02%
    );
  transform: rotate(180deg);
`

const StyledSecondaryText = styled(SecondaryText)`
  color: red;
`

export const LoginForm = () => {
  const [data, setData] = useState(0)

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
    <StyledFormContainer>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('username')}
          placeholder="username or email"
        />
        <ErrorMessage errors={errors} name="username" />

        <input
          {...register('password')}
          placeholder="password"
        />
        <ErrorMessage errors={errors} name="password" />

        <StyledOptionsContainer>
          <SecondaryText text="REMEMBER ME?" />
          <SecondaryText text="FORGOT PASS?" />
        </StyledOptionsContainer>

        <StyledButtonContainer>
          <button type="submit">LOGIN</button>
          <button type="submit">CLEAR</button>
        </StyledButtonContainer>

        <StyledConnectContainer>
          <StyledRectangleRotated />
          <SecondaryText text="OR CONNECT WITH" />
          <StyledRectangle />
        </StyledConnectContainer>

        <StyledLinksContainer>
          <div />
          <div />
          <div />
          <div />
        </StyledLinksContainer>

        <StyledRegisterContainer>
          <StyledSecondaryText text="NOT A MEMBER?" />
          <span>REGISTER NOW</span>
        </StyledRegisterContainer>
      </StyledForm>
    </StyledFormContainer>
  )
}
