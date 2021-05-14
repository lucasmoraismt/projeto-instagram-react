import Author from "./Author";
import Liked from "./Liked";

export default function Post(props) {
  return (
    <div className="post">
      <Author nick={props.nick} />

      <div className="conteudo">
        <img src={`assets/${props.img}.svg`} alt={props.alt} />
      </div>

      <Liked liked={props.liked} number={props.number} />
    </div>
  );
}
