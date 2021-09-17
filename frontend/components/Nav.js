// ./components/Navbar
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <nav>
    <Link href='/products'>Products</Link>
    <Link href='/sell'>Sell</Link>
    <Link href='/orders'>Orders</Link>
    <Link href='/account'>Account</Link>
    <Link href='/admin'>Admin</Link>
  </nav>
);
export default Navbar;
