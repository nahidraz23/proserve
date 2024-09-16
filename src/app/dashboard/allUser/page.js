import AllUsers from "@/components/AllUsers";

export async function allUsersData(){
    const res = await fetch('http://localhost:3000/dashboard/allUser/api')
    const result = await res.json()
    return result;
}

export default async function AllUser(){
    const users = await allUsersData()

    return(
        <div className="mb-40">

        <AllUsers users={users?.service}/>


        <AllUsers users={users}/>

        </div>
    )
}