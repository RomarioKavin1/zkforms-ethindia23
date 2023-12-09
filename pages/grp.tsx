import { useEffect, useState } from "react";

interface Group {
  id: string;
  name: string;
}

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [responseData, setResponseData] = useState<{
    data: { groups: Group[] };
  }>();
  const [filteredData, setFilteredData] = useState<Group[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/groups", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResponseData(data);
      setFilteredData(data.data.groups);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredGroups = responseData?.data.groups
      .filter((group) => group.name.toLowerCase().includes(lowerCaseSearchTerm))
      .sort((a, b) => a.name.localeCompare(b.name));

    setFilteredData(filteredGroups || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <label className="sr-only" id="search">
              {" "}
              Search{" "}
            </label>

            <input
              className="h-10 w-full rounded-full border border-black bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
              id="search"
              type="search"
              placeholder="Search website..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
            />

            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
<div className="bg-yellow overflow-y-scroll max-h-96">
{filteredData?.length > 0 && (
          <div>
            {filteredData.map((group) => (
              <div key={group.id}>
                <a
                  href="#"
                  className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                    {group.name}
                  </h5>
                  <p className="font-normal text-gray-700">{group.id}</p>
                </a>
              </div>
            ))}
          </div>
        )}
</div>

      </div>
    </>
  );
}
