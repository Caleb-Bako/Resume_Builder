import { useRef, useState } from "react";
import formStyles from "../TemplateStyles";
import { useReactToPrint } from "react-to-print";
import closeIcon from '../../assets/close-x-svgrepo-com.svg';
import React from 'react';

interface Template1Props {
  setToggle: React.Dispatch<React.SetStateAction<number>>;
  name: string,
  setName :React.Dispatch<React.SetStateAction<string>>
}

function Template1({ setToggle, name, setName }: Template1Props) {
  const [selectedStyle] = useState("modern");
  const [visible, setVisible] = useState(true);
  const [workExperiences, setWorkExperiences] = useState<
    { company: string; contents: string[] }[]
  >([]);
  const [skillInputs, setSkillInputs] = useState<string[]>([]);
  const styles = formStyles[selectedStyle];

  const componentRef = useRef<HTMLFormElement>(null);

  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { company: "", contents: [] }]);
  };

  const updateCompany = (index: number, value: string) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index].company = value;
    setWorkExperiences(updatedExperiences);
  };

  const addContent = (index: number) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index].contents.push("");
    setWorkExperiences(updatedExperiences);
  };

  const updateContent = (expIndex: number, contentIndex: number, value: string) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[expIndex].contents[contentIndex] = value;
    setWorkExperiences(updatedExperiences);
  };

  const addSkillInput = () => {
    setSkillInputs([...skillInputs, ""]);
  };

  const updateSkill = (index: number, value: string) => {
    const updatedSkills = [...skillInputs];
    updatedSkills[index] = value;
    setSkillInputs(updatedSkills);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setVisible(false);
  
    setTimeout(() => {
      reactToPrintFn();
    }, 100);
  };
  

  // useEffect(() => {
  //   if (!visible) {
  //     reactToPrintFn();
  //   }
  // }, [visible]);

  const handleVisibleChange = () => {
    setVisible(true);
  };

  const reactToPrintFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
    onAfterPrint: handleVisibleChange,
  });

  return (
    <div className="w-full bg-white mx-auto p-4 sm:p-6 md:p-8 lg:border lg:border-gray-300 overflow-y-auto break-inside-avoid">
      <form
        onSubmit={handleSubmit}
        className={`${styles.container} flex flex-col break-inside-avoid`}
        ref={componentRef}
      >
        {visible &&(
        <div className="flex justify-end">
          <button onClick={() => setToggle(0)} type="button" className="print:hidden">
            <img src={closeIcon} alt="Close" className="w-6 h-6" />
          </button>
        </div>)}
        <header className="text-center my-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.name} w-full`}
          />
          <input
            type="text"
            placeholder="Enter social handle"
            className={`${styles.social} w-full`}
          />
          <input
            type="email"
            placeholder="Enter email"
            className={`${styles.social} w-full`}
          />
        </header>

        <section>
          <h2 className={`${styles.header} border-b-2 border-indigo-500`}>
            Work Experience
          </h2>
          {workExperiences.map((exp, expIndex) => (
            <div key={expIndex} className="my-2">
              <div className={`${styles.content_header}`}>
                <input
                  type="text"
                  placeholder="e.g., Star Labs"
                  value={exp.company}
                  onChange={(e) => updateCompany(expIndex, e.target.value)}
                  className="w-full"
                />
                {visible &&(
                <button
                  type="button"
                  onClick={() => addContent(expIndex)}
                  className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 print:hidden"
                >
                  +
                </button>)}
              </div>
              {exp.contents.map((content, contentIndex) => (
                <ul key={contentIndex} className={styles.list}>
                  <li>
                    <input
                      type="text"
                      placeholder="e.g., Helped in keeping Central City Safe"
                      value={content}
                      onChange={(e) =>
                        updateContent(expIndex, contentIndex, e.target.value)
                      }
                      className="w-11/12"
                    />
                  </li>
                </ul>
              ))}
            </div>
          ))}
          {visible &&(
          <button
            type="button"
            onClick={addWorkExperience}
            className="w-full px-2 py-1 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 print:hidden"
          >
            Add Work Experience
          </button>)}
        </section>
        {/* Education Section */}
        <section className="my-6">
          <div className="border-b-2 border-indigo-500 ">
            <h2 className={styles.header}>Education</h2>
          </div>
          <input
            type="text"
            placeholder="University Name"
            className={styles.content_header}
          />
          <input
            type="text"
            placeholder="Degrees"
            className={styles.content}
          />
        </section>
        <section className="my-4">
          <h2 className={`${styles.header} border-b-2 border-indigo-500`}>
            Skills
          </h2>
          {skillInputs.map((input, index) => (
            <ul key={index} className={styles.list}>
              <li>
                <input
                  key={index}
                  type="text"
                  placeholder="Things you are good at (e.g., JavaScript)"
                  value={input}
                  onChange={(e) => updateSkill(index, e.target.value)}
                  className="w-11/12 my-1"
                />
            </li>
            </ul>
          ))}
          {visible &&(
          <button
            type="button"
            onClick={addSkillInput}
            className="w-full px-2 py-1 mt-2 mb-2 bg-green-500 text-white rounded hover:bg-green-600 print:hidden"
          >
            Add Skill
          </button>)}
        </section>
        {visible &&(
        <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 print:hidden"
      >
        Download
      </button>)}
      </form>
    </div>
  );
}

export default Template1;
