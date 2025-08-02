// pages/index.tsx - Home Page
// import { useRouter } from 'next/router'
import { useState,useRouter } from 'react'


export default function Home() {
  const [location, setLocation] = useState('Bangalore')
  const [specialization, setSpecialization] = useState('Dermatologist')
  const router = useRouter()

  const handleSearch = () => {
    router.push(`/doctors?location=${location}&specialization=${specialization}`)
  }

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Your home for health</h1>
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl flex flex-col gap-4">
        <input
          className="border rounded p-2"
          value={location}
          onChange={e => setLocation(e.target.value)}
          placeholder="Enter Location"
        />
        <input
          className="border rounded p-2"
          value={specialization}
          onChange={e => setSpecialization(e.target.value)}
          placeholder="Enter Specialization"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>
  )
}
