import Suggestion from "./Suggestion";

export default function Suggestions() {
  let users = [
    { nick: "bad.vibes.memes", status: "Segue você" },
    { nick: "chibirdart", status: "Segue você" },
    { nick: "razoesparaacreditar", status: "Novo no Instagram" },
    { nick: "adorable_animals", status: "Segue você" },
    { nick: "smallcutecats", status: "Segue você" },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {users.map((s) => (
        <Suggestion nick={s.nick} status={s.status} />
      ))}
    </div>
  );
}
