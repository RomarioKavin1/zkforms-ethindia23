import FormRender from "@/components/Form/FormRender";
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

export default function RenderForm() {
  const { data } = useGlobalData();
  const router = useRouter();
  const [anonAadhaar] = useAnonAadhaar();

  const groups = data[0].proof;

  const claim: ClaimRequest[] = groups.map((group) => ({
    groupId: group.id,
  }));

  useEffect(() => {
    console.log("Anon Aadhaar status: ", anonAadhaar.status);
  }, [anonAadhaar]);

  async function onSubmit(data: FieldValues) {
    router.push("/user/groupid");
  }

  return (
    <FormRender
      buttonName="Create Form"
      id={router.query.id}
      onSubmit={onSubmit}
    />
  );
}
