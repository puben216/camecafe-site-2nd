const indexName = `Blogs`

const blogQuery = `{
  blogs: allMicrocmsBlog {
    nodes {
      id
      title
      content
      subtitle
      date
    }
  }
}`

function blogToAlgoliaRecord({ id, title, content, subtitle, date }) {
  return {
    objectID: id,
    title,
    content,
    subtitle,
    date,
  }
}

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.blogs.nodes.map(blogToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`content:20`] },
  },
]

module.exports = queries
