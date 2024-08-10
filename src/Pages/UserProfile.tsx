import { useEffect, useState } from "react";
import supabase from "../config/supabaseConfig";
import { useNavigate } from "react-router-dom";

type User = {
    enail: string;
    user_metadata: {
        age: number
    }
}

const UserProfile = ()=> {

    const {user, setUser} = useState<null | any>(null);
    const navigate = useNavigate();

    const getUser = async ()=> {
        const {data, error} = await supabase.auth.getUser();

        if(!error){
            setUser(data.user)
        }
    }

    const logOut = async ()=> {
        const {error} = await supabase.auth.signOut();
        if(!error){
            navigate("/");
        }

    }

    useEffect(()=> {
        getUser()
    }, [])
    return(
        <div>
            <h1>user profile</h1>

            <ul>
                <li>email: {user?.email}</li>
                <li>age: {user?.user_metadata.age}</li>
            </ul>

            <button onClick={logOut}>Log Out</button>
        </div>
    )
}

export default UserProfile;