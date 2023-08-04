import { SearchBar } from './components/SearchBar';

export default function Home() {
  return (
    <main
      data-testid="main-element"
      className="flex min-h-screen flex-col items-center md:justify-center p-4 md:p-24 bg-gray-900"
    >
      <SearchBar />
      <div className="flex flex-col border border-dashed p-4 rounded-md h-60 items-center my-4 order-1 md:order-2">
        <h2 className='font-bold'>TODO: Previous Searches Section</h2>
        <p>Consider pushing each search into an array. Each previous search is then always available.</p>
        <p>Consider pushing each search into an array. Each previous search is then always available.</p>
      </div>
    </main>
  );
}
