import React, { memo, ChangeEvent } from "react";
// hooks
import useGlobalData from "@/hooks/useGlobalData";
import GroupId from "@/components/Form/GroupId";
// components
import ToggleButton from "@/components/ToggleButton";
import SideBar from "@/components/Form/SideBar";
import EditableInput from "@/components/Utilities/EditableInput";
import Rating from "@/components/Ratings";
// next
import Link from "next/link";
import Head from "next/head";
// icons
import { MdDelete, MdAddCircle } from "react-icons/md";
import { useRouter } from "next/router";
import FileUpload from "@/components/FileUpload";

function QuestionCard() {
  const { data: globalData, setData } = useGlobalData();
  const { query } = useRouter();

  const selectedIndex = globalData.findIndex((val) => val.id == query.id);

  function toggleRequiredState(formIndex: number) {
    const newGdata = [...globalData];
    if (newGdata[selectedIndex].form[formIndex].validation.required === "") {
      newGdata[selectedIndex].form[formIndex].validation.required =
        "This Field is required";
    } else {
      newGdata[selectedIndex].form[formIndex].validation.required = "";
    }
    setData(newGdata);
  }

  function addOption(formIndex: number, index: number) {
    const newGdata = [...globalData];
    newGdata[selectedIndex].form[formIndex].options?.splice(index + 1, 0, "");
    setData(newGdata);
  }

  function deleteOption(formIndex: number, index: number) {
    const newGdata = [...globalData];
    newGdata[selectedIndex].form[formIndex].options?.splice(index, 1);
    setData(newGdata);
  }

  function onInputChange(
    e: ChangeEvent<HTMLInputElement>,
    op: string,
    index: number,
    formIndex?: number,
  ) {
    const newGdata = [...globalData];
    if (op === "formTitle") newGdata[selectedIndex].formTitle = e.target.value;
    else if (op) newGdata[selectedIndex].form[index][op] = e.target.value;
    else if (formIndex)
      newGdata[selectedIndex].form[formIndex].options[index] = e.target.value;
    setData(newGdata);
  }

  function deleteCard(index: number) {
    const newGdata = [...globalData];
    newGdata[selectedIndex].form.splice(index, 1);
    setData(newGdata);
  }

  return <GroupId />;

  return (
    <>
      <Head>
        <title></title>
        <meta name="title" content="" />
      </Head>
      <SideBar />

      <div className="relative flex min-h-screen w-full items-start justify-center overflow-auto bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 px-4">
        <div className="bg-white px-5 py-20 sm:px-10 lg:w-[50rem]">
          <EditableInput
            onChange={(e) => onInputChange(e, "formTitle", selectedIndex)}
            className="mb-16 text-6xl font-bold text-gray-900"
            value={globalData[selectedIndex]?.formTitle}
          />
          {/* <div className="mb-20 rounded-md border-2 border-solid border-gray-400 bg-white px-4 py-5 sm:px-6">
            <p className="mb-3 text-3xl font-bold text-gray-900">
              Reward Configurations
            </p>
            <input
              type="text"
              className="my-3 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter the count threshold"
            />
            <div className="flex items-center justify-center">
              <input
                type="text"
                className="my-3 block w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your Deposit Amount"
              />
              <button className="ml-2 rounded-md bg-indigo-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Deposit
              </button>
            </div>
          </div> */}
          {globalData[selectedIndex]?.form.map((data, formIndex) => (
            <div
              key={data.questionId}
              className="mb-20 rounded-md border-2 border-solid border-gray-400 bg-white px-4 py-5 sm:px-6"
            >
              <p className="mb-3 text-3xl font-bold text-gray-900">{data.type}</p>
              <input
                type="text"
                value={data.question}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Type your Question"
                onChange={(e) => onInputChange(e, "question", formIndex)}
              />
              <input
                type="text"
                value={data.description}
                className="my-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Description (optional)"
                onChange={(e) => onInputChange(e, "description", formIndex)}
              />
              {data.type === "Short Text" && (
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Your Answer"
                />
              )}
              {data.type === "Long Text" && (
                <textarea
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                ></textarea>
              )}
              {data.type === "Rating" && (
                <>
                  {/* <input
                    type="number"
                    maxLength={10}
                    value={data.answer}
                    className="my-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter number of stars"
                    onChange={(e) => onInputChange(e, "answer", formIndex)}
                  /> */}
                  <Rating maxRating={10} />
                </>
              )}
              {data.type === "File Upload" && (
                <FileUpload isEmpty={true} disabled />
              )}
              {data.options.length > 0 &&
                data.options.map((val, indexx) => (
                  <div
                    className="flex items-center"
                    key={`${indexx}-${data.questionId}`}
                  >
                    <input
                      value={val}
                      className="my-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => onInputChange(e, "", indexx, formIndex)}
                    />
                    {indexx > 0 && (
                      <button
                        onClick={() => addOption(formIndex, indexx)}
                        className="mx-2 text-indigo-500"
                        type="button"
                      >
                        <MdAddCircle className="h-7 w-7" />
                      </button>
                    )}
                    {indexx > 1 && (
                      <button
                        onClick={() => deleteOption(formIndex, indexx)}
                        type="button"
                        className="text-red-500"
                      >
                        {" "}
                        <MdDelete className="h-7 w-7" />{" "}
                      </button>
                    )}
                  </div>
                ))}
              <div className="mt-5 flex">
                <ToggleButton
                  label="Required"
                  setEnabled={() => toggleRequiredState(formIndex)}
                  enabled={data.validation.required !== ""}
                />
                <button
                  type="button"
                  className="ml-3 text-red-500"
                  onClick={() => deleteCard(formIndex)}
                >
                  <MdDelete className="h-7 w-7" />{" "}
                </button>
              </div>
            </div>
          ))}
          <Link
            href={`/form/${query.id}/render`}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {" "}
            Preview
          </Link>
        </div>
      </div>
    </>
  );
}

export default memo(QuestionCard);
