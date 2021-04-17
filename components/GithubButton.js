import PropTypes from 'prop-types'

const GithubButton = ({user, repo, ...rest}) => (
  <iframe
    src={`https://ghbtns.com/github-btn.html?user=${user}&repo=${repo}&type=star&count=true`}
    frameBorder="0"
    scrolling="0"
    width="120"
    height="20"
    {...rest}
  />
)

GithubButton.propTypes = {
  user: PropTypes.string,
  repo: PropTypes.string,
}

GithubButton.defaultProps = {
  user: 'tinkerun',
  repo: 'tinkerun',
}

export default GithubButton
