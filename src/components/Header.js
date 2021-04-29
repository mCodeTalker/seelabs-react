const Header = ({title, subtitle}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    )
}
Header.defaultProps = {
    title: 'SEELABS',
    subtitle: 'School of Electrical Engineering Laboratories'
}
export default Header
