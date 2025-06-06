import React,{ useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

function User(){
        const navigate = useNavigate();
        const [users,setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
        const[error, setError] = useState(null);
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
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
        },[]);
        if(loading){
            return <p>Loading user details...</p>
        }
        if(error){
            return <p>Error: {error}</p>
        }

        const styles = {
            th:{
                border:"3px solid black",
                borderCollapse: "collapse"
            },
            td:{
                border:"3px solid black",
                borderCollapse: "collapse"
            },
            tr:{
                border:"3px solid black",
                borderCollapse: "collapse"
            }
        }
        return(
            <>
            <h2 style={{textAlign:"center", fontFamily:"sans-serif", fontSize:34, color:"rgb(17, 77, 166)", shadow:"1px black"}}>Users List</h2>
            <table style={{marginLeft:"29%", backgroundColor:"white", border:"3px solid black", padding:20, borderRadius:15}}>
                <thead>
                    <tr style={styles.tr}>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=> (
                        <tr key={user.id}
                            onClick={()=> navigate(`/users/${user.id}`)}
                            style={{cursor:"pointer"}}
                            title="click to view" >
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td >{user.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
}

export default User;