module.exports = {
  hooks: {
    readPackage(pkg) {
      // Remove conflicting @tailwindcss/postcss v4 dependency
      if (pkg.devDependencies && pkg.devDependencies['@tailwindcss/postcss']) {
        delete pkg.devDependencies['@tailwindcss/postcss'];
      }
      if (pkg.dependencies && pkg.dependencies['@tailwindcss/postcss']) {
        delete pkg.dependencies['@tailwindcss/postcss'];
      }
      return pkg;
    }
  }
};
