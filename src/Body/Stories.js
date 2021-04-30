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
    <div class="stories">
      {nicks.map((n) => (
        <Story nick={n} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
