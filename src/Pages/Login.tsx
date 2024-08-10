import { useForm } from "react-hook-form";
import Input from "../Components/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../config/supabaseConfig";

type LoginFormData = {
    email: string;
    password: string;
}

const Login = ()=> {
    const {register, formState:{errors}, handleSubmit} = useForm<LoginFormData>();
    const navigate = useNavigate()

    const registerUser = async (formData: LoginFormData)=> {
        const {data, error} = await supabase.auth.signInWithPassword({
        email:formData.email,
        password: formData.password,
        });
        return {data, error}
    }

    const onSubmit = async (data: LoginFormData)=> {
       const {data: userData, error} = await registerUser(data);
       if(!error){
        navigate('/profile')
       }
    }

    return(
        <div>
            <h1>register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                

                <div style={{width: "300px"}}>
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
                </div>
                <div style={{width: "300px"}}>
                <Input
                  title="password"
                  type="password"
                  placeholder="password"
                  id="password"

                  {...register("password", {
                    required:true,
                    pattern: {
                      value:
                        /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/g,
                      message: "Please enter valid email",
                    },
                    maxLength: {
                        value: 4,
                        message: "please enter min 4 symbol"
                    }
                  })}
                  isError={Boolean(errors.email)}
                />
                </div>

             <button type="submit">Login</button>
            </form>

            <Link to={"/register"}>Don"t Have An ACount?</Link>

        </div>
    )
}

export default Login;