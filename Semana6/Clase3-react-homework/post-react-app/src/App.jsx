import { useState } from "react";
import { Card } from "./components/Card";
import { ListPosts } from "./components/ListPosts";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Filters } from "./components/Filters";
import { Articles, NavList, Tags } from "./InfoBlog";


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
  const InfoNav = NavList.map((navItem) => (<li>
    <a>{navItem}</a>
  </li>));
  const TagItem = Tags.map((tag) => (
    <div class="filter-pill">
      <div class="filter-label">{tag}</div>
      <button class="filter-action"></button>
    </div>
  ));

  return (
    <div className="page">
    <Header>BLOG</Header>
    <Nav>{InfoNav}</Nav>
    <Filters>{TagItem}</Filters>
      <ListPosts>{listArticles}</ListPosts>
    </div>
  );
}

export default App;
