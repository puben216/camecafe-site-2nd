const path = require("path")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /free-solid-svg-icons/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: `/event/`,
    toPath: `/`,
    force: true,
  })
  createRedirect({
    fromPath: `/blog/`,
    toPath: `/blog/event/`,
    force: true,
  })

  return graphql(`
    {
      allMicrocmsBlog(sort: { fields: [date], order: ASC }) {
        edges {
          node {
            id
            blogId
            title
          }
        }
      }

      allMicrocmsInfomation(sort: { fields: [date], order: ASC }) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `).then(result => {
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
          breadcrumb: {
            crumbLabel: post.node.title,
          },
        },
      })
    })
    result.data.allMicrocmsInfomation.edges.forEach(edge => {
      createPage({
        path: `/event/${edge.node.id}`,
        component: path.resolve("./src/templates/event-detail.js"),
        context: {
          id: edge.node.id,
          breadcrumb: {
            crumbLabel: edge.node.title,
          },
        },
      })
    })
  })
}
