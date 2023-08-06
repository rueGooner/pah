import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';

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
    <div className="flex min-h-screen flex-col items-center p-10 bg-slate-400 justify-center">
      <div className="rounded shadow-md shadow-slate-900 bg-gray-900 text-gray-200 p-5 m-5 flex items-center justify-between w-full md:w-2/3 relative">
        <div className="w-1/2 p-1">
          <h2 className="pb-2 pt-1 text-5xl">{data.current.temp_c}&deg;C</h2>
          <p className="pb-2 pt-1 text-xl font-bold">Name: {data.location.name}</p>
          <p className="pb-2 pt-1 text-sm">Region: {data.location.region}</p>
          <p className="pb-5 pt-1 text-sm">As of: {data.location.localtime}</p>
        </div>
        <div className="w-1/2 p-1">
          <div className="absolute top-2 right-2">
            <Image
              src={`http:${data.current.condition.icon}`}
              width={64}
              height={64}
              alt="Picture of the author"
            />
          </div>
          <h3>Details</h3>
          <p>Conditions: {data.current.condition.text}</p>
        </div>
      </div>
      <Link
        href="/"
        className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 text-center"
      >
        New Search
      </Link>
    </div>
  );
}
