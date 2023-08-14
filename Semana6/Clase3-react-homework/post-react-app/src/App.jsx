import { useState } from "react";
import { Card } from "./Card";
import { ListPosts } from "./listPosts";
import { Articles } from "./InfoBlog";

function App() {
  const listArticles = Articles.map((article) => (
    <Card
      title={article.title}
      urlImage={article.urlImage}
      category={article.category}
    >
      {article.description}
    </Card>
  ));

  return <ListPosts>{listArticles}</ListPosts>;
}

export default App;