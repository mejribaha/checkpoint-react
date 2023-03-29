import "./App.css";
import MyForm from "./Form";
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="container">
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <h1 style={{ marginRight: "100px" , textAlign:"center"}}>Sign In</h1>
          <MyForm />
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
