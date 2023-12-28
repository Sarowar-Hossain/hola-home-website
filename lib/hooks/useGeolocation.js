import { useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { useUI } from '@components/ui';
import { AuthContext } from 'Context/AuthProvider';

const useGeolocation = () => {
    const [location, setLocation] = useState({ coordinates: null, address: null });
    const [error, setError] = useState(null);
    const [isLocationAllowed, setIsLocationAllowed] = useState(null);
    const { setModalView, openModal, closeModal } = useUI();
    const { user } = useContext(AuthContext);
    const formatCoords = (lat, lon) => {
        const latDirection = lat >= 0 ? 'N' : 'S';
        const lonDirection = lon >= 0 ? 'E' : 'W';
        return `[${Math.abs(lat).toFixed(6)}° ${latDirection}, ${Math.abs(lon).toFixed(6)}° ${lonDirection}]`;
    };

    const reverseGeocode = async (latitude, longitude) => {
        try {
            const response = await axios.get(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const formattedCoordinates = formatCoords(latitude, longitude);
            setLocation({ coordinates: formattedCoordinates, address: response.data.display_name });
        } catch (error) {
            console.error('Error during reverse geocoding:', error);
            setError(error);
        }
    };

    const handleSuccess = (position) => {
        const { latitude, longitude } = position.coords;
        reverseGeocode(latitude, longitude);
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
