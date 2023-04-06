import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'universal-cookie'
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'

const cookies = new Cookies()
const token = cookies.get('token')

let decoded: any

const ProtectedRoutes = () => {
  try {
    const decodedToken: any = jwtDecode(token)

    decoded = decodedToken.exp > Date.now() / 1000
  } catch (error) {}

  return decoded ? <Outlet /> : <Navigate to="/error" />
}

export default ProtectedRoutes
