import Link from 'next/link';
import React from 'react';

interface CustomLinkProps {
  href: string;
  [key: string]: any;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ href, ...props }) => {
  if (href === '') {
    return (
      <button
        {...props}
        className="text-white relative md:absolute md:right-2.5 bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 my-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800 disabled:opacity-50 cursor-not-allowed"
        disabled
      >
        Empty Location
      </button>
    );
  }

  return (
    <Link
      href={`/location/${href}`}
      {...props}
      className="text-white relative md:absolute md:right-2.5 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 my-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
    >
      <button>Search</button>
    </Link>
  );
};
