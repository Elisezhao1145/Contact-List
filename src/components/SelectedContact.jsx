import React, { useEffect, useState } from 'react';


export default function SelectedContact({ selectedContactId }) {
    const [contactDetails, setContactDetails] = useState(null);

 
    useEffect(() => {
       
        const fetchContactDetails = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedContactId}`);
                const data = await response.json();
                setContactDetails(data);
            } catch (error) {
                console.error("Failed to fetch contact details", error);
            }
        };

        if (selectedContactId) {
            fetchContactDetails();
        }
    }, [selectedContactId]); 

    if (!selectedContactId) return <div>No contact selected.</div>;
    if (!contactDetails) return <div>Loading...</div>;

    return (
        <div>
            <h2>Contact Details</h2>
            <p>Name: {contactDetails.name}</p>
            <p>Email: {contactDetails.email}</p>
            <p>Phone: {contactDetails.phone}</p>
        </div>
    );
}
