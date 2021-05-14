import Post from "./Post";

export default function Posts() {
  let posts = [
    {
      nick: "meowed",
      img: "img/gato-telefone",
      alt: "gato telefone",
      liked: "adorable_animals",
      number: "101.523",
    },
    {
      nick: "barked",
      img: "img/dog",
      alt: "dog",
      liked: "respondeai",
      number: "99.682",
    },
  ];

  return (
    <div className="posts">
      {posts.map((p, i) => (
        <Post
          nick={p.nick}
          img={p.img}
          liked={p.liked}
          number={p.number}
          key={i}
        />
      ))}
    </div>
  );
}
