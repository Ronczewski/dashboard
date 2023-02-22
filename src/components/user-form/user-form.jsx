import { useState } from "react";
import './user-form.css'

const UserForm = (props) => {
   const [formData, setFormData] = useState({
      name: '',
      surname: '',
      mail: '',
      phoneNumber: 0,
      lastLogin: '',
      street: '',
      number: '',
      city: '',
   })


   const handleChange = (e) => {
      console.log(e)
      const { value, id } = e.target
      //debugger;
      setFormData({ ...formData, [id]: value })
   }

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.name.trim().length < 1 || formData.surname.trim().length < 1 || formData.mail.trim().length < 1 || formData.phoneNumber.length < 1 || formData.lastLogin.length < 1) {
         return
      }

      const dataToSend = {
         name: formData.name,
         surname: formData.surname,
         mail: formData.mail,
         phoneNumber: formData.phoneNumber,
         lastLogin: formData.lastLogin,
         address: {
               street: formData.street,
               number: formData.number,
               city: formData.city,
         }
      }

      await fetch('http://localhost:3003/userList', {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(dataToSend)
      })

      props.refreshData()

      setFormData({
         name: '',
         surname: '',
         mail: '',
         phoneNumber: '',
         lastLogin: '',
         street: '',
         number: '',
         city: '',
      })

   }

   return (
      <form onSubmit={handleSubmit}>
      
         <div className="label">
            <label htmlFor="name">name:</label><br />
            <input
               className="inputs"
               id="name"
               value={formData.name}
               // onChange={e => setFormData(e.target.value)}
               onChange={handleChange}
               type="text" />
         </div>
         <div className="label">
            <label htmlFor="surname">surname:</label><br />
            <input className="inputs"
               id="surname"
               value={formData.surname}
               // onChange={e => setFormData(e.target.value)}
               onChange={handleChange}
               type="text" />
         </div>
         <div className="label">
            <label htmlFor="mail">mail:</label><br />
            <input
               className="inputs"
               id="mail"
               value={formData.mail}
               // onChange={e => setFormData(e.target.value)}
               onChange={handleChange}
               type="text" />
         </div>
         <div className="label">
            <label htmlFor="phoneNumber">number:</label><br />
            <input
               className="inputs"
               id="phoneNumber"
               value={formData.phoneNumber}
               // onChange={e => setFormData(e.target.value)}
               onChange={handleChange}
               type="number" />
         </div>
         <div className="label">
            <label htmlFor="lastLogin">date:</label><br />
            <input
               className="inputs"
               id="lastLogin"
               value={formData.lastLogin}
               // onChange={e => setFormData(e.target.value)}
               onChange={handleChange}
               type="data" />
         </div>
         <div className="label">
            <label htmlFor="city">city:</label><br />
            <input
               className="inputs"
               id="city"
               value={formData.city}
               // onChange={e => setAddress(e.target.value)} 
               onChange={handleChange}
               // value={address.city} 
               type="text" />
         </div>
         <div className="label">
            <label htmlFor="street">street:</label><br />
            <input
               className="inputs"
               id="street"
               value={formData.street}
               // onChange={e => setAddress(e.target.value)} 
               onChange={handleChange}
               // value={address.street} 
               type="text" />
         </div>
         <div className="label">
            <label htmlFor="number">number:</label><br />
            <input
               className="inputs"
               id="number"
               value={formData.number}
               // onChange={e => setAddress(e.target.value)} 
               onChange={handleChange}
               // value={address.number}
               type="text" />
         </div>
         <button
            style={{ width: '600px', margin: '20px 10px 30px 10px' }}
            className="button"
            type="submit">Wyślij:
         </button>
         
      </form>
   )
}

export default UserForm;