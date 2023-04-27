export default function Home() {
  return (
    <main>
      <nav>
        <h1 className="px-4 py-2 text-lg">CodeSandbox</h1>
      </nav>

      <section className="grid h-96 content-center">
        <div>
          <button
            type="button"
            className="mx-auto inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-gray-500 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800"
          >
            Button
          </button>
        </div>
      </section>
    </main>
  );
}
