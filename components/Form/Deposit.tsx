"use client";

import { useState } from "react";

export default function Index() {
  const [approved, setApproved] = useState(false);
  return (
    <>
      <div className="relative flex min-h-screen w-full items-start justify-center overflow-auto bg-gradient-to-r  from-indigo-100 via-purple-50 to-teal-100 px-4">
        <div className="mx-auto mt-9 w-full px-4 py-7 lg:w-7/12">
          <div className="relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 shadow-lg">
            <h1 className="pt-6 text-center text-2xl font-bold  text-gray-900 sm:text-3xl">
              ZKForms
            </h1>
            <h1 className=" bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text py-6 pb-4 text-sm font-bold text-transparent opacity-75 sm:text-2xl md:text-center md:text-5xl">
              Deposit
            </h1>
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
              sunt dolores deleniti inventore quaerat mollitia?
            </p>

            <form
              action=""
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <p className="text-center text-lg font-medium">
                Fill in your details
              </p>

              <div className="w-full px-4 py-3">
                <div className="lg:w-12/12 w-full px-4">
                  <label
                    id="jobtitle"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How much do you want to deposit
                  </label>
                  <input
                    type="text"
                    id="jobtitle"
                    name="jobtitle"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
              </div>
              <p className="text-center text-sm text-gray-500">
                By filling out this form and clicking submit, you acknowledge that
                your amount will be debited.
              </p>
              <div className="flex">
                <button
                  disabled={approved}
                  type="button"
                  className={`${
                    approved && " opacity-50"
                  } block w-full rounded-lg bg-purple-700 px-5 py-3 text-sm font-medium text-white`}
                >
                  Approve
                </button>
                <button
                  disabled={!approved}
                  type="button"
                  className={`${
                    !approved && "opacity-50"
                  } ml-3 block w-full rounded-lg bg-purple-700 px-5 py-3 text-sm font-medium text-white`}
                >
                  Create Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
