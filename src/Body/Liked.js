export default function Liked(props) {
  return (
    <div className="fundo">
      <div className="acoes">
        <div>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div>
          <ion-icon name="bookmark-outline"></ion-icon>
        </div>
      </div>

      <div className="curtidas">
        <img src={`assets/img/${props.liked}.svg`} alt={props.liked} />
        <div className="texto">
          Curtido por <strong>{props.liked}</strong> e{" "}
          <strong>outras {props.number} pessoas</strong>
        </div>
      </div>
    </div>
  );
}
