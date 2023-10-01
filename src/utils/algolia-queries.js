const indexName = `Blogs`

const blogQuery = `{
  blogs: allMicrocmsBlog {
    nodes {
      id
      title
      content
      subtitle
      date
      internal {
        # querying internal.contentDigest is required
        contentDigest
        type
        owner
      }
    }
  }
}`

function baseFormatDate(dateString, format) {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat("ja-JP", format)
  return formatter.format(date)
}

function formatYmdw(dateString) {
  return baseFormatDate(dateString, {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "narrow",
  })
}

function blogToAlgoliaRecord({ id, title, content, subtitle, date, internal }) {
  return {
    objectID: id,
    title,
    content: removeHTMLTags(content),
    subtitle,
    date: formatYmdw(date),
    internal,
  }
}

function removeHTMLTags(input) {
  return input.replace(/<\/?[^>]+(>|$)/g, "")
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
