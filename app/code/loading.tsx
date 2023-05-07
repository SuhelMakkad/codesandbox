export default function CodePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex gap-1 border-b border-neutral-600 bg-neutral-900 px-3 py-2">
        <div className="w-40 animate-pulse rounded-full bg-neutral-700 py-2.5" />
        <div className="flex grow justify-center">
          <div className="w-64 animate-pulse rounded-full bg-neutral-700 py-2.5" />
        </div>
      </div>

      <div className="flex grow overflow-hidden">
        <div className="animate-pulse border-r border-neutral-600 bg-neutral-800 px-4" />

        <div className="flex grow">
          <div className="flex-[20_1_0px] overflow-hidden border-r border-neutral-600">
            <div className="mb-1 bg-neutral-800 px-3 py-1.5">
              <div className="w-36 animate-pulse rounded-full bg-neutral-700 py-2" />
            </div>

            <div className="flex flex-col gap-3 px-4 py-2">
              <div className="w-36 animate-pulse rounded-full bg-neutral-700 py-2" />
              <div className="ml-5 w-36 animate-pulse rounded-full bg-neutral-700 py-2" />
              <div className="ml-5 w-36 animate-pulse rounded-full bg-neutral-700 py-2" />
              <div className="w-36 animate-pulse rounded-full bg-neutral-700 py-2" />
              <div className="w-36 animate-pulse rounded-full bg-neutral-700 py-2" />
            </div>
          </div>

          <div className="flex flex-[50_1_0px] flex-col overflow-hidden border-r border-neutral-600">
            <div className="flex gap-1 bg-neutral-800 px-1 py-2">
              <div className="h-5 w-40 shrink-0 animate-pulse rounded-full bg-neutral-700" />
              <div className="h-5 w-40 shrink-0 animate-pulse rounded-full bg-neutral-700" />
              <div className="h-5 w-40 shrink-0 animate-pulse rounded-full bg-neutral-700" />
              <div className="h-5 w-40 shrink-0 animate-pulse rounded-full bg-neutral-700" />
            </div>

            <div className="grid grow">
              <div className="row-span-6">
                <div className="ml-4 mt-4 h-5 w-9/12 animate-pulse rounded-full bg-neutral-800" />
                <div className="ml-4 mt-4 h-5 w-9/12 animate-pulse rounded-full bg-neutral-800" />
                <div className="ml-4 mt-4 h-5 w-9/12 animate-pulse rounded-full bg-neutral-800" />
                <div className="ml-4 mt-4 h-5 w-9/12 animate-pulse rounded-full bg-neutral-800" />
              </div>

              <div className="row-span-3 border-t border-neutral-600">
                <div className="ml-4 mt-4 h-5 w-9/12 animate-pulse rounded-full bg-neutral-800" />
              </div>
            </div>
          </div>

          <div className="flex flex-[30_1_0px] flex-col overflow-hidden px-3 py-2.5">
            <div className="w-full animate-pulse rounded-full bg-neutral-700 py-2.5" />
            <div className="grow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
