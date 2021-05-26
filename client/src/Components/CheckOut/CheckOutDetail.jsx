import React, { useState } from "react";

export default function CheckOutDetail() {
    const [eMail, setEMail] = useState('')
    const [address, setAddress] = useState('')
    const [eMailError, setEMailError] = useState('EMail no puede ser vacío')
    const [addressError, setAddressError] = useState('Dirección no puede ser vacía')

    function ValidateEmail(mail)  {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) 
            return ''
        return "Dirección email inválida!"
    }

    function validate(newValue) {
        let errors = ''
        if (!newValue) 
            errors = 'EMail no puede ser vacío';
        else
            errors = ValidateEmail(newValue)
        return errors
    }

    const handleEMailChange = (e) => {
        setEMail(e.target.value);
        setEMailError(validate(e.target.value));
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
        setAddressError(validate(e.target.value));
    }

    const handleCancel = () => {

    }

    function showSubmitButton() {
        if (eMailError.length > 0)
            return <input type="submit" disabled/>
        return  <input type="submit" /> 
    }

    function handleSubmit() {

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="eMail"> 
                    <input 
                        name="eMail"
                        value={eMail}
                        type="text" 
                        onChange={handleEMailChange}
                        /> eMail
                </label>
                <label htmlFor="address"> 
                    <input 
                        name="address"
                        value={address}
                        type="text" 
                        onChange={handleAddressChange}
                        /> Dirección
                </label>
                {showSubmitButton()}
                <button onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    );
}
