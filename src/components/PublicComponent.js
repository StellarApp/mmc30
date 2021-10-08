import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const projects = ["e-commerce", "connect creater", "MMC30"];
const projectObj = projects.map((project, i) => ({ id: i, title: project }));

export default function PublicComponent() {
  return (
    <div className="App">
      <Header me="Stella" />
      <Main adj="Amazing" projects={projectObj} login="stellarapp" />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}
