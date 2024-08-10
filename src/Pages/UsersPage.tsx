import { useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";

type User = {
    id: number;
    created_at: string;
    nickname: string;
    age: number;
    address: string

}

const UsersPage = ()=> {

    const [users, setUsers] = useState<User[]>([])

    const getUsers = async ()=> {
        const {data, error} = await supabase.from("users").select('*');


        if(!error){
            setUsers(data)
        }
    }  

    const addUser = async ()=> {
        const {data: user, error} = await supabase.from("users").insert({
            nickname: "jon",
            age: 30,
            address: "tbilisi"
        }).select().single();

        if(!error){
            setUsers([...users, user])    
        }

    }  
    const deteleUser = async (id: number)=> {
        const {data: user, error} = await supabase.from("users").delete().eq("id", id).select().single();

        if(!error){
            setUsers(users.filter((currUser)=> currUser.id !== user.id ))
        }
    }
    
    const updateUser = async (id:number)=> {
        const {data: user, error} = await supabase.from("users").update({age: 19, nickname: "updateName"}).eq("id", id).select().single()
        
        if(!error){
            users.map((currUser)=> currUser.id === id? user:currUser )
        }
    }



    useEffect(()=> {
        getUsers()
    }, [])

    return(
        <div>
            <h1>users</h1>

            {
                users?.map((user)=> {
                    return(
                        <div key={user.id}>
                            <span>{user.id}</span>
                            <h2>{user.nickname}</h2>
                            <button onClick={()=> addUser()}>add</button>
                            <button onClick={()=> deteleUser(user.id)}>delete</button>
                            <button onClick={()=> updateUser(user.id)}>update user</button>
                        </div>
                    )
                })
            }
            <button onClick={()=> addUser()}>add</button>

            
        </div>
    )
}


export default UsersPage;