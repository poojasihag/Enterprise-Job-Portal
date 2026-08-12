// import axios from 'axios';
// import React, { useState } from 'react'

// const Demoform = () => {
//     const [name, setName] = useState<string>("");
//     const [email, setEmail] = useState<string>("");

//     let nameData = (e) => {
//         setName(e.target.value)
//     }
//     let emailData = (e) => {
//         setEmail(e.target.value)
//     }

//     const handleform = (): void => {
//         console.log(name)
//         console.log(email)
//         if(name.length < 5){
            
//             return
//         }
//         if(name.length < 5){

//             return
//         }
//         if(name.length < 5){

//             return
//         }
//         if(name.length < 5){

//             return
//         }

//         const data = {
//             password: name,
//             email: email
//         }
//         axios.post('http://localhost:5000/api/users/login', data)
//             .then((data: any) => {
//                 console.log(data.data)

//             }, (e) => {
//                 console.log(e)
//             })
//     }
//     return (
//         <div className='bg-gray-500' >
//             <input type="text" name='name' id="name" placeholder='name' value={name} onChange={nameData} />
//             <input type="email" name="email" id="email" placeholder='email' value={email} onChange={emailData} />
//             <button onClick={handleform}>handleform</button>
//         </div>
//     )
// }

// export default Demoform