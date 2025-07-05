import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/authService';
import { Button } from '../ui';
import { isAdmin } from "../../utils/roles";
import Logo from "../../assets/Logo.png"

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, userData } = useSelector((state) => state.auth);

    const handleLogout = async () => {
        await authService.logout();
        dispatch(logout());
        navigate('/');
    };

    return (
        <nav className="bg-gray-900  text-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between  flex-wrap space-y-2 items-center">
                <Link to="/" className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition flex gap-2">
                    <img src={Logo} alt="Logo" className='h-8 w-8'/>
                    <h1>TownSquare</h1>
                </Link>

                <div className="flex items-center flex-wrap justify-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <Link to="/volunteer" className="hover:text-purple-300 transition">Volunteer</Link>
                            <Link to="/events" className="hover:text-purple-300 transition">Events</Link>
                            <Link to="/feedback" className="hover:text-purple-300 transition">Feedback</Link>

                            {userData && isAdmin(userData) && (
                                <Link
                                    to="/admin"
                                    className="text-sm bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg shadow transition"
                                >
                                    Admin
                                </Link>
                            )}

                            <Button
                                onClick={handleLogout}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-purple-300 transition"><Button>Login</Button></Link>
                            <Link to="/signup" className="hover:text-purple-300 transition"><Button>Sign Up</Button></Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
