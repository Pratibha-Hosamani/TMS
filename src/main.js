

function main() {
  return (
    <div className='form'>
      <p>Create an account</p>
      <img src={ravatar} className="ravatar" alt="ravatar"/>
      <p> sign up to continue</p> 
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder="id" required/><br/><br/>
       <input type="text" placeholder="username" required/><br/><br/>
       <input type="email" placeholder="email" required/><br/><br/>
       <input type="password" placeholder="password" required/><br/><br/>
       <input type="password" placeholder="confirm password" required/><br/><br/>
       <input type="text" placeholder="branch" required/><br/><br/>
      <button>Submit</button>
      </form>
       </div>
  )
}

export default main