import { trpc } from "@/utils/trpc";
import { useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

function FormInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const { refetch, data } = trpc.airports.search.useQuery(
    { keyword: debouncedSearch },
    { enabled: debouncedSearch.trim() !== "" }
  );

  useEffect(() => {
    refetch();
  }, [debouncedSearch]);

  return (
    <section className="flex h-screen w-[99vw] flex-col justify-center bg-[url('/images/flightbg.png')] bg-cover bg-center">
      <div className="ml-36 mb-10 max-w-[40ch]">
        <h1 className="font-['ubuntu'] text-5xl leading-relaxed text-white">
          Let the journey begin....
        </h1>
      </div>

      <div className="flex w-[99vw] justify-center">
        <div className="flex h-[200px] w-[1200px] items-center justify-center rounded-md bg-[#041950]">
          <div className="flex h-[50px] w-[1100px] items-center rounded-md bg-white">
            <input
              type="text"
              placeholder="From where?"
              className="align-center broder-solid h-12 w-[242px] rounded-l-md border-r-2 border-black p-2 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {/* <select
              name="From where?"
              id=""
              className="align-center broder-solid h-12 w-[242px] rounded-l-md border-r-2 border-black p-2"
            >
              <option value="" disabled selected>
                From Where?
              </option>
            </select> */}

            <select
              name="From where?"
              id=""
              className="align-center broder-solid h-12 w-[242px] rounded-l-md border-r-2 border-black p-2"
            >
              <option value="" disabled selected>
                From Where?
              </option>
            </select>

            <input
              type="date"
              className="align-center broder-solid h-12 w-[242px] rounded-l-md border-r-2 border-black p-2"
            />

            <button className="align-center h-12 w-[240px] rounded-l-md p-2">
              1 Adult
            </button>

            <button className="align-center h-12 w-[240px] rounded-r-md bg-[#007CFF] p-2 text-white">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormInput;
