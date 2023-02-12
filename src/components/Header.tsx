import Link from 'next/link';

function Header() {
  return (
    <header className='flex justify-center items-center h-16 border-b'>
      <nav className={`flex flex-row justify-center items-center w-full mx-6`} role='navigation'>
        <Link href='/'>
          <h1 className='items-center text-2xl hover:text-blue-500'>Polls</h1>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
