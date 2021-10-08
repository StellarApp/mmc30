import "./styles.css";
import AdminComponent from "./components/AdminComponent";
import PublicComponent from "./components/PublicComponent";

export default function App(props) {
  return <>{props.authorized ? <AdminComponent /> : <PublicComponent />}</>;
}
