
import './App.css';
import {useState} from 'react';

function App() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email, password);
}

  return (
    <div className="Container">
     <h1 className='display-4 '>Learning React</h1>
     <br/>
     <div className='row'>
     <div className='col-md-6 offset-3'>
     <form onSubmit={handleSubmit}>
     <div className='mb-3'>
     <label className='form-label'>Enter Email</label>
     <input autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} 
     type="text" className='form-control'
     />
     <div className='form-text'>
     we'll never share your email with anyone else.
     </div>
     </div>
     
     <div className='mb-3'>
     <label className='form-label'>Enter Password</label>
     <input autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='form-control'/>
     </div>
     <button className='btn btn-primary'> Submit
     </button>
     </form>
     </div>
     </div>

     
    </div>
  );
}

export default App;
