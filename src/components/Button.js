const Button = (props) => {
  return (
    <button  className='btn btn-primary' onClick={props.fetchUsersData}>Fetch Users</button>
  )
}

export default Button