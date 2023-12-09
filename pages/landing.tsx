import Link from "next/link";
import React from "react";
import { transform } from "typescript";

export default function Index() {
  return (
    <>
      <div className="relative flex min-h-screen w-full items-start justify-center overflow-auto bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 px-4">
        <div className="h-full">
          <div className="container mx-auto w-full">
            <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ alignSelf: "flex-start", marginLeft: "-30px" }}>
                  <div className="mt-4 justify-start">
                    <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                      ZKForms
                    </h1>
                  </div>
                </div>
                <div style={{ alignSelf: "flex-end", marginRight: "-30px" }}>
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

                      <div className="flex items-center gap-4">
                        <div className="sm:flex sm:gap-4">
                          <Link
                            className="block rounded-md border-black bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:border hover:bg-white hover:text-black"
                            href="/form/0/create"
                          >
                            Create Forms
                          </Link>

                          <Link
                            className="hidden rounded-md border border-black bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-black hover:text-white sm:block"
                            href="/home"
                          >
                            Templates
                          </Link>
                        </div>

                        <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                          <span className="sr-only">Toggle menu</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto flex flex-col flex-wrap items-center pt-24 md:flex-row md:pt-2">
            <div className="flex w-full flex-col justify-center overflow-y-hidden lg:items-start xl:w-2/5">
              <h1 className="my-4 pt-3 text-center text-3xl font-bold leading-tight text-black opacity-75 md:text-left md:text-5xl">
                The
                <div className="pt-3">
                  <span className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    ZeroKnowledge
                  </span>
                </div>
                <div className="pt-3">Forms</div>{" "}
              </h1>
              <p className="mb-8 text-center text-base leading-normal md:text-left md:text-2xl">
                The easiest way to build web3 forms
              </p>

              <form className="mb-4 w-full rounded-lg bg-gray-900 px-8 pb-8 pt-6 opacity-75 shadow-lg">
                <div className="mb-4">
                  <p
                    className="mb-2 block py-2 font-bold text-blue-300"
                    id="emailaddress"
                  >
                    Start using ZK Forms now
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    className="transform rounded bg-gradient-to-r from-purple-800 to-green-500 px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:scale-105 hover:from-pink-500 hover:to-green-500 focus:ring"
                    type="button"
                  >
                    Get Started
                  </button>
                </div>
              </form>
            </div>
            <div className="w-full overflow-hidden p-10 xl:w-3/5">
              <img
                className="mx-auto w-full -rotate-6 transform transition duration-700 ease-in-out hover:rotate-6 hover:scale-105 md:w-4/5"
                src="https://assets-global.website-files.com/64e951f610713e77f6a1cec8/64eb28a53feded5cf72ecb6a_image%20(50)-p-1080.webp"
              />
            </div>
          </div>
          <section className="pt-2">
            <div className={`container mx-auto xl:px-0`}>
              <div className="flex flex-col justify-center">
                <div className="text-center text-xl text-gray-700 dark:text-white">
                  Our <span className="text-indigo-600">Sponsors</span> are
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-5 md:justify-around">
                  <div className="pt-2 text-gray-400 dark:text-gray-400">
                    <FilecoinLogo />
                  </div>
                  <div className="text-gray-400 dark:text-gray-400">
                    <PolygonLogo />
                  </div>
                  <div className="pt-1 text-gray-400 dark:text-gray-400">
                    <TheGraphLogo />
                  </div>
                  <div className="pt-2 text-gray-400 dark:text-gray-400">
                    <ChainLinkLogo />
                  </div>
                  <div className="pt-2 text-gray-400 dark:text-gray-400">
                    <ZetaChainLogo />
                  </div>
                  <div className="pt-2 text-gray-400 dark:text-gray-400">
                    <EthereumLogo />
                  </div>
                  <div className="pt-2 text-gray-400 dark:text-gray-400">
                    <SafeLogo />
                  </div>
                  <div className="pt-2 text-gray-400 dark:text-gray-400">
                    <AllianceLogo />
                  </div>
                  <div className="pt-2 text-gray-400 dark:text-gray-400">
                    <LighthouseLogo />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="fade-in w-full pb-6 pt-16 text-center text-sm md:text-left">
            <a className="text-gray-500 no-underline hover:no-underline" href="#">
              &copy; App 2023
            </a>
            &nbsp; Built by team ZK Dev
            {/* <a
              className="text-gray-500 no-underline hover:no-underline"
              href="https://www.tailwindtoolbox.com"
            >
              TailwindToolbox.com
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}

function FilecoinLogo() {
  return (
    <img
      src="https://assets.devfolio.co/company/1f06fd75b36344ffa73bd6353be23aa4/assets/favicon.png"
      height={61}
      width={61}
    ></img>
  );
}

function PolygonLogo() {
  return (
    <img
      src="https://seeklogo.com/images/P/polygon-matic-logo-1DFDA3A3A8-seeklogo.com.png"
      height={61}
      width={61}
    ></img>
  );
}

function TheGraphLogo() {
  return (
    <img
      src="https://assets.devfolio.co/company/bf3808ca2f0e49d4a39b55427da72c9c/assets/favicon.png"
      height={61}
      width={61}
    ></img>
  );
}

function ChainLinkLogo() {
  return (
    <img
      src="https://assets.devfolio.co/company/49f64b30beed42c097036b3cf25f8cac/assets/favicon.png"
      height={61}
      width={61}
    ></img>
  );
}

function ZetaChainLogo() {
  return (
    <img
      src="https://s2.coinmarketcap.com/static/img/coins/200x200/21259.png"
      height={61}
      width={61}
    ></img>
  );
}

function EthereumLogo() {
  return (
    <img
      src="https://seeklogo.com/images/E/ethereum-name-service-ens-logo-9190A647F5-seeklogo.com.png"
      height={61}
      width={61}
    ></img>
  );
}

function SafeLogo() {
  return (
    <img
      src="https://img.api.cryptorank.io/coins/safe1662534966170.png"
      height={61}
      width={61}
    ></img>
  );
}

function AllianceLogo() {
  return (
    <img
      src="https://cryptocurrencyjobs.co/startups/assets/logos/defi-alliance_hub0e488e947900d41c310b9c8f1da4213_1578_64x0_resize_box_3.png"
      height={61}
      width={61}
    ></img>
  );
}

function LighthouseLogo() {
  return (
    <img
      src="https://img.api.cryptorank.io/coins/lighthouse_storage1667832539996.png"
      height={61}
      width={61}
    ></img>
  );
}
