import { Card } from "@/components/Card";
import { ListPosts } from "@/components/ListPosts";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { Filters } from "@/components/Filters";
import { Articles, NavList, Tags } from "@/InfoBlog";

import stylesFilter from "@/components/Filters.module.css";
import { useEffect, useState } from "react";
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

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchArticles() {
      const articlesPosts = await fetch('api/posts').then((data) => data.json());

      setArticles(articlesPosts)
    }

    fetchArticles();
  }, []);

  const articlesMap = articles.map((post) => (
    <div>
      <h2>{post.title}</h2>

    </div>
  ));

  

  return (
    <div className="page">
      <Header>BLOG</Header>
      <Nav>{InfoNav}</Nav>
      <Filters>{TagItem}</Filters>
      <ListPosts>{listArticles}</ListPosts>


{articlesMap}


    </div>
  );
}

export default Home;
