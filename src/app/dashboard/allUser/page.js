import AllUsers from '@/components/AllUsers'
import useAxiosPublic from '@/hooks/useAxiosPublic'

const axiosPublic = useAxiosPublic();

export  const  allUsersData = async () => {
  const res = await axiosPublic.get('/dashboard/allUser/api')
  const result = await res.data;
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
