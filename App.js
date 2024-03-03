import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const users=[
    {name:"imtisal", email:"imti@gmail.com",contct:"1111"},
    {name:"Ali", email:"Ali@gmail.com",contct:"2222"},
    {name:"AbASS", email:"ABASS@gmail.com",contct:"3333"},
    {name:"PETRE", email:"PETRE@gmail.com",contct:"4444"},
  ]
  return (
    <div className="App">
      
      <h1>Reuse component</h1>

      {
        users.map((item,i)=>
        <h1>
        <User data={item} />
        </h1>
        )
      }

    </div>
  );
}

export default App;
