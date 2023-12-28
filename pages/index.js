import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import Properties from '@components/Home/Properties/Properties';
import { GlobalContext } from 'Context/Context';
import { AuthContext } from 'Context/AuthProvider';
import useGeolocation from '@lib/hooks/useGeolocation';

export default function Home() {
  const { user } = useContext(AuthContext);
  const { setBookMarkList, setBookmarkLength } = useContext(GlobalContext);
  
  const { location, error, isLocationAllowed } = useGeolocation()
  console.log(location)
  console.log(error)
  console.log(isLocationAllowed)
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

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
