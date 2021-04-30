import Post from "./Post";

export default function Posts() {
  let posts = [
    {
      nick: "meowed",
      img: "img/gato-telefone",
      liked: "respondeai",
      number: "101.523",
    },
    {
      nick: "barked",
      img: "img/dog",
      liked: "respondeai",
      number: "101.523",
    }//,
    // {
    //   nick: "meowed",
    //   img: "img/gato-telefone",
    //   liked: "adorable_animals",
    //   number: "99.159",
    // },
  ];

  return (
    <div class="posts">

      {posts.map((p) => (
        <Post nick={p.nick} img={p.img} liked={p.liked} number={p.number} />
      ))}

    </div>
  );
}
