"use client";

import React, { useEffect, useState } from "react";
import { ZETA_TOKEN_ABI, ZK_FORM_FACTORY_ABI } from "@/utils/constants";
import { useContractWrite, useNetwork } from "wagmi";
import { parseEther } from "viem";
import lighthouse from "@lighthouse-web3/sdk";
import useGlobalData from "@/hooks/useGlobalData";
import LoadingButton from "@/components/LoadingButton";

export default function Index() {
  const { data: globalData, setData } = useGlobalData();
  const zetaAddress = "0xf1E3A5842EeEF51F2967b3F05D45DD4f4205FF40";
  const zkFormFactory = "0xC1C2d56Fa3644d34ED921BA3535E157189B3Db4A";

  async function storeData() {
    const response = await lighthouse.uploadText(
      JSON.stringify(globalData),
      process.env.NEXT_PUBLIC_LIGHTHOUSE_KEY as string,
      globalData[0].formTitle,
    );

    let localData = JSON.parse(localStorage.getItem("globalData") || "").map(
      (val) => val.id,
    );

    const groupId = globalData[0].proof.map((val) => val.id) || localData;

    const { data } = response;
    console.log(data.Hash);
    await createForm({
      args: [data.Name, "", data.Hash, groupId, parseEther(amount), splits],
    });
  }

  const [amount, setAmount] = useState("");
  const [splits, setSplits] = useState("");

  const { chain, chains } = useNetwork();

  const {
    data: approveData,
    isLoading: isApproveLoading,
    isSuccess,
    write: approve,
  } = useContractWrite({
    address: zetaAddress,
    abi: ZETA_TOKEN_ABI,
    functionName: "approve",
  });

  const {
    data,
    isLoading,
    isSuccess: isCreateFormSuccess,
    writeAsync: createForm,
  } = useContractWrite({
    address: zetaAddress,
    abi: ZK_FORM_FACTORY_ABI,
    functionName: "createForm",
  });

  useEffect(() => {
    console.log(chain);
  }, []);

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

            <form
              action=""
              className="mb-0 mt-2 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <p className="text-center text-lg font-medium">
                Fill in your details
              </p>

              <div className="w-full px-4 py-3">
                <div className="lg:w-12/12 w-full px-4">
                  <label className="block text-sm font-medium text-gray-700">
                    How much do you want to deposit?
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setAmount(e.target.value)}
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>
              </div>

              <div className="w-full px-4 py-3">
                <div className="lg:w-12/12 w-full px-4">
                  <label className="block text-sm font-medium text-gray-700">
                    How many splits you wanna make?
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setSplits(e.target.value)}
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
                  disabled={isSuccess}
                  type="button"
                  onClick={() => {
                    approve({ args: [zkFormFactory, parseEther(amount)] });
                  }}
                  className={`${
                    isSuccess && " opacity-50"
                  } block w-full rounded-lg bg-purple-700 px-5 py-3 text-sm font-medium text-white`}
                >
                  Approve
                </button>
                <button
                  onClick={storeData}
                  disabled={!isSuccess}
                  type="button"
                  className={`${
                    !isSuccess && "opacity-50"
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
