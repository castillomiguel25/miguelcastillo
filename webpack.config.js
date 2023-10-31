module.exports = {
    // Otras configuraciones de webpack...
  
    resolve: {
        alias: {
            path: require.resolve("path-browserify")
        },
      fallback: {
        "util": require.resolve("util"),
        "path": require.resolve("path-browserify")
      }
    }
  };
  