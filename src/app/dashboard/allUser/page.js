import AllUsers from '@/components/AllUsers'
import useAxiosPublic from '@/hooks/useAxiosPublic';

const axiosPublic = useAxiosPublic();

export const allUsersData = ( async () => {
  const res = await axiosPublic.get('http://localhost:3000/dashboard/allUser/api');
  const result = await res.data;
  return result;
})

const AllUser = async () => {
  const users = await allUsersData()

  return (
    <div className='mb-40'>
      <AllUsers users={users} />
    </div>
  )
}

export default AllUser
