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
            <div className="flex justify-between">
              <div className="ml-4 self-start">
                <div className="mt-4 justify-start">
                  <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                    ZKForms
                  </h1>
                </div>
              </div>
              <div className="mr-4 self-end">
                <div className="flex items-center justify-end gap-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <label className="sr-only" htmlFor="search">
                        {" "}
                        Search{" "}
                      </label>
                      <input
                        className="h-10 w-full rounded-full border border-black bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
                        id="search"
                        type="search"
                        placeholder="Search your forms"
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
                  </div>
                  <span className="block h-6 w-px rounded-full bg-gray-200"></span>
                  <a href="#" className="block">
                    <span className="sr-only">Profile</span>
                    <img
                      alt="Man"
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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

        <div className="mx-auto max-w-screen-xl">
          <div className="lg:w-15/12 w-full">
            <div className="text-body text-primary !text-primary py-4 text-2xl !font-medium">
              Analytics
            </div>
            <div className="h-500 flex w-full justify-between">
              <div style={{ height: "400px", width: "700px" }}>
                <PieGraph />
              </div>
              <div style={{ height: "500px", width: "700px" }}>
                <div className="font-mono flex py-6 pl-2">
                  <div className="relative z-10 mb-4 w-48 flex-none before:absolute before:left-1 before:top-1 before:h-full before:w-full before:bg-teal-200">
                    <img
                      src="https://www.zetachain.com/img/logos/og-banner.png"
                      alt=""
                      className="absolute inset-0 z-10 h-full w-full rounded-lg object-cover"
                      loading="lazy"
                    />
                  </div>
                  <form className="flex-auto pl-6">
                    <div className="relative flex flex-wrap items-baseline pb-6 before:absolute before:-left-60 before:-right-6 before:-top-6 before:bottom-0 before:bg-black">
                      <h1 className="relative mb-2 w-full flex-none text-2xl font-semibold text-white">
                        Rewards
                      </h1>
                      <div className="relative text-lg text-white">
                        Claim for the zeta address
                      </div>
                      <div className="relative text-lg text-teal-200">
                        {" "}
                        &nbsp;wallet number
                      </div>
                    </div>
                    <div className="my-6 flex items-baseline">
                      <div className="flex space-x-2 text-sm font-medium">
                        <div className="text-4xl font-bold">50</div>
                        <div className="text-md flex items-center">
                          ZETA
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 flex text-sm font-medium">
                      <button
                        className="h-12 w-full border-2 border-black bg-teal-200 px-6 font-semibold uppercase tracking-wider text-black"
                        type="submit"
                      >
                        Claim Reward
                      </button>
                    </div>
                   
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-screen-xl">
          <div className="w-full lg:w-10/12">

              <div className="text-body text-primary pb-4 !text-primary text-2xl !font-medium">
                Form Responses
              </div>

            </div>
            <div className="flex items-center justify-start w-full">
                  <div className="flex items-center ">
                    <div className="relative">
                      <label className="sr-only" htmlFor="search">
                        Search{" "}
                      </label>
                      <input
                        className="h-10 w-full rounded-full border border-black bg-white  ps-4 text-sm shadow-sm sm:w-56"
                        id="search"
                        type="search"
                        placeholder="Search your forms"
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
                  </div>
                  <span className="block h-6 w-px rounded-full bg-gray-200"></span>
                 
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
                      <Link href={`/form/${val.id}/render`}>
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
    </>
  );
}
