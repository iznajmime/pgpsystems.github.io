import { Link, NavLink } from 'react-router-dom';
import { Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-gray-900 dark:hover:text-gray-50 ${
      isActive ? 'text-gray-900 dark:text-gray-50' : 'text-gray-500 dark:text-gray-400'
    }`;

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur-sm">
      <Link to="/" className="flex items-center justify-center">
        <Bot className="h-6 w-6" />
        <span className="ml-2 font-bold text-lg">PGP Systems</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/portfolio" className={navLinkClass}>
          Past Projects
        </NavLink>
        <NavLink to="/services" className={navLinkClass}>
          Services
        </NavLink>
        <Button asChild size="sm">
          <Link to="/#contact">Contact</Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
