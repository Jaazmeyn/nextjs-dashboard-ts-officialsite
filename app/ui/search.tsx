'use client'
import { useDebouncedCallback } from 'use-debounce';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams, usePathname, useRouter } from 'next/navigation'; // 2. Update the URL with the search params

export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(); // 2. Update the URL with the search params hook
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) =>  {   // 1. users input
    //console.log(`Searching... ${term}`);  // 1. users input

    const params = new URLSearchParams(searchParams); // 2. Update the URL with search params
    // 2) params string based on the user’s input, delete if input is empty 
    params.set('page', '1'); // user types new search: reset the page number to 1

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    // 2) ${pathname} => current path ("/dashboard/invoices")
    // params.toString() => translates to URL friendly format
    // replace :/dashboard/invoices?query=lee if the user searches for "Lee"
    replace(`${pathname}?${params.toString()}`); //to uptate the url
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value); // 1. users input
        }}
        // 3 URL and input in sync, native input will manage its own state because it's not with usestate
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}