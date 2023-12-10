"use client";

import { memo, ReactNode, ChangeEvent, useState } from "react";
// react-hook-form
import { FieldValues, useForm } from "react-hook-form";
// utils
import { InputType } from "@/utils/types";
//  hooks
import useGlobalData from "@/hooks/useGlobalData";
import Rating from "../Ratings";
import FileUpload from "../FileUpload";

type WrapperProps = {
  field: InputType;
  index?: number;
  children: ReactNode;
};

type Props = {
  id: any;
  onSubmit: (d: FieldValues) => void;
  buttonName?: string;
};

const DynamicForm = (props: Props) => {
  const { data: globalData, setData } = useGlobalData();

  const data = globalData.find((val) => val.id == props.id);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  function handleFileChange(e: ChangeEvent<HTMLInputElement>, questionId: string) {
    if (e.target.files && e.target.files[0]) {
      const newData = [...globalData];
      const a = newData.findIndex((val) => val.id === data?.id);
      const b = newData[a].form.findIndex((val) => val.questionId === questionId);
      newData[a].form[b].answer = e.target.files[0];
      localStorage.setItem("globalData", JSON.stringify(newData));
      setData(newData);
    }
  }

  function handleRatingChange(e: number, questionId: string) {
    const newData = [...globalData];
    const a = newData.findIndex((val) => val.id === data?.id);
    const b = newData[a].form.findIndex((val) => val.questionId === questionId);
    newData[a].form[b].answer = e;
    localStorage.setItem("globalData", JSON.stringify(newData));
    setData(newData);
  }

  const Wrapper = ({ field, children }: WrapperProps) => {
    return (
      <div className="mb-10">
        <label className="text-2xl font-medium">{field.question}</label>
        <div className="mt-3">{children}</div>
        {errors[field.question] && (
          <p role="alert" className="mt-2 text-red-500">{`${errors[field.question]
            ?.message}`}</p>
        )}
      </div>
    );
  };

  const renderFormControl = (field: InputType) => {
    switch (field.type) {
      case "Short Text":
      case "Email":
      case "Number":
      case "Password":
        return (
          <Wrapper key={field.questionId} field={field}>
            <input
              className="w-full rounded-lg border-gray-300 p-4 pe-12 text-sm shadow-sm"
              type={
                field.type === "Short Text" ? "text" : field.type.toLowerCase()
              }
              {...register(field.question, {
                ...field.validation,
              })}
            />
          </Wrapper>
        );
      case "Dropdown":
        return (
          <Wrapper key={field.questionId} field={field}>
            <select
              {...register(field.question, {
                ...field.validation,
              })}
              className="w-full rounded-lg border-gray-300 p-4 text-gray-700 sm:text-sm lg:text-lg"
            >
              {field.options?.map((val, indexx) => (
                <option key={`${val}-${indexx}-${field.questionId}`} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </Wrapper>
        );
      case "Multiselect":
        return (
          <Wrapper key={field.questionId} field={field}>
            <div className="space-y-2">
              {field.options?.map((val, indexx) => (
                <div
                  key={`${val}-${indexx}-${field.questionId}`}
                  className="relative flex items-start"
                >
                  <div className="flex h-6 items-center">
                    <input
                      value={val}
                      type="checkbox"
                      {...register(field.question, {
                        ...field.validation,
                      })}
                      className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="ml-3">
                    <label className="text-lg font-light">{val}</label>
                  </div>
                </div>
              ))}
            </div>
          </Wrapper>
        );
      case "Single Select":
        return (
          <Wrapper key={field.questionId} field={field}>
            {field.options.map((val, indexx) => (
              <div
                key={`${val}-${indexx}-${field.questionId}`}
                className="flex items-center"
              >
                <input
                  value={val}
                  type="radio"
                  className="border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  {...register(field.question, {
                    ...field.validation,
                  })}
                />
                <label className="ml-3 block text-lg font-light">{val}</label>
              </div>
            ))}
          </Wrapper>
        );
      case "Long Text":
        return (
          <Wrapper key={field.questionId} field={field}>
            <textarea
              {...register(field.question, {
                ...field.validation,
              })}
              rows={4}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={""}
            ></textarea>
          </Wrapper>
        );
      case "Rating":
        return (
          <Wrapper key={field.questionId} field={field}>
            <Rating
              questionId={field.questionId}
              onChange={handleRatingChange}
              value={field.answer}
              maxRating={10}
            />
          </Wrapper>
        );
      case "File Upload":
        return (
          <Wrapper key={field.questionId} field={field}>
            <FileUpload
              value={field.answer}
              isEmpty={field.answer === ""}
              onChange={(e) => handleFileChange(e, field.questionId)}
            />
          </Wrapper>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative flex min-h-screen w-full items-start justify-center overflow-auto bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 px-4">
        <div className="my-5 bg-white px-5 py-20 shadow sm:rounded-lg sm:px-10 lg:w-[50rem]">
          <h1 className="mb-16 text-6xl font-bold text-gray-900">
            {data?.formTitle}
          </h1>
          {data ? (
            <form onSubmit={handleSubmit(props.onSubmit)} noValidate>
              {data.form.map((val) => renderFormControl(val))}
              <button
                className="mt-3 w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={isSubmitting}
              >
                {props.buttonName}
              </button>
            </form>
          ) : (
            <h1>Error</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default memo(DynamicForm);
