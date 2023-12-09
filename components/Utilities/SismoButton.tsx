"use client";

import {
  SismoConnectButton,
  AuthType,
  SismoConnectResponse,
  ClaimType,
  ClaimRequest,
} from "@sismo-core/sismo-connect-react";
import router from "next/router";
import { useState } from "react";
type ButtonProps = {
  claims:ClaimRequest[]
}
export default function SismoButton({claims}:ButtonProps) {
  const [sismoresponse, setSismoresponse] = useState("")
  return (
    <SismoConnectButton
      config={{
        appId: "0xa393d5029d94e6f05aeebcfa940405c3",
        vault: {
            impersonate: [
              "leo21.sismo.eth",
              "0xA4C94A6091545e40fc9c3E0982AEc8942E282F38",
              "0x1d6f2f0356b3defadf14b1a0f8a3dcda89367d68",
              "0x1b9424ed517f7700e7368e34a9743295a225d889",
              "0x82fbed074f62386ed43bb816f748e8817bf46ff7",
              "0xc281bd4db5bf94f02a8525dca954db3895685700",
              "github:leo21",
              "twitter:leo21_eth",
              "telegram:leo21",
            ],
          },
        }}
        auths={[{ authType: AuthType.GITHUB }]}
        claims={claims} 
        signature={{ message: "I vote Yes to Privacy" }}
        onResponse={async (response: SismoConnectResponse) => {
         setSismoresponse(JSON.stringify(response))
         console.log(sismoresponse)
         router.push(`/sismoredirect`);
        }}
        text="Verify with Sismo"
        theme="light"
        overrideStyle={{fontFamily: "helvetica",fontSize: "16px",fontWeight:"700",backgroundColor:"rgb(238 242 255)",color:"#111827",border:"none",borderRadius:"5px",padding:"10px 20px",cursor:"pointer"}}
      />
    );
  }