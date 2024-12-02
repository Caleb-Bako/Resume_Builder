import { useEffect, useRef, useState } from "react";
import formStyles from "../TemplateStyles";
import { useReactToPrint } from "react-to-print";
import closeIcon from '../../assets/close-x-svgrepo-com.svg';
import React from 'react';

interface Template1Props {
  setToggle: React.Dispatch<React.SetStateAction<number>>;
  name: string,
  setName :React.Dispatch<React.SetStateAction<string>>
}

function Template1({setToggle,name,setName}:Template1Props) {
  const [selectedStyle, setSelectedStyle] = useState("modern");
  const [visible,setVisible] = useState(true);
  const [workExperiences, setWorkExperiences] = useState<
    { company: string; contents: string[] }[]
  >([]);
  const [skillInputs, setSkillInputs] = useState<string[]>([]);
  const styles = formStyles[selectedStyle];

  const componentRef = useRef<HTMLFormElement>(null);

  // Add a new work experience
  const addWorkExperience = () => {
    setWorkExperiences([...workExperiences, { company: "", contents: [] }]);
  };

  // Update the company name of a specific work experience
  const updateCompany = (index: number, value: string) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index].company = value;
    setWorkExperiences(updatedExperiences);
  };

  // Add a content item to a specific work experience
  const addContent = (index: number) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index].contents.push("");
    setWorkExperiences(updatedExperiences);
  };

  // Update a specific content item for a work experience
  const updateContent = (
    expIndex: number,
    contentIndex: number,
    value: string
  ) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[expIndex].contents[contentIndex] = value;
    setWorkExperiences(updatedExperiences);
  };

  // Add new skill input
  const addSkillInput = () => {
    setSkillInputs([...skillInputs, ""]);
  };

  // Update skill input
  const updateSkill = (index: number, value: string) => {
    const updatedSkills = [...skillInputs];
    updatedSkills[index] = value;
    setSkillInputs(updatedSkills);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setVisible(false);
  };

  useEffect(()=>{
    if(!visible){
      reactToPrintFn();
    }
  },[visible])

  const handleVisibleChange = () =>{
    setVisible(true);
  }

  const reactToPrintFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
    onAfterPrint: handleVisibleChange,
  });



  return (
    <div className=" w-[470px] h-[1123px] lg:w-[794px] lg:h-[1123px] bg-white mx-auto border border-gray-300">
      <form onSubmit={handleSubmit} className={styles.container} ref={componentRef}>
        <div className="flex justify-end">
        <button onClick={()=>setToggle(0)} type="button">
          <img
            src={closeIcon}
            alt="Resume Icon"
            className="w-12 h-12 mb-2"
          />
        </button>
        </div>
        <header className="text-center my-6">
          <div className="border-b-2 border-indigo-500 pb-3">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={ev => setName(ev.target.value)}
              className={styles.name}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter social handle"
              className={styles.social}
            />
          </div>
          <div className="border-b-2 border-indigo-500 pb-3">
            <input
              type="email"
              placeholder="Enter email"
              className={styles.social}
            />
          </div>
        </header>

        {/* Work Experience Section */}
        <div>
          <div className="flex justify-between border-b-2 border-indigo-500 ">
            <h2 className={styles.header}>Work Experience</h2>
            {visible &&(
              <button
                type="button"
                onClick={addWorkExperience}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mb-0.5"
              >
                +
            </button>
            )}
          </div>
          {workExperiences.map((exp, expIndex) => (
            <div key={expIndex}>
              {/* Company Name Input */}
              <div className={styles.content_header}>
                <input
                  type="text"
                  placeholder="e.g Star Labs"
                  value={exp.company}
                  onChange={(e) => updateCompany(expIndex, e.target.value)}
                />
                {visible &&(
                  <button
                    type="button"
                    onClick={() => addContent(expIndex)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-0.5"
                  >
                    +
                  </button>
                )}
              </div>

              {/* Content Inputs */}
              {exp.contents.map((content, contentIndex) => (
                <ul className={styles.list} key={contentIndex}>
                  <li>
                    <input
                      type="text"
                      placeholder="e.g Helped in keeping Central City Safe"
                      className={styles.content}
                      value={content}
                      onChange={(e) =>
                        updateContent(expIndex, contentIndex, e.target.value)
                      }
                    />
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="my-6">
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
        </div>

        {/* Skills Section */}
        <div className="my-6">
          <div className="flex justify-between border-b-2 border-indigo-500">
            <h2 className={styles.header}>Skills</h2>
            {visible &&(
              <button
                type="button"
                onClick={addSkillInput}
                className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mb-0.5"
              >
                +
              </button>
            )}
          </div>
          {skillInputs.map((input, index) => (
            <ul className={styles.list} key={index}>
              <li>
                <input
                  type="text"
                  placeholder="Things you are good at e.g JavaScript"
                  className={styles.content}
                  value={input}
                  onChange={(e) => updateSkill(index, e.target.value)}
                />
              </li>
            </ul>
          ))}
        </div>
      </form>
      <button onClick={handleSubmit}>Download</button>
    </div>
  );
}

export default Template1;
