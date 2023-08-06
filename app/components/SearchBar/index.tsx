'use client';

import React from 'react';
import Link from 'next/link';
import { CustomLink } from '../CustomLink';

export const SearchBar = () => {
  const [location, setLocation] = React.useState<string>('');

  return (
    <div data-testid="form-group" className="w-full md:w-2/3 order-2 md:order-1">
      <label
        htmlFor="weather-search-input"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative flex flex-col md:flex-row">
        <div className="relative md:flex w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            data-testid="weather-search-input"
            type="search"
            id="weather-search-input"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type in a location..."
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <CustomLink href={location} />
      </div>
    </div>
  );
};
