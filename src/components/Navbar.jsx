import Link from 'next/link';

const Navbar = ({ setPage }) => {
    return (
        <nav className="bg-blue-600 text-white p-4 fixed w-full top-0 left-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">My Dashboard</h1>
            <ul className="flex space-x-6">
              <li>
                <button 
                  onClick={() => setPage('dashboard')} 
                  className="hover:bg-blue-500 px-4 py-2 rounded transition"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setPage('login-history')} 
                  className="hover:bg-blue-500 px-4 py-2 rounded transition"
                >
                  Login History
                </button>
              </li>
            </ul>
          </div>
        </nav>
      );
    };


export default Navbar;
