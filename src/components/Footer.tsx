const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-200 dark:border-gray-800">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} PGP Systems. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
