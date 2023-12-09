import { HTMLInputTypeAttribute } from "react";

export interface InputType {
  question: string;
  questionId: string;
  description?: string;
  answer: any;
  type:
    | "Long Text"
    | "Short Text"
    | "Email"
    | "Number"
    | "Password"
    | "Single Select"
    | "Multiselect"
    | "Dropdown"
    | "Rating"
    | "File Upload";
  options: Array<string>;
  validation: {
    required?: string | boolean;
    validate?: (v: any) => boolean;
    minLength?:
      | {
          value: number;
          message: string;
        }
      | number;
    maxLength?:
      | {
          value: number;
          message: string;
        }
      | number;
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

export interface FormType {
  id: number | string;
  formTitle: string;
  formDes?: string;
  proof: Group[];
  form: InputType[];
}
export interface Group{
  name: string;
  description: string;
  groupId: string;
}