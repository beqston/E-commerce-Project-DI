import { Link, useNavigate } from "react-router-dom";

const NotFound = ()=> {
    const navigate =  useNavigate()
    return(
        <div>
            <h3 style={{
                fontSize: "2rem",
                cursor: "pointer",
                opacity: "0.8",
                paddingTop: "2rem"
            }} 
            onClick={()=> navigate(-1)}>
                Go To Back
            </h3>

            <h2 style={{
            width: '100%',
            fontSize:'84px',
            fontWeight: '800',
            letterSpacing: '8px',
            color: 'red',
            padding: '100px',
            margin: 'auto',
            display: "flex",
            justifyContent: 'center'
        }}>Not Found Page</h2>
        <div style={{
            marginBottom: '80px',
            display: "flex",
            justifyContent: 'center'
        }}><Link to={'/'} style={{
            fontSize: '24px',
            textDecoration: 'none',
            color: 'green',
            
        }} >Go To Home Page</Link></div>
        </div>
)
}

export default NotFound;