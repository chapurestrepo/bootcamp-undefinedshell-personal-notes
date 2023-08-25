export default async function handler(req, res) {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (data) => data.json()
  );

  const mappingPosts = posts.map((post) => ({
    cover: "url.jpg",
    authorId: post.userId,
    id: post.id,
    title: post.title,
    body: post.body,
  }));

  res.status(200).json(mappingPosts);
}
