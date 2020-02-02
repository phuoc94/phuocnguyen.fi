import React from "react"
/*import { Link } from "gatsby"*/

import Layout from "../components/layouts/layout"
import SEO from "../components/querys/seo"
import Jumpo from "../components/layouts/jumpo"

const title = "Home"
const IndexPage = () => (
  <Layout>
    <Jumpo pageTitle={title} />
    <SEO title={title} />
    <h1>Hi from {title} page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quia nulla
      doloribus at beatae ratione suscipit labore. At fugit totam esse
      perspiciatis eveniet necessitatibus veritatis neque tempora ex nisi? Ipsum
      ad, esse soluta at voluptatum facilis numquam, dicta voluptas quasi eos,
      magni cupiditate consectetur! Recusandae facilis cumque assumenda labore
      dolore. A debitis sapiente totam perferendis, nostrum dicta nihil! Dolorum
      eaque, inventore, perferendis facere eius hic consectetur ullam possimus
      rerum non explicabo placeat enim repellat provident ipsum deserunt animi,
      libero illum quae sed. Aliquid perspiciatis nam consectetur praesentium
      excepturi ab repellat animi sequi mollitia adipisci saepe at pariatur quod
      dolorem nulla minima, eligendi, enim voluptatem eaque magni officia,
      numquam tenetur voluptate. Quibusdam, ut incidunt. Dolores dolor sapiente
      dolorum pariatur ea culpa porro ab explicabo accusamus voluptate eveniet
      ipsam rerum eaque quae repellendus, doloribus rem deserunt similique totam
      sunt vero! Iusto sapiente et recusandae deleniti voluptates officia, culpa
      quas quae maiores at odit quasi nulla accusantium, harum laudantium alias
      vitae aspernatur voluptate nihil dignissimos nisi. Nam deserunt sit
      aperiam iusto vitae quidem eveniet necessitatibus, perferendis aspernatur
      molestiae repellat officiis odio consequuntur ipsa maxime ab animi aliquam
      neque sed nihil cumque aliquid quia dignissimos! Sapiente asperiores
      corporis laudantium, maxime labore culpa iste aut!
    </p>
  </Layout>
)

export default IndexPage
