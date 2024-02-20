import './App.css';
import ContactList from './components/ContactList.jsx';
import { useState } from 'react';
import SelectedContact from "./components/SelectedContact";



export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId === null? 
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}  />
      : 
        <ContactList setSelectedContactId={setSelectedContactId} />
      }
    </>
  );
}