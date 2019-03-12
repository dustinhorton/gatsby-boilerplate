exports.onCreatePage = async({ actions, page }) => {
  const { createPage } = actions

  // this this infinite loops with `gatsby-mdx` included
  return new Promise((resolve, reject) => {
    console.log('page', page)

    // adding this stops the infinite loop,
    // but then it still sits at `createPagesStatefully`
    //if (page.component.includes('.mdx')) return

    if (/home/.test(page.path)) {
      page.path = '/'
    }

    createPage(page)

    resolve()
  })
}