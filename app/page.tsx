import { SearchBar } from './components/SearchBar';

export default function Home() {
  return (
    <main
      data-testid="main-element"
      className="flex min-h-screen flex-col items-center md:justify-center p-4 md:p-24 bg-gray-900"
    >
      <SearchBar />
      <div className="flex flex-col border border-dashed p-4 rounded-md h-60  my-4 order-1 md:order-2">
        <h2 className='font-bold text-center pb-3'>TODO: Previous Searches Section</h2>
        <p className='pb-2 text-left'>Consider pushing each search into an array. The different items in the array can be mapped over, with an onClick event to trigger the search.</p>
        <p className='pb-2'>Each previous search is then always available to the user for quick searches.</p>
      </div>
    </main>
  );
}
