import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Register() {

  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [possword, setPossword] = useState("")
  const [sendData, setSendData] = useState(false)
  const navigate = useNavigate();

  const RegisterApi = async () => {

    await fetch(`https://localhost:7147/api/Auth/Register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        first_name: fristName,
        last_name: lastName,
        password: possword,
      })
    }).then(x => x.json()).then(x => console.log(x))
    setSendData(!sendData)
console.log(sendData);
  }



  useEffect(() => {
    // sendData değiştiğinde veya bileşen monte edildiğinde çalışacak kodlar
    // Örnek bir yönlendirme işlemi
    if (sendData) {
      navigate('/');
    }
  }, [sendData, navigate]);
  
  return (
<>
<h1>Register</h1>
</>

  
  )
}

export default Register
