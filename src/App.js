import { useState } from 'react';
import './App.css';
import './appbtn.css';
import './contat.css';
import emailjs from '@emailjs/browser'

function App() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

function sendEmail(e){
  e.preventDefault();

  if(email === '' || name === '' || message === '' || phone === ''){
    alert("Esqueceu de preencher :(")
    return;
  }

  const templateParams = {
    email: email,
    from_name:  name,
    message: message,
    phone: phone,
    to_email: email // Adiciona o e-mail como destinatário
  }

  emailjs.send("service_ixo33os","template_ce4exdg",templateParams,"gaJx8GkIMZphcCTXS")
  .then((response) => {
      console.log("EMAIL ENVIADO")
      setEmail('')
      setName('')
      setPhone('')
      setMessage('')
    })
}
  return (
    
    <div className="container">
     
     

      <form className="form" onSubmit={sendEmail}>
      <button class="cti">
      <div class="CTI">
      FAÇA SEU PEDIDO LOGO ABAIXO!
      </div>
    </button>
        <input 
          className="input"
          type="text"
          placeholder="Seu nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        
        <input 
          className="input"
          type="text"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <input 
          className="input"
          type="phone"
          placeholder="Seu telefone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        

        <input 
          className="input"
          placeholder="Nome do Perfume"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

<button class="button">Enviar :)
</button>

      </form>

      

    </div>
    
  );


}

const instagramBtn = document.getElementById('instagramBtn');

// Adiciona um evento de clique ao botão
instagramBtn.addEventListener('click', function() {
  // Redireciona para o perfil do Instagram
  window.location.href = 'https://www.instagram.com/cl_cheirosdeamor/';
});






export default App;
