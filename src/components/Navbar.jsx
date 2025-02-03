import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-cyan-600 text-white p-4 fixed w-full top-0 left-0 z-10">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-lg font-bold">My Dashboard</h1>
            <ul className="flex space-x-6">
              <li>
              <Link href="/home">Dashboard</Link>
              </li>
              <li>
              <Link href="/loginHistory">Login History</Link>
              </li>
              <li>
              <Link href="/f1">New Space</Link>
              </li>
              <li>
              <Link href="/newspace">Credentials</Link>
              </li>
              <li>
              <Link href="/">Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
      );
    };


export default Navbar;
