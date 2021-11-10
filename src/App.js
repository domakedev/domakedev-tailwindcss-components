import "./App.css";

import Button from "./components/atoms/Button";
import Tittle from "./components/atoms/Tittle";
import Paragraph from "./components/atoms/Paragraph";
import Input from "./components/atoms/Input";
import Logo from "./components/atoms/Logo";
import ProfilePhoto from "./components/atoms/ProfilePhoto";
import ButtonIcon from "./components/atoms/ButtonIcon";
import Searcher from "./components/atoms/Searcher";
import Card from "./components/atoms/Card";

//Iconos
import CardIcon from "./components/atoms/address-card-solid.svg";
//import Lupa from "./components/atoms/lupa.svg";
import FacebookIcon from "./components/atoms/facebook-square.svg";

function App() {
  return (
    <div className="">
      <div className="w-4/5 mx-auto">
        <Searcher placeholder="Busca aqui"></Searcher>
      </div>
      <Tittle>Botones</Tittle>
      <div className="flex justify-around items-center flex-wrap space-x-2 space-y-2">
        <Button type="primary" size="big">
          Primary
        </Button>

        <Button type="primary" size="small">
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

        <ButtonIcon size="small">BotonIcon</ButtonIcon>

        <ButtonIcon size="big" icon={CardIcon}>
          Datos Personales
        </ButtonIcon>

        <ButtonIcon size="big" icon={CardIcon}></ButtonIcon>
      </div>

      <Tittle>Input</Tittle>
      <div className="flex flex-col items-center space-y-5">
        <Input
          placeholder="Con icon predeterminado"
          icon={FacebookIcon}
        ></Input>
        <Input placeholder="Sin icon"></Input>
      </div>

      <Tittle>Logo</Tittle>

      <Paragraph align="text-left">
        La imagen que ves es solo por defecto, hay mas configuraciones.
      </Paragraph>
      <Paragraph align="text-center">
        La imagen que ves es solo por defecto, hay mas configuraciones.
      </Paragraph>
      <Paragraph align="text-right">
        La imagen que ves es solo por defecto, hay mas configuraciones.
      </Paragraph>
      <div className="flex justify-center items-center">
        <Logo></Logo>
      </div>

      <Tittle>Foto de perfil</Tittle>
      <div className="flex flex-col lg:flex-row items-center justify-around space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <ProfilePhoto
            type="circular"
            size="small"
            borderColor="border-gray-700"
          ></ProfilePhoto>
          <ProfilePhoto
            type="circular"
            size="medium"
            borderColor="border-blue-400"
          ></ProfilePhoto>
          <ProfilePhoto
            type="circular"
            size="big"
            borderColor="border-red-400"
          ></ProfilePhoto>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <ProfilePhoto
            type="cuadrado"
            size="small"
            borderColor="border-gray-700"
          ></ProfilePhoto>
          <ProfilePhoto
            type="cuadrado"
            size="medium"
            borderColor="border-blue-400"
          ></ProfilePhoto>
          <ProfilePhoto
            type="cuadrado"
            size="big"
            borderColor="border-red-400"
          ></ProfilePhoto>
        </div>
      </div>

      <Tittle>Card</Tittle>
      <Card type="column">
          <Card.Logo className=""></Card.Logo>
          <Card.Body align="text-center" className="bg-gray-400">
            Hijioo
          </Card.Body>
      </Card>
    </div>
  );
}

export default App;
