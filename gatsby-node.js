/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const project = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  const tags = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            tags
          }
        }
      }
    }
  `)

  if (project.error) {
    reporter.panic("There was a problem loading your projects!")
    return
  }
  if (tags.error) {
    reporter.panic("There was a problem loading your tags!")
    return
  }

  const sprojects = project.data.allProjectsJson.edges.map(({ node }) => node)

  sprojects.forEach(project => {
    actions.createPage({
      path: "project/" + project.slug,
      component: require.resolve("./src/components/templates/project.js"),
      context: {
        slug: project.slug,
      },
    })
  })

  const stags = tags.data.allProjectsJson.edges.map(({ node }) => node)

  stags.forEach(tag => {
    actions.createPage({
      path: "tags/" + tag.tags,
      component: require.resolve("./src/components/templates/tags.js"),
      context: {
        slug: tag.tags,
      },
    })
  })
}
