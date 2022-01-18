import { Link } from 'react-router-dom'
import { ItemMenu } from './style';
const Menu = () => (
    <nav>

        <Link to="/">
            <ItemMenu>
                Home
            </ItemMenu>
        </Link>

        <Link to="/count">
            <ItemMenu>
                Count
        </ItemMenu>
        </Link>
    </nav>
)
export default Menu;