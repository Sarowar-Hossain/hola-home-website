import Properties from '@components/Home/Properties/Properties'
import { useState } from 'react'

export default function Home() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="container mx-auto">
      <Properties />
    </div>
  )
}
