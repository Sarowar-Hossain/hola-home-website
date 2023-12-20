import Properties from '@components/Home/Properties/Properties'
import { AuthContext } from 'Context/AuthProvider'
import { GlobalContext } from 'Context/Context'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const { setBookMarkList, bookmarkList, bookmarkLength, setBookmarkLength } = useContext(GlobalContext)
  const { user } = useContext(AuthContext)
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  useEffect(() => {
    const fetchData = async () => {
      const id = localStorage.getItem('userId');
      if (id) {
        try {
          const response = await axios.post(baseUrl + '/manageUsersApis/check-bookmarks', {
            id
          });
          setBookMarkList(response?.data?.propertyIds)
          setBookmarkLength(response?.data?.propertyIds?.length)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };
    fetchData();
  }, [user]);

  return (
    <div className="container mx-auto">
      <Properties />
    </div>
  )
}
