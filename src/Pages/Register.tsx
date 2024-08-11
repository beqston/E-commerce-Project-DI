import "../assets/style/register.css"
import { useForm } from "react-hook-form";
import supabase from "../config/supabaseConfig";
import Input from "../Components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export type UserFormData = {
    email: string;
    password: string;
    age: number;
}

const Register = ()=> {
    const {register, formState:{errors}, handleSubmit} = useForm<UserFormData>();
    const navigate = useNavigate()
    const [regerrors, setRegerrors] = useState(false)

    const registerUser = async (formData: UserFormData)=> {
        const {data, error} = await supabase.auth.signUp({
        email:formData.email,
        password: formData.password,
        options: {
            data:{
                age: formData.age
            }
        }
        });
        

        if(!data.user?.email){
          setRegerrors(true)
        }


        return {data, error}
    }

    const onSubmit = async (data: UserFormData)=> {
       const {data: userData, error} = await registerUser(data);
       
       if(!error){
        navigate('/profile')
       }
       
    }

    return(
        <div className="register-cnt">
            <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
                
              <h2 className="register-h2">Registration</h2>

                <div className="register-input">
                <Input
                  title="Email Address"
                  type="email"
                  placeholder="alexei@mail.com"
                  id="adress"

                  {...register("email", {
                    required:true,
                    pattern: {
                      value:
                        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g,
                      message: "Please enter valid email",
                    },
                  })}
                  isError={Boolean(errors.email)}
                />

                {
                  regerrors? <p style={{color: "red", transform: "translateY(-24px)"}}>Email Is Used</p>: null
                }
                </div>
                <div className="register-input">
                <Input
                  title="password"
                  type="password"
                  placeholder="password"
                  id="password"

                  {...register("password", {
                    required:true,
                    maxLength: {
                        value: 20,
                        message: "please enter min 4 symbol"
                    },
                    minLength: {
                      value: 4,
                      message: "please min4 simbols"
                    }
                  })}
                  isError={Boolean(errors.email)}
                />
                </div>
                <div className="register-input">
                <Input
                  title="age"
                  type="number"
                  placeholder="age"
                  id="age"

                  {...register("age", {
                    required:{
                      value:true,
                      message: "Not Correct"
                    }
                  })}
                  isError={Boolean(errors.age)}
                />
                </div>

             <button className="register-btn" type="submit">register</button>
            </form>

        </div>
    )
}


export default Register;