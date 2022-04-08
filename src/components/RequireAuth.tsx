import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

type AllowedRolesProps = {
    allowedRoles: string[]
}

function RequireAuth({ allowedRoles }: AllowedRolesProps) {
    const { auth } = useAuth() as any
    const location = useLocation()
    console.log(auth)

    return (
        allowedRoles.includes(auth?.role)
            ? <Outlet />
            : auth?.username
                ? <Navigate to={{ pathname: '/profil' }} replace />
                : <Navigate to="login" state={{ from: location }} replace />
    )
}

export default RequireAuth