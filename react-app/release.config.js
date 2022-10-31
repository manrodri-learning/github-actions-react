module.exports = {
	branches: "main",
	repositoryUrl: "https://github.com/manrodri-learning/github-actions-react",
	plugins: [
		"@semantic-release/commit-analyzer", "@semantic-release/release-notes-generator", 
		"@semantic-release/github"
		]
}