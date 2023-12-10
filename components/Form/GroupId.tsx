"use client";

import { useEffect, useState } from "react";
import Skeleton from "../Skeleton";
import useGlobalData from "@/hooks/useGlobalData";
import { useRouter } from "next/router";

interface Group {
  id: string;
  name: string;
  isSelected?: boolean;
}

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [responseData, setResponseData] = useState<Group[]>([]);
  const [filteredData, setFilteredData] = useState<Group[]>();
  const [selectedIds, setSelectedIds] = useState<Group[]>([]);
  const router = useRouter();
  const { data, setData } = useGlobalData();

  const fetchData = async () => {
    try {
      const response = await fetch("/api/group", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setResponseData(data.data.groups);
      setFilteredData(data.data.groups);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const filteredGroups = responseData
      ?.filter((group) => group.name.toLowerCase().includes(lowerCaseSearchTerm))
      .sort((a, b) => a.name.localeCompare(b.name));

    setFilteredData(filteredGroups || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  function addGroup() {
    const newD = [...data];
    newD[0].proof = selectedIds;
    setData(newD);
    localStorage.setItem("globalData", JSON.stringify(newD));
    router.push("/form/1/deposit");
  }

  return (
    <>
      <main className="relative flex bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 lg:min-h-full">
        <div className="flex-auto">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
            <nav className="flex flex-1 flex-col" aria-label="Sidebar">
              <ul role="list" className="-mx-2 space-y-1">
                <div className="my-4 flex w-full items-center">
                  <div className="relative">
                    <label className="sr-only" id="search">
                      Search
                    </label>

                    <input
                      className="h-10 w-full rounded-full border border-black bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                      id="search"
                      type="search"
                      placeholder="Search"
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
                <div
                  style={{ maxHeight: "550px" }}
                  className={`overflow-y-scroll`}
                >
                  {filteredData ? (
                    filteredData.map((group) => (
                      <div
                        key={group.id}
                        className={`${
                          group.isSelected
                            ? "group mb-2 flex gap-x-3 rounded-md bg-gray-50 p-4 text-sm font-semibold leading-6 text-indigo-600"
                            : "group mb-2 flex gap-x-3 rounded-md p-4 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => {
                            if (responseData) {
                              const newData = [...responseData];

                              const clickedIndex = newData.findIndex(
                                (val) => val.id === group.id,
                              );

                              if (newData[clickedIndex].isSelected) {
                                const idIndex = selectedIds.findIndex(
                                  (val) => val.id === newData[clickedIndex].id,
                                );
                                const newS = [...selectedIds];
                                newS.splice(idIndex, 1);
                                setSelectedIds(newS);
                              } else {
                                const newS = [...selectedIds];
                                newS.push(newData[clickedIndex]);
                                setSelectedIds(newS);
                              }

                              newData[clickedIndex].isSelected =
                                !newData[clickedIndex].isSelected;
                              setResponseData(newData);
                            }
                          }}
                        >
                          <h1
                            className={`${
                              group.isSelected
                                ? "group flex gap-x-3 text-2xl font-semibold leading-6 text-indigo-600"
                                : "group flex gap-x-3 text-2xl  font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
                            }`}
                          >
                            {group.name}
                          </h1>
                          <p className="mt-2 font-normal text-gray-700">
                            {group.id}
                          </p>
                        </button>
                      </div>
                    ))
                  ) : (
                    <Skeleton />
                  )}
                </div>
              </ul>
            </nav>

            <div className="lg:col-start-2">
              <h1 className="text-sm font-medium text-indigo-600">Sismo Groups</h1>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Create Group here
              </p>
              <p className="mt-4 text-3xl text-gray-500"></p>
              <p className="mt-4 text-lg text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ea
                impedit eveniet ratione nam. Neque consequuntur adipisci fugit
                porro sint, pariatur illum unde deserunt omnis, repellat magnam
                iure, sed animi.
              </p>
              <dl className="mt-8 text-sm font-medium">
                <dt className="text-gray-900">Id</dt>
                <dd className="mt-2 text-indigo-600"></dd>
              </dl>

              <textarea
                value={JSON.stringify(selectedIds)}
                rows={10}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>

              <button
                type="button"
                className="mt-8 rounded-md bg-indigo-600 px-20 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={addGroup}
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
