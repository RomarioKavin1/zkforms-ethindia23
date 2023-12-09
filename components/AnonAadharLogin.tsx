import { AnonAadhaarProof, LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from "react";

export default function AnonAadharLogin() {
  const [anonAadhaar] = useAnonAadhaar();
  // useEffect(() => {
  //   console.log("Anon Aadhaar status: ", anonAadhaar.status);
  // }, [anonAadhaar]);
  return (
    <div className="relative flex min-h-screen w-full items-start justify-center overflow-auto bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 px-4">
      <div className="h-full">
        <main className="mx-auto flex min-h-[75vh] w-full flex-col justify-between rounded-2xl p-4 sm:max-w-screen-sm sm:p-8">
          <div className="mt-4 justify-start">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              ZKForms
            </h1>
          </div>
          <h1 className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 bg-clip-text pb-4 text-sm font-bold text-transparent opacity-75 sm:text-2xl md:text-left md:text-5xl">
            Anon Aadhaar - Login
          </h1>
          <div className="text-sm sm:text-lg">
            Initially, you&apos;ll need to log in using your Aadhaar card. During
            the login process, a proof is generated to confirm the authenticity of
            your Aadhaar card, which is signed by the Indian government. This proof
            is then verified to grant you access.
            <br></br>
            Verify your identity anonymously using your Aadhaar card.
          </div>

          {/* Import the Connect Button component */}
          <div className="flex w-full place-content-center">
          <div>
        <LogInWithAnonAadhaar />
              <p>{anonAadhaar?.status}</p>
            </div>
            <div>
              {anonAadhaar?.status === "logged-in" && (
                <>
                  <p>✅ Proof is valid</p>
                  <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
