"use client";
import { v4 as uuidv4 } from "uuid";
import { createContext, useContext, useState, useMemo } from "react";
// utils
import { FormType } from "@/utils/types";
import { dummyValues } from "@/utils/dummyValues";

interface GlobalDataContextProps {
  data: FormType[];
  // eslint-disable-next-line no-unused-vars
  setData: (val: FormType[]) => void;
}

const GlobalDataContext = createContext({} as GlobalDataContextProps);

export function GlobalDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<FormType[]>([
    {
      id: 1,
      formTitle: "Event Registeration 🎉",
      proof: [
        {
          name: "",
          description: "",
          id: "",
        },
      ],
      form: [
        {
          question: "How was the event",
          questionId: "blabla",
          description: "",
          answer: "",
          options: [],
          type: "Short Text",
          validation: {
            required: "",
          },
        },
        {
          question: "How much rating would you give",
          questionId: "blablabla",
          description: "",
          answer: "",
          options: [],
          type: "Rating",
          validation: {
            required: "",
          },
        },
        {
          question: "Upload files",
          questionId: "blablablaaaa",
          description: "",
          answer: "",
          options: [],
          type: "File Upload",
          validation: {
            required: "",
          },
        },
      ],
    },
  ]);

  const value = useMemo(
    () => ({
      data,
      setData,
    }),
    [data],
  );

  return (
    <GlobalDataContext.Provider value={value}>
      {children}
    </GlobalDataContext.Provider>
  );
}

const useGlobalData = () => {
  const context = useContext(GlobalDataContext);

  if (!context) {
    throw new Error("useGlobalData must be used within a GlobalDataProvider");
  }

  return context;
};

export default useGlobalData;
