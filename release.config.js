module.exports = {
  "branches": ['main', { name: 'development', prerelease: 'beta' }],
  "repositoryUrl": "https://github.com/prashant9428/auto-release-single-repo",
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    ["@semantic-release/npm", {
      "pkgRoot": "server",
      "npmPublish": false,
    }],
    [
      "@semantic-release/changelog",
      {
        "changelogFile": "docs/CHANGELOG.md"
      }
    ]]

}