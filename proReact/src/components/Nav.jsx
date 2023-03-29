import { NavLink } from 'react-router-dom'

const Nav = () => {
    return <nav class="nav">
        <ul>
            <li><NavLink to="home">home</NavLink></li>
            <li><NavLink to="personajes">personajes</NavLink></li>
            {/* <li><NavLink to="anadir">anadir</NavLink></li> */}
        </ul>
        <div></div>
    </nav>
    
}

export default Nav;