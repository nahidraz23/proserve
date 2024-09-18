import DashboardNavbar from '@/components/DashboardNavbar'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout ({ children }) {
  return (
    <div className='p-4 rounded-xl'>
      <div className='flex flex-col md:flex-row '>
        <div className='w-full md:w-[18%] lg:w-[15%]'>
          <Sidebar />
        </div>
        <main className='w-full md:w-[82%] lg:w-[85%] p-4 md:p-8 bg-gray-50'>
          <div className='mb-4 '>
            <DashboardNavbar />
          </div>
          <div className='bg-white w-full shadow-md rounded-lg p-4 min-h-[calc(100vh-160px)]'>
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
