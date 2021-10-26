import "./App.css";

import Button from "./components/atoms/Button";
import Tittle from "./components/atoms/Tittle";
import Paragraph from "./components/atoms/Paragraph";
import Input from "./components/atoms/Input";
import Logo from "./components/atoms/Logo";
import ProfilePhoto from "./components/atoms/ProfilePhoto";

function App() {
  return (
    <div className="">
      <Tittle>Botones</Tittle>
      <Paragraph>Botones bien chidos!</Paragraph>
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

      <Tittle>Input</Tittle>
      <Input placeholder="Aqui un textin"></Input>

      <Tittle>Logo</Tittle>
      <Paragraph>
        La imagen que ves es solo por defecto, hay mas configuraciones.
      </Paragraph>
      <div className="flex justify-center items-center">
      <Logo></Logo>
      </div>

      <Tittle>Foto de perfil</Tittle>
      <Paragraph>
        La imagen que ves es solo por defecto, hay mas configuraciones.
      </Paragraph>
      <div className="flex justify-center items-center">
      <ProfilePhoto type="circular" size="small" ></ProfilePhoto>
      <ProfilePhoto type="circular" size="medium" ></ProfilePhoto>
      <ProfilePhoto type="circular" size="big" ></ProfilePhoto>
      <ProfilePhoto type="cuadrado" size="small" ></ProfilePhoto>
      <ProfilePhoto type="cuadrado" size="medium" ></ProfilePhoto>
      <ProfilePhoto type="cuadrado" size="big" ></ProfilePhoto>
      </div>

    </div>
  );
}

export default App;
