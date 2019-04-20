exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-card-flip/,
            use: loaders.null()
          },
          {
            test: /firebase/,
            use: loaders.null(),
          },
          {
            test: /react-firebaseui/,
            use: loaders.null()
          }
        ],
      },
    })
  }
}
