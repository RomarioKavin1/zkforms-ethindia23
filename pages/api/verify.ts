import {
  AuthType,
  ClaimType,
  SismoConnect,
  SismoConnectResponse,
  SismoConnectVerifiedResult,
} from "@sismo-core/sismo-connect-server";
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from "next";

const sismoConnect = SismoConnect({
  config: {
    appId: "0xa393d5029d94e6f05aeebcfa940405c3",
    vault: {
      // For development purposes insert the Data Sources that you want to impersonate here
      // Never use this in production
      impersonate: [
        // EVM
        "leo21.sismo.eth",
        "0xa4c94a6091545e40fc9c3e0982aec8942e282f38",
        // Github
        "github:leo21",
        // Twitter
        "twitter:leo21_eth",
        // Telegram
        "telegram:leo21",
      ],
    },
  },
});
async function verifyResponse(
  groupId: string,
  sismoConnectResponse: SismoConnectResponse
) {
  const result: SismoConnectVerifiedResult = await sismoConnect.verify(
    sismoConnectResponse,
    {
      auths: [{ authType: AuthType.VAULT }],
      claims: [{ groupId }],
    }
  );
  console.log(result);
  return result;
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { groupId, response } = req.body;
    try {
      const result = await verifyResponse(groupId, response);
      res.status(200).json({ result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error", message: error });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
// this is the API route that is called by the SismoConnectButton
// export async function POST(req: Request) {
//   const sismoConnectResponse = await req.json();
//   try {
//     // verify the sismo connect response that corresponds to the request
//     const result: SismoConnectVerifiedResult = await sismoConnect.verify(sismoConnectResponse, {
//       auths: [{ authType: AuthType.GITHUB }],
//       claims: [
//         // ENS DAO Voters
//         { groupId: "0x85c7ee90829de70d0d51f52336ea4722" }, 
//         // Gitcoin passport with at least a score of 15
//         { groupId: "0x1cde61966decb8600dfd0749bd371f12", value: 15, claimType: ClaimType.GTE },
//       ],
//       // verify signature from users.
//       signature: { message: "I vote Yes to Privacy" },
//     });
//     return NextResponse.json(result, { status: 200 });
//   } catch (e: any) {
//     console.error(e);
//     return NextResponse.json(e.message, { status: 500 });
//   }
// }
