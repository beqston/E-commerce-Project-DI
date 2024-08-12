import "../assets/style/login.css"
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

    const loginUser = async (formData: LoginFormData)=> {
        const {data, error} = await supabase.auth.signInWithPassword({
        email:formData.email,
        password: formData.password,
        });
        return {data, error}
    }

    const onSubmit = async (data: LoginFormData)=> {
       const { error} = await loginUser(data);
       if(!error){
        navigate('/')
       }
    }

    return(
        <div className="login-cnt">
            
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="login-h2">Authorization</h2>
                <div className="login-input">
                <Input
                  title="Email Address"
                  type="email"
                  placeholder="alexei@mail.com"
                  id="adress"

                  {...register("email", {
                    required:true,
                  })}
                  isError={Boolean(errors.email)}
                />
                </div>
                <div className="login-input">
                <Input
                  title="Password"
                  type="password"
                  placeholder="password"
                  id="password"

                  {...register("password", {
                    required:true,
                  })}
                  isError={Boolean(errors.email)}
                />
                </div>

              <button className="login-btn" type="submit">Sing In</button>
              <Link to={"/register"}>Don't Have An Account?</Link>  
            </form>


        </div>
    )
}

export default Login;