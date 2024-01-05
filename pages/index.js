import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Properties from '@components/Home/Properties/Properties';
import { GlobalContext } from 'Context/Context';
import { AuthContext } from 'Context/AuthProvider';
import fetchGeolocation from '@lib/functions/fetchGeolocation';
import { useUI } from '@components/ui';

export default function Home() {
  const { user } = useContext(AuthContext);
  const { setModalView, openModal } = useUI()
  const { setBookMarkList, setBookmarkLength } = useContext(GlobalContext);
  const [fetchLocation, setFetchLocation] = useState(false)
  const [fetchLocationManual, setFetchLocationManual] = useState(false)
  const [locationData, setLocationData] = useState({ location: null, error: null });

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const getLocationData = async () => {
      try {
        const result = await fetchGeolocation(fetchLocation, fetchLocationManual, openModal, setModalView);
        if (result.error) {
          setLocationData({ location: null, error: result.error });
        } else {
          setLocationData({ location: result, error: null });
        }
      } catch (error) {
        setLocationData({ location: null, error: error.message });
      }
    };

    if (fetchLocation) {
      getLocationData();
    }
  }, [fetchLocation, openModal, setModalView]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.post(
          `${baseUrl}/manageUsersApis/check-user`,
          {
            id: user?.uid,
          }
        )
        if (!response?.data?.fetchedLocation?.geoPoint) {
          setFetchLocation(true)
        }
        if ((response?.data?.locationEnteredByUser === "")) {
          setFetchLocationManual(true)
        }
      } catch (error) {
        console.error('Error fetching user data:', error)
      } finally {

      }
    }
    if (user?.uid) {
      fetchUserData()
    }
  }, [user?.uid, baseUrl])

  const fetchBookmarks = async () => {
    const id = localStorage.getItem('userId');
    if (!id) throw new Error('No user ID found');
    try {
      const response = await axios.post(`${baseUrl}/manageUsersApis/check-bookmarks`, { id });
      if (response?.data?.propertyIds) {
        localStorage.setItem('bookmarkIds', JSON.stringify(response.data.propertyIds));
      }
      setBookMarkList(response?.data?.propertyIds)
      setBookmarkLength(response?.data?.propertyIds?.length)
    } catch (error) {
      console.log(error)
    }
    return response.data.propertyIds;
  };

  const { data: bookmarkData, isLoading, refetch } = useQuery({
    queryKey: ['bookmarks', user],
    queryFn: fetchBookmarks,
    enabled: !!user,
    onSuccess: (data) => {
      setBookMarkList(data);
      setBookmarkLength(data.length);
    },
  });


  return (
    <div className="container mx-auto">
      <Properties refetch={refetch} />
    </div>
  );
}
