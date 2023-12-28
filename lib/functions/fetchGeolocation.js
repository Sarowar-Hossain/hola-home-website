import axios from 'axios';
import toast from 'react-hot-toast';

const reverseGeocode = async (latitude, longitude) => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    try {
        const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        );
        const fetchedLocation = {
            city: response?.data?.address?.state_district,
            country: response?.data?.address?.country,
            geoPoint: { latitude, longitude },
            state: response?.data?.address?.state,
            timezone: response?.data?.address?.country_code
        };
        const userId = localStorage.getItem('userId');
        console.log(fetchedLocation)
        if (userId) {
            const response = await axios.post(baseUrl + "/manageUsersApis/update-fetched-location", {
                id: userId,
                fetchedLocation
            })
            toast.success("Thanks, Your location added successfully!")
        }
        return { address: response?.data?.address };
    } catch (error) {
        console.error('Error during reverse geocoding:', error);
        return { error: 'Error during reverse geocoding' };
    }
};

const fetchGeolocation = async (fetchLocation, fetchLocationManual, openModal, setModalView) => {
    const userId = localStorage.getItem('userId');
    if (!userId || !fetchLocation) {
        return { error: 'User ID not found or location fetch not requested' };
    }

    const handleSuccess = async (position) => {
        const { latitude, longitude } = position.coords;
        return await reverseGeocode(latitude, longitude);
    };

    const handleError = (error) => {
        if (error.code === error.PERMISSION_DENIED) {
            if (fetchLocationManual) {
                openModal();
                setModalView('LOCATION_PROVIDER_VIEW');
            }
            return { error: 'Location permission denied' };
        }
        return { error: 'Error getting location' };
    };

    if (!navigator.geolocation) {
        const errorMsg = 'Geolocation is not supported by your browser.';
        console.error(errorMsg);
        return { error: errorMsg };
    } else {
        return new Promise((resolve) => {
            navigator.geolocation.getCurrentPosition(
                async (position) => resolve(await handleSuccess(position)),
                (error) => resolve(handleError(error))
            );
        });
    }
};

export default fetchGeolocation;
