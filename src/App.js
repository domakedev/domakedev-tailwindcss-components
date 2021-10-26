import "./App.css";

import Button from "./components/atoms/Button";

function App() {
  return (
    <div className="">
      <h1>Botones</h1>
      <Button type="primary" size="big">
        Primary
      </Button>

      <Button type="secondary" size="big">
        Secondary
      </Button>

      <Button type="alert" size="big">
        Alert
      </Button>

      <Button type="warning" size="big">
        Warning
      </Button>
    </div>
  );
}

export default App;
