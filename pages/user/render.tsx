import DynamicForm from "@/components/Form/FormRender";
import {
  AnonAadhaarProof,
  LogInWithAnonAadhaar,
  useAnonAadhaar,
} from "anon-aadhaar-react";
// react-hook-form
import { FieldValues } from "react-hook-form";
// next
import { useRouter } from "next/router";
import { useEffect } from "react";
import useGlobalData from "@/hooks/useGlobalData";
import { ClaimRequest } from "@sismo-core/sismo-connect-server";
import AnonAadharLogin from "@/components/AnonAadharLogin";
import SismoVerification from "@/components/Utilities/SismoVerification";
import lighthouse from "@lighthouse-web3/sdk";

export default function RenderForm() {
  const { data, setData } = useGlobalData();
  const { query } = useRouter();
  const [anonAadhaar] = useAnonAadhaar();

  const groups = data[0].proof;

  const claim: ClaimRequest[] = groups.map((group) => ({
    groupId: group.id,
  }));
  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  async function onSubmit(data: FieldValues) {
    // console.log(data);
    const uploadResponse = await lighthouse.uploadText(
      data[0],
      `${process.env.NEXT_PUBLIC_LIGHTHOUSE_KEY}`,
      data[0].formTitle,
    );
  }

  if (anonAadhaar.status !== "logged-in") return <AnonAadharLogin />;
  else if (anonAadhaar.status === "logged-in")
    return <SismoVerification claims={claim} />;
  return <DynamicForm id={query.id} onSubmit={onSubmit} />;
}
