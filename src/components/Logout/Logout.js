import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import * as userServices from '../../services/userServices'

const Logout = () => {

    const navigate = useNavigate()
    const { userData, logoutHeandler } = useContext(AuthContext)

    useEffect(() => {
        userServices.logout(userData.accessToken)
            .then(() => {
                logoutHeandler()
                navigate('/')
            })
            .catch(() => {
                navigate('/')
            })
    })

    return null;
}

export default Logout