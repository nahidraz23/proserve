import AllUsers from '@/components/AllUsers'

export  const  allUsersData = async () => {
  const res = await fetch('http://localhost:3000/dashboard/allUser/api')
  const result = await res.json()
  return result
}

export default async function AllUser () {
  const users = await allUsersData()

  return (
    <div className='mb-40'>
      <AllUsers users={users} />
    </div>
  )
}
