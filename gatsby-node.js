/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
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

  if (result.error) {
    reporter.panic("There was a problem loading your projects!")
    return
  }

  const projects = result.data.allProjectsJson.edges.map(({ node }) => node)

  projects.forEach(project => {
    actions.createPage({
      path: project.slug,
      component: require.resolve("./src/components/templates/project.js"),
      context: {
        slug: project.slug,
      },
    })
  })
}
