import { Card } from "@/components/Card";
import { ListPosts } from "@/components/ListPosts";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { Filters } from "@/components/Filters";
import { Articles, NavList, Tags } from "@/InfoBlog";

import stylesFilter from "@/components/Filters.module.css";
import { useState } from "react";
import classNames from "classnames";

function Home() {
  const listArticles = Articles.map((article) => (
    <Card
      title={article.title}
      urlImage={article.urlImage}
      category={article.category}
    >
      {article.description}
    </Card>
  ));

  const InfoNav = NavList.map((navItem) => (
    <li>
      <a>{navItem}</a>
    </li>
  ));

  const TagItem = Tags.map((tag, activeTag) => {

    return (
      <div className={stylesFilter["filter-pill"]} onClick={(event)=>{
        event.preventDefault();
        // onClick(tag)
    }}>
        <div className={stylesFilter["filter-label"]}>{tag}</div>
        <button className={stylesFilter["filter-action"]}></button>
      </div>
    );
  });

  return (
    <div className="page">
      <Header>BLOG</Header>
      <Nav>{InfoNav}</Nav>
      <Filters>{TagItem}</Filters>
      <ListPosts>{listArticles}</ListPosts>
    </div>
  );
}

export default Home;
