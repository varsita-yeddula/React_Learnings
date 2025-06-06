import react from 'react';
import { useState } from 'react';

export default function ContactManager()
{
    const[contacts,setContacts]=useState([]);
    const[formdata,setFormData]=useState({name:'',email:'',phone:''});
    const[edit,setEdit]=useState(null);
    const[errors,setErrors]=useState({});

    function validate(FieldValue=formdata){
        const temperrors={}
        if(!FieldValue.name.trim()){
            temperrors.name='Name is Required';
        }
        if(!FieldValue.email.trim())
        {
            temperrors.email='Email is Rewuired';
        }
        else if(!/\S+@\S+\.\S+/.test(FieldValue.email)){
            temperrors.email='Email is Invalid';
        }
        if(!FieldValue.phone.trim())
        {
            temperrors.phone='Phone Number is ReQuired';
        }
        else if(!/^\d{10}$/.test(FieldValue.phone)){
            temperrors.phone='Phone number must be 10 digits';
        }
        return temperrors;

    }
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
        const validationErrors=validate();
        setErrors(validationErrors);
        if(Object.keys(validationErrors).length > 0)
        {
            return;
        }

        if(edit!=null)
        {
            setContacts(prev => {
                const updated=[...prev];
                updated[edit]=formdata;
                return updated;
            });
            setEdit(null);
        }
        else
        {
            setContacts(prev => [...prev, formdata]);
        }
        setFormData({name:'',email:'',phone:''});
        setErrors({});
    }

    function handleEdit(index)
    {
        setFormData(contacts[index]);
        setEdit(index);
        setErrors({});
    }

    function handleDelete(index)
    {
       if(window.confirm('Are you sure you want to delete this contact?'))
       {
        setContacts(prev => prev.filter((_,i) => i !== index));
        if(edit === index)
        {
            setEdit(null);
            setFormData({name:'',email:'',phone:''});
            setErrors({});
        }
       }
    }

    return (
        <div style={{padding:'20px', maxWidth: '600px', margin: 'auto',marginTop:'20px', textAlign: 'center' ,backgroundColor:'rgba(35, 120, 218, 0.29)',borderRadius: '10px', boxShadow: '1 4px 8px rgba(0, 64, 255, 0.98)',border: '1px solid purple'}}>
            <h1>Contact Manager</h1>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px',backgroundColor:'lightyellow', padding: '20px', borderRadius: '5px',border: '1px solid purple'}}>
                
                <label >Name</label>
                <input 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    value={formdata.name} 
                    onChange={handleChange} 
                    required={true}
                    style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px'}}
                />
                {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                <lable>Email</lable>
                <input 
                    type='email' 
                    name='email' 
                    placeholder='Email' 
                    value={formdata.email} 
                    onChange={handleChange} 
                    required={true}
                    style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px'}}
                />
                {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                <lable>Phone</lable>
                <input 
                    type='tel' 
                    name='phone' 
                    placeholder='Phone Number' 
                    value={formdata.phone} 
                    onChange={handleChange} 
                    style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px'}}
                />
                {errors.phone && <span style={{color: 'red'}}>{errors.phone}</span>}
                
                 <div>

                <button type='submit' style={{padding: '10px', fontSize: '16px',border: '3px solid black', borderRadius: '4px', backgroundColor: 'lightblue', cursor: 'pointer'}}>
                    {edit !== null ? 'Update Contact' : 'Add Contact'}
                </button>
                </div>
                </form>
                

                {contacts.length === 0 ? (
                    <p>No Contact added yet</p>
                ):(
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => (
                                    <tr key={index}>
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td>
                                            <button onClick={() => handleEdit(index)} style={{marginLeft: '10px', backgroundColor:'green', borderRadius: '4px',color:"white", border:"None", padding:4}}>Edit</button>
                                            <button onClick={() => handleDelete(index)} style={{marginLeft: '10px', backgroundColor:'red',  borderRadius: '4px', color:"white", border:"None", padding:4}}>Delete</button>
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
