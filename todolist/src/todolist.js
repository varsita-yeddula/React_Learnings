import react from 'react';
import { useState } from 'react';

export default function ToDoList()
{
    const[works,setWorks]=useState([]);
    const[formdata,setFormData]=useState({work:''});
    const[edit,setEdit]=useState(null);
    // const[errors,setErrors]=useState({});

    function handleChange(e)
    {
        const{name,value}=e.target;
        setFormData(prev =>({
            ...prev,
            [name]: value
        }));
        
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        if(edit!=null)
        {
            setWorks(prev => {
                const updated=[...prev];
                updated[edit]=formdata;
                return updated;
            });
            setEdit(null);
        }
        else
        {
            setWorks(prev => [...prev, formdata]);
        }
        setFormData({work:''});
    }

    function handleEdit(index)
    {
        setFormData(works[index]);
        setEdit(index);
    }

    function handleDelete(index)
    {
       if(window.confirm('Are you sure you want to delete this contact?'))
       {
        setWorks(prev => prev.filter((_,i) => i !== index));
        if(edit === index)
        {
            setEdit(null);
            setFormData({work:''});
        }
       }
    }

    return (
        <div style={{padding:'20px', maxWidth: '600px', margin: 'auto',marginTop:20, textAlign: 'center' ,backgroundColor:'rgba(147, 79, 67, 0.73)',borderRadius: '10px', boxShadow: '1 4px 8px rgba(0,0,0,0.1)',border: '1px solid purple'}}>
            <h1 style={{fontFamily: "cursive"}}>To Do List</h1>
            <form onSubmit={handleSubmit} style={{display: 'flex', gap: '10px',backgroundColor:'rgba(147, 79, 67, 0)', padding: '20px', borderRadius: '5px',border: 'none'}}>
                
                {/* <label >Work to do</label> */}
                <input 
                    type='text' 
                    name='work' 
                    placeholder='Work' 
                    value={formdata.work} 
                    onChange={handleChange} 
                    required={true}
                    style={{padding: '10px', fontSize: '16px',border: '2px solid black', borderRadius: '4px', display:"inline", width:500}}
                />
                <button type='submit' style={{padding: '10px', fontSize: '16px',border: '2px solid black', borderRadius: '10px', display:"inline", width:"50px", backgroundColor:"white"}} >
                    {edit !== null ? 'Edit' : 'Add'}
                </button>
                </form>
                

                {works.length === 0 ? (
                    <p>No Works added yet</p>
                ):(
                    <div>
                        <table style={{backgroundColor:"white", width:570, fontFamily:"cursive", fontSize:"large", borderRadius:5, border:"2px solid black", boxShadow:"1px 2px 4px rgba(0,0,0,0.1)"}}>
                            {/* <thead>
                                <tr>
                                    <th>Work</th>
                                    <th>Actions</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {works.map((work, index) => (
                                    <tr key={index}>
                                        <td>{work.work}</td>
                                        <td>
                                            <button onClick={() => handleEdit(index)} style={{marginRight: '10px' ,border: '1px solid black',backgroundColor:"white", borderRadius:4}}>Edit</button>
                                            <button onClick={() => handleDelete(index)} style={{marginRight: '10px' ,border: '1px solid black',backgroundColor:"white", borderRadius:4}}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                        </table>
                    </div>
                )
                }

            </div>    
    )




}
