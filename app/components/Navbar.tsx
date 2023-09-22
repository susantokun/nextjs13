import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='inline-flex gap-2'>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
    </nav>
  );
}
