import { useState } from "react";
import "./App.css";
import Form from "./components/form.component";
import { Link, Outlet } from "react-router";

function App() {
  const [nombre, setNombre] = useState("Fernando");
  const normal = "variable";
  const random = Math.floor(Math.random() * 100);

  return (
    <>
      <nav>
        <Link to="/hijo">Hijo</Link>
        <p></p>
        <Link to="/hermano">Hermano</Link>
        <p></p>
        <Link to="/">padre</Link>
      </nav>
      <Outlet />

      {/* <Form>

      </Form> */}
    </>
  );
}

export default App;
