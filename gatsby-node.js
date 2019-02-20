exports.onCreatePage = async({ actions, page }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    if (/home/.test(page.path)) {
      page.path = '/'
    }

    createPage(page)

    resolve()
  })
}