import Author from "./Author";
import Liked from "./Liked";

export default function Post(props) {
  return (
    <div class="post">
      <Author nick={props.nick} />

      <div class="conteudo">
        <img src={`assets/${props.img}.svg`} alt={props.alt} />
      </div>

      <Liked liked={props.liked} number={props.number} />
    </div>
  );
}
