import { useState } from "react";
import "./App.css";
import Form from "./components/form.component";

function App() {
  const [nombre, setNombre] = useState("Fernando")
  const normal="variable"
  const random= Math.floor(Math.random()*100)

  return (
    <>
    <h1>{nombre}</h1>

    <p>numero: {random}</p>
      <Form nombramos={nombre} setterName={setNombre} />
      {/* <Form>

      </Form> */}
    </>
  );
}

export default App;
