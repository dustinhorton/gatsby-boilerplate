exports.onCreatePage = async ({ actions, page }) => {
  const { createPage, deletePage } = actions

  return new Promise((resolve, reject) => {
    const oldPage = { ...page }

    if (/home/.test(page.path)) {
      page.path = '/'

      deletePage(oldPage)
      createPage(page)
    }

    resolve()
  })
}

exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()

    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    )

    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }

    actions.replaceWebpackConfig(config)
  }
}
