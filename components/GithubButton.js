const GithubButton = ({props}) => (
  <iframe
    className='mt-4'
    src="https://ghbtns.com/github-btn.html?user=tinkerun&repo=tinkerun&type=star&count=true"
    frameBorder="0"
    scrolling="0"
    width="120"
    height="20"
    {...props}
  />
)

export default GithubButton
