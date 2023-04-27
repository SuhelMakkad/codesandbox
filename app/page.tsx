import Link from "next/link";

export default function Home() {
  return (
    <main>
      <nav>
        <h1 className="px-4 py-2 text-lg">CodeSandbox</h1>
      </nav>

      <section className="grid h-96 content-center">
        <div>
          <Link
            href={"/code"}
            className="mx-auto block w-max rounded-md border border-transparent bg-white/[.1] px-4 py-3 text-sm font-semibold text-gray-100 ring-offset-white transition-all hover:bg-white hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Create new +
          </Link>
        </div>
      </section>
    </main>
  );
}
