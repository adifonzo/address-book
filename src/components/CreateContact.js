import { useState, useEffect } from 'react';
import {getDatabase, ref, push, onValue, remove} from 'firebase/database'
import firebase from '../Firebase';

const CreateContact = () => {

    const [nameInput, setNameInput] = useState("");
    const [numberInput, setNumberInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [contactInfo, setContactInfo] = useState([])

    const handleNameInputChange = (event) => {
        setNameInput(event.target.value)
    } 
    const handleNumberInputChange = (event) => {
        setNumberInput(event.target.value)
    } 
    const handleEmailInputChange = (event) => {
        setEmailInput(event.target.value)
    } 

    const inputData = {
        nameInput: nameInput,
        numberInput: numberInput,
        emailInput: emailInput
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const database = getDatabase(firebase);
        const dbRef = ref(database, "/contactInfo");
        push(dbRef, inputData);
        setNameInput("");
        setNumberInput("");
        setEmailInput("");
    }

    const handleRemoveContact = (contactId) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${contactId}`);
        remove(dbRef);
    }

    console.log(handleRemoveContact);
    handleRemoveContact();
    
    useEffect (() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, "/contactInfo");
        const newState = [];
        onValue(dbRef, (response) => {
            const data = response.val();
            for(let key in data) {
                newState.push({key:key, name:data[key]})
            }

            setContactInfo(newState);
        })
        
    } ,[])

    return(
        <section>
             <h1>Contact Book</h1>
             <div className="formContainer">
                <h2>Create a Contact</h2>
                <form action="submit" onSubmit={ handleSubmit }>
                    <div className="formFlex">
                        <label className="name">Full Name:</label>
                        <input 
                        type="text" 
                        onChange={handleNameInputChange}
                        />
                    </div> 
                    <div className="formFlex">
                        <label className="number">Phone Number:</label>
                        <input 
                        type="text" 
                        onChange={handleNumberInputChange}
                        />
                    </div>
                    <div className="formFlex">
                        <label className="email">Email Address:</label>
                        <input 
                        type="text"
                        onChange={handleEmailInputChange}
                        />
                    </div>
                    <button>Create Contact</button>
                </form>
             </div>
                <>
                    <h2>Contact List</h2>
                </>
             <ul>
                {contactInfo.map( (singleContact) => {
                    console.log(singleContact)
                    return (
                        <div>
                            <li key={singleContact.key}>
                                <h3>{singleContact.name.nameInput}</h3>
                                <p>{singleContact.name.numberInput}</p>
                                <p>{singleContact.name.emailInput}</p>
                                <button onClick={() => handleRemoveContact(singleContact.key)}>Remove</button>
                            </li>
                        </div>
                        
                    )
                })}
             </ul>
        </section>
    )
}

export default CreateContact;