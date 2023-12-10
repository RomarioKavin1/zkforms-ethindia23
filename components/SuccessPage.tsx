import { CheckCircleIcon } from "@heroicons/react/outline";

interface Props {
  msg: string;
}

export default function SuccessPage({ msg }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-md">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircleIcon className="h-10 w-10 text-green-500" />
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">Success!</h1>
        <p className="mt-2 text-gray-600">{msg}</p>
        {/* Add additional content here */}
      </div>
    </div>
  );
}
