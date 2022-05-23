module.exports = {
    "branches": ['+([0-9])?(.{+([0-9]),x}).x', 'development', {name: 'main', prerelease: true}],
    "repositoryUrl": "https://github.com/prashant9428/auto-release-single-repo",
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github",
        ["@semantic-release/npm", {
          "npmPublish": false,
        }],
        [
            "@semantic-release/changelog",
            {
              "changelogFile": "docs/CHANGELOG.md"
            }
          ],
          [
            "@semantic-release/git",
            {
              "assets": ["package.json","docs/CHANGELOG.md"]
            }
          ]]

}