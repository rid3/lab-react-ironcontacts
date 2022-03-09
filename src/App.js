import "./App.css";
import React from "react";
import allContacts from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  const handleRandomContact = () => {

    //agarrando un random contact con el math random el numero de index(length)
    const randomPos = Math.floor ( Math.random() * allContacts.length)
    const randomContact = allContacts[randomPos]

//ya cualquier cosa esto 
//     const newArray = [...contacts]
//  for (let i = 0; i < allContacts.length; i++) {
//    if (randomContact[i].id !== newArray[i].id) {
//      newArray.push(randomContact)

//    }
//  }

    //INTENTANDO QUE NO SE REPITAN (¿filter?)
    // const newArray = ([ randomContact, ...contacts ])

    // for (let i = 0; i < newArray.length; i++) {
    //   if (newArray[i].id === newArray[i + 1]) {
    //     newArray.pull

    //   }
    // }
    // let probandoAlgo = [ randomContact, ...contacts]
    // const newArr = [...contacts]

    // if (newArr.indexOf (randomContact.id) ===  1) {
    //   newArr.push(contacts.id)
    // }

    // if (randomContact.indexOf (newArr.id) === -1) {
    //   newArr.push(newArr.id)
    // }

    // setContacts (probandoAlgo)

    //agregarlo al state con nuevo array, para no modificarla (porque clarísimo que no tenemos que hacerlo) uso spread  
    setContacts ([ randomContact, ...contacts] )
    

  }
    

  const handleSortByName = () => {

    //nueva arr para hacer sort 
    const contactsCopy = [...contacts]
    contactsCopy.sort ((cont1, cont2) => cont1.name > cont2.name ? 1 : -1)

    setContacts(contactsCopy)
    }

    const handleSortPopularity = () => {
      const contactsCopy = [...contacts]
      contactsCopy.sort ( (cont1 , cont2) => cont1.popularity * 10000 > cont2.popularity * 10000? -1 : 1)
      console.log("clikando")

      setContacts(contactsCopy)
    }

    const handleDeleteContacts = (indexContact) => {
      const contactsCopy = [...contacts]
      contactsCopy.splice(indexContact,1)
      
      setContacts (contactsCopy)

    }


  return (


    <div className="contact-card">

    <h1>IRON CONTACTS</h1>

<button onClick={ handleRandomContact } >Add Random Contact</button>
<button onClick={ handleSortPopularity } > Sort by popularity</button>
<button onClick={ handleSortByName }  > Sort by name</button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((eachContact, index) => {
            return (
              <tr key={eachContact.id}>
                <td>
                  <img width="60px" src={eachContact.pictureUrl} alt="carita de contacto"/>
                </td>
                <td> {eachContact.name}</td>
                <td> {eachContact.popularity}</td>
                <td> {eachContact.wonOscar === true ?  "🏆" :"" } </td>
                <td> {eachContact.wonEmmy === true ? "🏆":"" } </td>
                <button onClick={ () => handleDeleteContacts(index) } > Delete</button>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
