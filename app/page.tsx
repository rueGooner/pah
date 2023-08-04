import { SearchBar } from './components/SearchBar';

export default function Home() {
  return (
    <main
      data-testid="main-element"
      className="flex min-h-screen flex-col items-center justify-center p-24"
    >
        <SearchBar />
    </main>
  );
}
