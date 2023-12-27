import { useUI } from '@components/ui';
import { AuthContext } from 'Context/AuthProvider';
import { useState, useEffect, useCallback, useContext } from 'react';

const useGeolocation = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [isLocationAllowed, setIsLocationAllowed] = useState(null);
    const { setModalView, openModal, closeModal } = useUI();
    const { user } = useContext(AuthContext);

    const handleSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setIsLocationAllowed(true);
    };

    const handleError = (error) => {
        setError(error);
        setIsLocationAllowed(false);
        if (error.code === error.PERMISSION_DENIED) {
            openModal();
            setModalView('LOCATION_PROVIDER_VIEW');
        }
    };

    const getLocation = useCallback(() => {
        if (user) {
            if (!navigator.geolocation) {
                setError(new Error('Geolocation is not supported by your browser.'));
                setIsLocationAllowed(false);
                setModalView('LOCATION_PROVIDER_VIEW');
                openModal();
            } else {
                navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
            }
        }
    }, [user, setModalView, openModal]);

    useEffect(() => {
        getLocation();
    }, [getLocation]);

    return { location, error, isLocationAllowed };
};

export default useGeolocation;
