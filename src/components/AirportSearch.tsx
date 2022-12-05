import { useState } from "react";
import { Autocomplete, Loader } from "@mantine/core";
import { useDebounce } from "usehooks-ts";
import { trpc } from "@/utils/trpc";

export default function AirportSearch({
  placeholder,
}: {
  placeholder: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const { isFetching, data } = trpc.airports.search.useQuery(
    { keyword: debouncedSearch },
    { enabled: Boolean(debouncedSearch) }
  );

  return (
    <Autocomplete
    className="w-[242px] p-0"
      value={searchQuery}
      data={data || []}
      onChange={(e) => setSearchQuery(e)}
      rightSection={isFetching ? <Loader size={16} /> : null}
      placeholder={placeholder}
    />
  );
}