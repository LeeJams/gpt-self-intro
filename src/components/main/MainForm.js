import { useState } from "react";
import InputForm from "../ui/InputForm";
import RadioForm from "../ui/RadioForm";
import Image from "next/image";

export default function MainForm(props) {
  const [form, setForm] = useState({
    company: "",
    job: "",
    career: "신입",
    major: "전공",
    experience: "",
  });

  const [question, setQuestion] = useState("");
  
  const onFormChange = (e, key) => {
    setForm({
      ...form,
      [key]: e.target.value,
    });
  };

  const questionHandler = (e) => {
    setQuestion(e.target.value);
  };

  const checkValidation = () => {
    let flag = true;
    for (let key in form) {
      if (form[key].trim() === "") {
        alert("모든 입력 값을 넣어주세요.");
        flag = false;
        break;
      }
    }
    return flag;
  };

  const submit = async () => {
    if (!checkValidation()) return;
    props.submit({ ...form, question });
  };

  return (
    <>
      <main>
        <Image src="/intro.png" alt="intro" width={500} height={500} />
        <div className="max-w-md mx-auto">
          <form className="px-5 mb-4">
            <InputForm
              label="회사명"
              id="company"
              value={form.company}
              placeholder="지원할 회사 명을 입력해주세요."
              onInputChange={onFormChange}
            />
            <InputForm
              label="직군명"
              id="job"
              value={form.job}
              placeholder="지원할 직군을 입력해주세요."
              onInputChange={onFormChange}
            />
            <RadioForm
              options={["신입", "경력"]}
              name="career"
              value={form.career}
              onInputChange={onFormChange}
            />
            <RadioForm
              options={["전공", "비전공"]}
              name="major"
              value={form.major}
              onInputChange={onFormChange}
            />
            <InputForm
              label="경험"
              id="experience"
              value={form.experience}
              placeholder="경험을 입력해주세요. ex) 호주 워킹홀리데이"
              onInputChange={onFormChange}
            />
            <InputForm
              label="질문"
              id="question"
              value={question}
              placeholder="질문을 입력해주세요."
              onInputChange={questionHandler}
            />
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
