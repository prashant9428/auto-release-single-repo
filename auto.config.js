module.exports = {
  "prereleaseBranches": ["development"],
  "changelog": {  
    "message": "string"
  },
  "shipit": {
    "prerelease": true,
    "message": "string",
    "noChangelog": false,
    "onlyGraduateWithReleaseLabel": true
  },
  "plugins": [
    "npm",
    "conventional-commits",
    "git-tag"
  ]
}