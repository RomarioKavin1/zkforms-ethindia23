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
          groupId: "",
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
    {
      id: 100,
      formTitle: "Event Registration 🎉",
      proof: [
        {
          name: "",
          description: "",
          groupId: "",
        },
      ],
      form: [
        {
          question: "Let's start with your name",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Email address (we promise not to spam your inbox… too much)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Email",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Phone number (for emergencies or when we accidentally misplace the event)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Number",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Job title (are you the CEO, office ninja, or coffee expert?)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Dropdown",
          options: ["CEO", "CFO"],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Company/Organization (so we can properly stalk you on LinkedIn)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Industry (because it's important to know if we have more wizards or dragons attending)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "How Did You Hear About the Event? Did a magical unicorn whisper it to you? Or did it just pop up in your dreams?",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Long Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Your twitter ID!",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Your LinkedIn ID, so that we properly stalk you :)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Write us a haiku about your excitement for this event or tell us a joke to make our day!",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Long Text",
          options: [],
          validation: {
            required: "",
          },
        },
      ],
    },
    {
      id: 101,
      formTitle: "Survey 🧐",
      proof: [
        {
          name: "",
          description: "",
          groupId: "",
        },
      ],
      form: [
        {
          question: "Let's start with your name",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Email address (we promise not to spam your inbox… too much)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Email",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Phone number (for emergencies or when we accidentally misplace the event)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Number",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Job title (are you the CEO, office ninja, or coffee expert?)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Dropdown",
          options: ["CEO", "CFO"],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Company/Organization (so we can properly stalk you on LinkedIn)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Industry (because it's important to know if we have more wizards or dragons attending)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Your twitter ID!",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Your LinkedIn ID, so that we properly stalk you :)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Short Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "How Did You Hear About the Event? Did a magical unicorn whisper it to you? Or did it just pop up in your dreams?",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Long Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "On a scale from meh to mind-blowing, how awesome was our event?",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Long Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "What were your key take aways from this event?",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Long Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Who was your favorite speaker? (We promise not to let the others know… maybe)",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Multiselect",
          options: ["Speaker A", "Speaker B", "Speaker C", "Speaker D"],
          validation: {
            required: "",
          },
        },
        {
          question: "How relevant and valuable was the content presented?",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Rating",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "Rate the venue from 'meh' to 'I want to live here forever'",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Rating",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "What did you like most about the event?",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Long Text",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "How likely are you to attend another event organized by us? Or refer this event to a friend or colleague",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Rating",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question: "How frequently do you attend events of this nature?",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Single Select",
          options: ["yes", "nah"],
          validation: {
            required: "",
          },
        },
        {
          question: "Can you upload any best moments of today's event?",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "File Upload",
          options: [],
          validation: {
            required: "",
          },
        },
        {
          question:
            "Write a short limerick summarizing your event experience. (Extra points for rhyming 'unicorn' with 'popcorn')",
          questionId: uuidv4(),
          description: "",
          answer: "",
          type: "Long Text",
          options: [],
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
