import { useEffect, useState } from "react";
import puffin from "../../public/img/puffin.jpg";

export default function Main(props) {
  const [data, setData] = useState(null);
  const url = "https://api.github.com/users/";

  useEffect(() => {
    fetch(`${url}/${props.login}`)
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }

  return (
    <section>
      <p>{props.adj} projects I did.</p>
      <img src={puffin} height={200} alt="Go puffin" />
      <ul style={{ textAlign: "left" }}>
        {props.projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </section>
  );
}
