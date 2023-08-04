import React from 'react';
import Link from 'next/link';
import {redirect} from 'next/navigation';

export async function fetchWeather(url: string) {
  const response = await fetch(url);
  return response.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await fetchWeather(
    `http://api.weatherapi.com/v1/current.json?key=e249f83b544f440ca4c144015230208&q=${params.slug}&aqi=no`
  );

  if (data.error) redirect('/error');

  return (
    <div>
      LOCATION: {params.slug} PAGE
      <Link
        href="/"
        className="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      >
        Search Another Location
      </Link>
    </div>
  );
}
