import "../assets/style/profile.css"
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

    const [user, setUser] = useState<null | any>(null);
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
            navigate("/login");
        }

    }

    useEffect(()=> {
        getUser()
    }, [])
    
    return(
        <div className="profile-cnt">
            <h2 className="profile-h2">user profile</h2>

            <ul className="profile-list">
                <li>email: {user?.email}</li>
                <li>age: {user?.user_metadata.age}</li>
            </ul>

            <button className="profile-btn" onClick={logOut}>Log Out</button>
        </div>
    )
}

export default UserProfile;