import { AuthContext } from 'Context/AuthProvider';
import { useState, useEffect, useCallback, useContext } from 'react';


const useGeolocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [isLocationAllowed, setIsLocationAllowed] = useState(null);

    // Getting user from UserContext
    const { user } = useContext(AuthContext);

    const handleSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setIsLocationAllowed(true);
    };

    const handleError = (error) => {
        setError(error);
        setIsLocationAllowed(false);
    };

    const getLocation = useCallback(() => {
        if (user) { // Check if user exists
            if (!navigator.geolocation) {
                setError(new Error('Geolocation is not supported by your browser.'));
                setIsLocationAllowed(false);
            } else {
                navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
            }
        }
    }, [user]);

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return { location, error, isLocationAllowed };
};

export default useGeolocation;
