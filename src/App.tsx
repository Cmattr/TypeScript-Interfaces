import './App.css';
import UserInfo from './components/User';
import Card from './components/Card'; // Adjust the path as needed



function App() {
  const user = {
    name: "Matt",
    email: "Example@email.com",
    age: 30
  };

  return (
    <div>
     <Card>
        <h1>Hello Everybody this is my User Info</h1>
        <p>this information is being passed by a child component</p>
         <UserInfo {...user} />  
     </Card>
    
    
    </div>
  );
}

export default App;