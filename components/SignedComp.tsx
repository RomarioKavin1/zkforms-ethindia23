"use client";

import { useState, useEffect } from "react";
import { useSignMessage, useAccount } from "wagmi";
import { recoverMessageAddress } from "viem";
import lighthouse from "@lighthouse-web3/sdk";
import { useRouter } from "next/router";
import useGlobalData from "@/hooks/useGlobalData";

export default function SignMessage() {
  const [loading, setLoading] = useState(true);
  const [recoveredAddress, setRecoveredAddress] = useState<string>();
  const router = useRouter();
  const { data: globalData, setData } = useGlobalData();
  const { address } = useAccount();

  console.log(router.query.id);

  const selectedIndex = globalData.findIndex((val) => val.id == router.query.id);

  const {
    data: signMessageData,
    error,
    isLoading,
    signMessage,
    variables,
  } = useSignMessage();

  useEffect(() => {
    signMessage({ message: JSON.stringify(globalData[selectedIndex]) });
  }, []);

  useEffect(() => {
    (async () => {
      if (variables?.message && signMessageData) {
        const recoveredAddress = await recoverMessageAddress({
          message: variables?.message,
          signature: signMessageData,
        });
        setRecoveredAddress(recoveredAddress);
      }

      if (!isLoading && !error && signMessageData) {
        const yourText = JSON.stringify(globalData[selectedIndex]);
        const apiKey = `${process.env.NEXT_PUBLIC_LIGHTHOUSE_KEY}`;
        const publicKey = address ? address : "";
        const signedMessage = signMessageData;
        const name = globalData[selectedIndex].formTitle;

        const response = await lighthouse.textUploadEncrypted(
          yourText,
          apiKey,
          publicKey,
          signedMessage,
        );
        console.log(response);
        setLoading(false);
      }
    })();
  }, [signMessageData, variables?.message]);

  return (
    <>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>Form Created successfully</h1>
          <button type="button" onClick={() => router.push("/home")}>
            Bake some more
          </button>
        </>
      )}
    </>
  );
}
