import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-screen w-full flex justify-center items-center space-y-5'>
            <h2 className='text-5xl font-bold'>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}