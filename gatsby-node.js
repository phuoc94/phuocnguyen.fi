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

  //all poject tags to array 2d
  const ddtags = tags.data.allProjectsJson.edges
    .map(({ node }) => node)
    .map(({ tags }) => tags)

  // each tag 1x
  let ftag = []
  ddtags.forEach(b => {
    for (let i = 0; i < b.length; i++) {
      if (ftag.indexOf(b[i]) < 0) {
        ftag.push(b[i])
      }
    }
  })

  ftag.forEach(tag => {
    actions.createPage({
      path: "tags/" + tag,
      component: require.resolve("./src/components/templates/tags.js"),
      context: {
        slug: tag,
      },
    })
  })
}
