import Story from "./Story";

export default function Stories() {
  let nicks = [
    "9gag",
    "meowed",
    "barked",
    "nathanwpylestrangeplanet",
    "wawawicomics",
    "respondeai",
    "filomoderna",
    "memeriagourmet",
  ];

  return (
    <div className="stories">
      {nicks.map((n, i) => (
        <Story nick={n} key={i} />
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
