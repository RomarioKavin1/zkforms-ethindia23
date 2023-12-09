/* eslint-disable @next/next/no-img-element */

import useGlobalData from "@/hooks/useGlobalData";
import { dummyValues } from "@/utils/dummyValues";
// next
import Link from "next/link";
import { useRouter } from "next/router";
import PieGraph from "@/components/Charts/PieGraph";

export default function Index() {
  const { data, setData } = useGlobalData();
  const router = useRouter();

  function createForm() {
    const newId = Number(data[data.length - 1].id) + 1;
    const newData = {
      id: newId,
      formTitle: "Untitled 🫥",
      form: [],
    };
    setData([...data, newData]);
    router.push(`/form/${newId}/create`);
  }

  return (
    <>
      <div className="min-h-screen w-full overflow-auto bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 px-4">
        <header className="w-full lg:w-11/12">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ alignSelf: "flex-start", marginLeft: "18px" }}>
                <div className="mt-4 justify-start">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    ZKForms
                  </h1>
                </div>
              </div>
              <div style={{ alignSelf: "flex-end", marginRight: "-98px" }}>
                <div className="flex items-center justify-end gap-4">
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
                      />

                      <button
                        type="button"
                        className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
                      >
                        <span className="sr-only">Search</span>
                        <svg
                          xmlns="http:www.w3.org/2000/svg"
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

                    {/* <a
                      href="#"
                      className="block shrink-0 rounded-full border border-black bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
                    >
                      <span className="sr-only">Notifications</span>
                      <svg
                        xmlns="http:www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                      </svg>
                    </a> */}
                  </div>

                  <span
                    aria-hidden="true"
                    className="block h-6 w-px rounded-full bg-gray-200"
                  ></span>

                  <a href="#" className="block shrink-0">
                    <span className="sr-only">Profile</span>

                    <img
                      alt="Man"
                      src="https:images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="ml-5 mt-8">
              <h1 className="my-4 pt-3 text-center text-3xl font-medium leading-tight text-black opacity-75 md:text-left md:text-3xl">
                My
                <span className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  &nbsp; Workspace
                </span>
                &nbsp; 🚀
              </h1>
            </div>
          </div>
        </header>

        <div className="flex justify-center">
          <div className="mt-4 w-full rounded-[20px] bg-[#FFCF5340]/25 p-4 px-8 lg:w-10/12">
            <header className="mb-4">
              <div className="text-body text-primary !text-primary !font-medium">
                Start a new form
              </div>
            </header>
            <div className="grid w-full gap-x-11 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              <div className="flex flex-col items-center justify-center gap-y-2">
                <div className="flex flex-col items-center justify-center">
                  <button
                    className="group relative flex flex-col items-center justify-center"
                    type="button"
                    onClick={createForm}
                  >
                    <div className="relative mb-2 flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-[20px] bg-white bg-[url('https:images.mintkudos.xyz/frontend/templates/allowlist-form.png')]">
                      <div className="absolute z-10 h-full w-full cursor-pointer rounded-[20px] bg-white opacity-0 transition-all group-hover:opacity-20"></div>
                      <div>
                        <svg
                          xmlns="http:www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#FF007F"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="16" />
                          <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-y-2 p-5 py-0 text-center">
                      <div className="line-clamp-1">
                        <div className="text-small text-primary">
                          <div className="text-center">Blank</div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <div>&nbsp;</div>
                </div>
              </div>
              {dummyValues.map((val) => (
                <div
                  key={val.id}
                  className="flex flex-col items-center justify-center gap-y-2 sm:relative sm:block"
                >
                  <div className="flex flex-col items-center justify-center">
                    <Link
                      href={`/form/${val.id}/create`}
                      className="group relative flex flex-col items-center justify-center"
                    >
                      <div className="relative mb-2 flex h-[200px] w-[200px] items-center justify-center overflow-hidden rounded-[20px] bg-white bg-[url('https:images.mintkudosg')]">
                        <div className="absolute z-10 h-full w-full cursor-pointer rounded-[20px] bg-white opacity-0 transition-all group-hover:opacity-20"></div>
                        <img
                          src="https:images.mintkudos.xyz/frontend/templates/allowlist-form.png"
                          width="200"
                          height="200"
                          className="h-full w-full object-cover"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col items-center justify-between gap-y-2 p-5 py-0 text-center">
                        <div className="line-clamp-1">
                          <div className="text-small text-primary">
                            <div className="text-center">{val.formTitle}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                    {/* <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https:blog.deform.cc/allowlists"
                      className="w-full hover:underline"
                    >
                      <div className="text-small text-primary !text-secondary">
                        <div className="flex items-center justify-center gap-x-2">
                          Examples
                          <div className="h-3 w-3">
                            <svg
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http:www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 4H3.75C3.15326 4 2.58097 4.23705 2.15901 4.65901C1.73705 5.08097 1.5 5.65326 1.5 6.25V16.75C1.5 17.3467 1.73705 17.919 2.15901 18.341C2.58097 18.7629 3.15326 19 3.75 19H14.25C14.8467 19 15.419 18.7629 15.841 18.341C16.2629 17.919 16.5 17.3467 16.5 16.75V8.5M6 14.5L19.5 1M19.5 1H14.25M19.5 1V6.25"
                                stroke="#98A2B6"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </a> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-4 w-full p-4 px-1 lg:w-10/12">
            <div className="mt-5 px-5">
              <div className="text-body text-primary !text-primary !font-medium">
                Your forms
              </div>
            </div>
            <div className="flex justify-center">
              <div className="mt-4 grid gap-x-10 gap-y-8 pb-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                {data
                  .filter(
                    (val) => Number(val.id) !== 100 && Number(val.id) !== 101,
                  )
                  .map((val) => (
                    <div
                      key={val.id}
                      className="group relative flex h-[300px] w-[250px] flex-col rounded-[20px] border-[0.25px] shadow-md"
                    >
                      <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-full cursor-pointer rounded-[20px] bg-white opacity-0 transition-all group-hover:opacity-20"></div>
                      <Link href={`/form/${val.id}/create`}>
                        <div>
                          <div className="relative flex h-[210px] w-full items-center justify-center overflow-hidden">
                            <div className="pointer-events-none">
                              <div className="flex w-full flex-col items-center">
                                <div className="absolute -top-12 h-[350px] w-[350px]">
                                  <div
                                    className="h-full w-full -rotate-12 bg-[#FFCF5340]/25"
                                    style={{
                                      backgroundImage:
                                        "radial-gradient(50% 50% at 50% 50%,(59, 188, 157, 0.565) 0%, rgba(59, 188, 157, 0) 100%)",
                                    }}
                                  ></div>
                                </div>
                                <div className="flex flex-col items-center px-5 pb-[6.75rem] pt-[6.5rem]">
                                  <figure className="relative flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-full">
                                    <img
                                      alt="logo"
                                      loading="lazy"
                                      decoding="async"
                                      data-nimg="fill"
                                      className="h-full w-full rounded-full object-cover"
                                      sizes="100vw"
                                      srcSet="
                          /_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=640&amp;q=75   640w,
                          /_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=750&amp;q=75   750w,
                          /_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=828&amp;q=75   828w,
                          /_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=1080&amp;q=75 1080w,
                          /_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=1200&amp;q=75 1200w,
                          /_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=1920&amp;q=75 1920w,
                          /_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=2048&amp;q=75 2048w,
                          /_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=3840&amp;q=75 3840w
                        "
                                      src="/_next/image/?url=https%3A%2F%2Fassets.deform.cc%2Fdefault%2Flogo12.png&amp;w=3840&amp;q=75"
                                      style={{
                                        position: "absolute",
                                        height: "100%",
                                        width: "100%",
                                        inset: "0px",
                                        color: "transparent",
                                      }}
                                    />
                                  </figure>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <div className="flex items-center justify-between gap-x-2 p-5">
                        <div className="z-10 flex flex-col items-start gap-y-1">
                          <div className="line-clamp-1">
                            <div className="text-small text-primary">
                              {val.formTitle}
                            </div>
                          </div>
                          <div className="text-small text-primary !text-secondary">
                            No responses
                          </div>
                        </div>
                        <div className="relative z-20">
                          <button
                            className="focus:outline-none focus:ring-0"
                            id="headlessui-menu-button-:r5s:"
                            type="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-headlessui-state=""
                          >
                            <div
                              data-testid="[64f5a7b1-6a69-4215-97bb-d3312e98bd98]-preview-dropdown"
                              className="flex items-end justify-end"
                            >
                              ...
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-4 w-full p-4 px-1 lg:w-10/12">
            <div className="mt-5 px-5">
              <div className="text-body text-primary !text-primary !font-medium">
                Your form Analytics
              </div>
              <div className="h-500 flex w-full items-start justify-between">
                <div
                  style={{
                    height: "500px",
                    width: "700px",
                  }}
                >
                  <PieGraph />
                </div>
                <div
                  style={{
                    height: "500px",
                    width: "700px",
                  }}
                >
                  <PieGraph />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
