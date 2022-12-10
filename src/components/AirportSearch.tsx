import { useEffect, useState } from "react";
import { Autocomplete, Loader } from "@mantine/core";
import { useDebounce } from "usehooks-ts";
import { trpc } from "@/utils/trpc";

type SetLocation = (location: string) => void;

export default function AirportSearch({
  placeholder,
  setLocation,
  location,
}: {
  placeholder: string;
  setLocation: SetLocation;
  location?: string;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);
  const { isFetching, data } = trpc.airports.search.useQuery(
    { keyword: debouncedSearch },
    { enabled: Boolean(debouncedSearch) }
  );

  useEffect(() => {
    setSearchQuery(location || "");
  }, [location]);

  return (
    <Autocomplete
      className="w-[242px] md:w-44"
      value={searchQuery}
      data={data || []}
      onChange={(e) => setSearchQuery(e)}
      rightSection={isFetching ? <Loader size={16} /> : null}
      placeholder={placeholder}
      onItemSubmit={(item) => setLocation(item.value)}
    />
  );
}
