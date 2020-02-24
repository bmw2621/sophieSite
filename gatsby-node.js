exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    {
      allNodeArticle {
        nodes {
          id
          title
          created(formatString: "DD MMMM YY")
        }
      }
    }
  `)

  data.allNodeArticle.nodes.forEach(article => {
    const slug = article.title.split(" ").join("_") + "_" + article.created.split(" ").join("-")
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/blogArticle.js`),
      context: { id : article.id },
    })
  })
}
