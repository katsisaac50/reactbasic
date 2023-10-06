
import './App.css';
import {useState, useEffect} from 'react';
import Button from './components/Button';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState('');
  const [loading, setLoading] = useState(true);

  console.log(posts)

  useEffect(() => {
    fetchPostsData();
    // fetchUsersData();
  })

  const fetchUsersData = () => {
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {setUsers(data);});
  }

  const fetchPostsData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'GET',
    }).then(res => res.json()).then(data => {setPosts(data); setLoading(false);});
  }
  if(loading){
    return <h1>Loading...</h1>
  } 
  return(
    <div className="Container">
    {users.map((user) => (
      <div className='col-md-6 offset-3' key={user.id}>
      <h1 className='display-4 '>{user.name}</h1>
      </div>
      
    ))}
    <div className='col-md-6 offset-3'>
    <h1 className='display-4 '>{posts.title}</h1>
    </div>
    <Button fetchUsersData={fetchUsersData}/>
    </div>
  )
}

export default App

// function App() {
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(email, password);
// }

//   return (
//     <div className="Container">
//      <h1 className='display-4 '>Learning React</h1>
//      <br/>
//      <div className='row'>
//      <div className='col-md-6 offset-3'>
//      <form onSubmit={handleSubmit}>
//      <div className='mb-3'>
//      <label className='form-label'>Enter Email</label>
//      <input autoComplete="email" value={em ail} onChange={(e) => setEmail(e.target.value)} 
//      type="text" className='form-control'
//      />
//      <div className='form-text'>
//      we'll never share your email with anyone else.
//      </div>
//      </div>
     
//      <div className='mb-3'>
//      <label className='form-label'>Enter Password</label>
//      <input autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className='form-control'/>
//      </div>
//      <button className='btn btn-primary'> Submit
//      </button>
//      </form>
//      </div>
//      </div>

     
//     </div>
//   );
// }

// export default App;
