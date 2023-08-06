import { SearchBar } from './components/SearchBar';

export default function Home() {
  return (
    <main
      data-testid="main-element"
      className="flex min-h-screen flex-col items-center md:justify-center p-4 md:p-24 bg-slate-400"
    >
      <SearchBar />
      <div className="flex flex-col rounded shadow-md shadow-slate-900 bg-gray-900 text-gray-200 p-5 m-5  justify-between relative order-1 md:order-2 w-full md:w-2/3">
        <h2 className='font-bold text-center pb-3 text-2xl'>TODO: Previous Searches Section (perhaps)</h2>
        <p className='pt-1 pb-4 text-left'>Consider pushing each search into an array. The different items in the array can be mapped over, with an onClick event to trigger the search.</p>
        <p className='pt-1 pb-4'>Each previous search is then always available to the user for quick searches.</p>
      </div>
    </main>
  );
}
