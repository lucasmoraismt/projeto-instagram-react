export default function Author(props) {
  return (
    <div className="topo">
      <div className="usuario">
        <img src={`assets/img/${props.nick}.svg`} alt={props.nick} />
        {props.nick}
      </div>
      <div className="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}
