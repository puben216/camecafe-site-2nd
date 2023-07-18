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
              blogId
              title
            }
          }
        }

        allMicrocmsInfomation {
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

    const posts = result.data.allMicrocmsBlog.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: `/blog/${post.node.id}`,
        component: path.resolve("./src/templates/blog-detail.js"),
        context: {
          id: post.node.id,
          previous: previous,
          next: next,
        },
      })
    })
    result.data.allMicrocmsInfomation.edges.forEach(edge => {
      createPage({
        path: `/event/${edge.node.id}`,
        component: path.resolve("./src/templates/event-detail.js"),
        context: {
          id: edge.node.id,
        },
      })
    })
  })
}
