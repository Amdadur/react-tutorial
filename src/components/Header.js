import PropTypes from 'prop-types'



//Header accepts props names as title
const Header = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <button></button>
        </div>
    )
}

Header.defaultProps ={
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
} 

//css as variable - must be linked as style={headingStyle}
//const headingStyle = {
//  color: 'red',
//  backgroundColor: 'black'
//} 

export default Header

//take in props
//get title attribute from props
