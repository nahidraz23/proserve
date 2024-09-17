import AllUsers from '@/components/AllUsers'
import useAxiosPublic from '@/hooks/useAxiosPublic';

export const allUsersData =  async (axiosPublic) => {
  const res = await axiosPublic.get('/api/allUsers');
  const result = await res.data;
  return result;
}

const AllUser = async () => {
  const axiosPublic = useAxiosPublic();
  const users = await allUsersData(axiosPublic);

  return (
    <div className='mb-40'>
      <AllUsers users={users} />
    </div>
  )
}

export default AllUser
