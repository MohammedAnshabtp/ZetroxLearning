import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-white text-2xl font-bold">EdTech</a>
        </Link>
        <div className="space-x-4">
          <Link href="/login">
            <a className="text-white">Login</a>
          </Link>
          <Link href="/signup">
            <a className="text-white">Sign Up</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
