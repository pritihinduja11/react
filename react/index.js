
class UserStatus extends React.Component {
  state={
    status:true
  }
  signUp = (event) => {
      event.preventDefault();
      alert("You have signed up ");
  }
   signIn = (event) => {
      event.preventDefault();
      alert("You have Logged In  ");
  }
  render() {
    return (
      <div>
        <form >
          <p><b> Enter Your Email:</b></p>
          <input type="email"
            onChange={this.myChangeHandler}/>
          <p><b> Enter Password:</b></p>
           <input type="password"
            onChange={this.myChangeHandler}/>
          <button onClick={this.signUp}> Sign Up </button>
          <button onClick={this.signIn}> SignIn</button>
        </form>
      </div>
        )
  }
}

ReactDOM.render(
  <UserStatus />,
  document.getElementById('root')
);
