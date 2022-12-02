import { useState, useEffect } from 'react';
import app from '../Firebase';
import {getDatabase, ref, push, onValue} from 'firebase/database'

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
        const database = getDatabase(app);
        const dbRef = ref(database, "/contactInfo");
        push(dbRef, inputData);
        setNameInput("");
        setNumberInput("");
        setEmailInput("");
    }    
    
    useEffect (() => {
        const database = getDatabase(app);
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
                    <div className="nameFlex">
                        <label htmlFor="name">Full Name:</label>
                        <input 
                        type="text" 
                        onChange={handleNameInputChange}
                        />
                    </div> 
                    <div className="phoneFlex">
                        <label className="number">Phone Number</label>
                        <input 
                        type="text" 
                        onChange={handleNumberInputChange}
                        />
                    </div>
                    <div className="emailFlex">
                        <label htmlFor="email">Email Address</label>
                        <input 
                        type="text"
                        onChange={handleEmailInputChange}
                        />
                    </div>
                    <button>Create Contact</button>
                </form>
             </div>
        </section>
    )
}

export default CreateContact;