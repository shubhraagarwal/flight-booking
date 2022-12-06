import { useState } from "react";
import { Autocomplete, Loader } from "@mantine/core";
import { useDebounce } from "usehooks-ts";
import { trpc } from "@/utils/trpc";

type SetLocation = (location: string) => void;

export default function AirportSearch({
  placeholder,
  setLocation,
}: {
  placeholder: string;
  setLocation: SetLocation;
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
      onItemSubmit={(item) => setLocation(item.value)}
    />
  );
}
