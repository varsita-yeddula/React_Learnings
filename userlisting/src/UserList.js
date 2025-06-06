import React,{useState,useEffect} from "react";
import { useParams, Link } from "react-router-dom";

function UserDetails(){
    const [users,setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const {id} = useParams();

     useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => {
                    if(!res.ok){
                        throw new Error("Error Occured");
                    }
                    return res.json()
                })
                .then((data)=>{
                    setUsers(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                })
        },[id]);
        if(loading){
            return <p>Loading user details...</p>
        }
        if(error){
            return <p style={{color:'red'}}>Error: {error}</p>
        }
        if(!users) return <p>User Not Found</p>
        return (
           <div style={{marginLeft:"30%", backgroundColor:"white", border:"3px solid black", padding:20, borderRadius:15, width:"40%", marginTop:20}}>
                <h2>User Details of {users.name}</h2>
                <p>
                    <strong>Email:</strong> {users.email}
                </p>
                <p>
                    <strong>Phone:</strong> {users.phone}
                </p>
                <p>
                    <strong>Website:</strong> {users.website}
                </p>
                <Link to='/users'>Back to Users</Link>
           </div> 
        )
}

export default UserDetails;