import SismoButton from "./SismoButton";
import { ClaimRequest } from "@sismo-core/sismo-connect-server";
type ButtonProps = {
  claims: ClaimRequest[];
};
export default function SismoVerification({ claims }: ButtonProps) {
  return (
    <div className="min-h-screen w-full overflow-auto bg-white px-4">
      <header className="w-full lg:w-11/12">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              paddingLeft: "200px",
            }}
          >
            <div className="mt-4 justify-start">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                ZK Forms
              </h1>
              <h1 className="via-purple-140 bg-gradient-to-tr from-indigo-500 to-teal-200 bg-clip-text pt-5 text-sm font-bold text-transparent opacity-75 sm:text-2xl md:text-left md:text-5xl">
                Sismo - Verification
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex justify-center">
        <div className="mt-4 w-full rounded-[20px] border-2 border-gray-200 bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 p-4 px-8 lg:w-8/12">
          <div>
            <p className="mb-2 text-center font-bold leading-normal md:text-left md:text-2xl">
              Name
            </p>{" "}
            <p className="mb-8 text-center font-normal leading-normal md:text-left md:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>{" "}
          </div>
          <div>
            <p className="mb-2 text-center font-bold leading-normal md:text-left md:text-2xl">
              Name
            </p>{" "}
            <p className="mb-8 text-center font-normal leading-normal md:text-left md:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>{" "}
          </div>
          <div>
            <p className="mb-2 text-center font-bold leading-normal md:text-left md:text-2xl">
              Name
            </p>{" "}
            <p className="mb-8 text-center font-normal leading-normal md:text-left md:text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>{" "}
          </div>
        </div>
      </div>
      <div
        style={{
          justifyContent: "start",
          paddingLeft: "235px",
          paddingTop: "50px",
        }}
      >
        <SismoButton claims={claims} />
      </div>
    </div>
  );
}
