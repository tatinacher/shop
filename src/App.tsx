import { Container } from "@mui/material";
import { Header } from "./ui/header";

const menu = [
  {
    name: "На главную",
    id: "main",
  },
  {
    name: "Проекты",
    id: "projects",
  },
  {
    name: "Связаться со мной",
    id: "connect",
  },
];

function App() {
  return (
    <>
      <Header menu={menu} themeButton={<div>123</div>} />
      <Container maxWidth="sm">{/* <Footer /> */}</Container>
    </>
  );
}

export default App;
