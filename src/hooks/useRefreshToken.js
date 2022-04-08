import axios from '../services/axios';
import useAuth from './useAuth';

function useRefreshToken() {
    const { auth, setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/auth/refresh/' + auth.id,
            {
                withCredentials: true,
            });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(JSON.stringify(response.data));
            return { ...prev, accessToken: response.data.accessToken };
        });

        return response.data.accessToken;
    };

    return refresh
}

export default useRefreshToken