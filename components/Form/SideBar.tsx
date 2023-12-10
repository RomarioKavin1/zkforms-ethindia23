import useGlobalData from "@/hooks/useGlobalData";
import { v4 as uuidv4 } from "uuid";
import {
  MdShortText,
  MdFormatAlignLeft,
  MdRadioButtonChecked,
  MdCheckBox,
  MdUploadFile,
  MdElectricBolt,
} from "react-icons/md";
import { useRouter } from "next/router";
import { InputType } from "@/utils/types";

type ContentsType = {
  name: InputType["type"];
  icon: JSX.Element;
};

export default function SideBar() {
  const { data: globalData, setData } = useGlobalData();
  const { query } = useRouter();

  const selectedIndex = globalData.findIndex((val) => val.id == query.id);

  function addElement(op: InputType["type"]) {
    const newData = [...globalData][selectedIndex];
    const lastIndex = newData.form.length;
    newData.form.push({
      question: "",
      questionId: uuidv4(),
      description: "",
      answer: "",
      options: [],
      type: "Short Text",
      validation: {
        required: "",
      },
    });
    if (op === "Single Select") {
      newData.form[lastIndex].type = op;
      newData.form[lastIndex].options = ["", ""];
    } else if (op === "Multiselect") {
      newData.form[lastIndex].type = op;
      newData.form[lastIndex].options = ["", ""];
    } else {
      newData.form[lastIndex].type = op;
    }
    setData([...globalData, newData]);
  }

  const contents: ContentsType[] = [
    {
      name: "Short Text",
      icon: <MdShortText />,
    },
    {
      name: "Long Text",
      icon: <MdFormatAlignLeft />,
    },
    {
      name: "Single Select",
      icon: <MdRadioButtonChecked />,
    },
    {
      name: "Multiselect",
      icon: <MdCheckBox />,
    },
    {
      name: "File Upload",
      icon: <MdUploadFile />,
    },
    {
      name: "Rating",
      icon: <MdElectricBolt />,
    },
  ];

  return (
    <div className="pattern relative w-screen bg-gray-50 ">
      <nav className="fixed left-6 top-2/4 z-20 flex min-h-[auto] min-w-[64px] shrink-0 grow-0 -translate-y-2/4 flex-col justify-around gap-4 rounded-lg border border-t border-gray-200 bg-white/50 p-2.5 shadow-lg backdrop-blur-lg ">
        {contents.map((val, index) => (
          <button
            key={val.name + index}
            type="button"
            onClick={() => addElement(val.name)}
            className={`mb-5 flex min-h-[32px] w-full flex-col items-center justify-center rounded-md bg-indigo-50 p-1.5 ${"hover:text-indigo-600"} `}
          >
            <div className="flex items-center">
              {val.icon}

              <p className=" ml-10 text-center text-lg font-medium">{val.name}</p>
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}
