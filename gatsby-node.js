const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  return graphql(
    `
      {
        allMicrocmsBlog {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allMicrocmsBlog.edges.forEach(edge => {
      createPage({
        path: `/blog/${edge.node.id}`,
        component: path.resolve("./src/templates/blog-detail.js"),
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}
