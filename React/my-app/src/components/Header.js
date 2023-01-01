//Took from the extension ES7 React/Redux/GraphQL/React-Native snippets v1.9.3
//write rafce, impt
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps={
    title: 'Ciao Sono il titolo di default'
}

Header.propTypes={
    title: PropTypes.string.isRequired,

}
export default Header
