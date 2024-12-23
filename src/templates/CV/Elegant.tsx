import React, {useRef, useState } from "react";
import cvFormStyles from "./CV_Templates";
import { useReactToPrint } from "react-to-print";
import closeIcon from '../../assets/close-x-svgrepo-com.svg';
import PopUp from "../../components/Popup";

interface CVProps {
  setToggle: React.Dispatch<React.SetStateAction<number>>;
  toggle: number,
  selectedStyle: string,
  setSelectedStyle :React.Dispatch<React.SetStateAction<string>>
}

function ModernDesign({ setToggle,selectedStyle,setSelectedStyle,toggle }: CVProps){
    const [visible, setVisible] = useState(true);
    const [workExperiences, setWorkExperiences] = useState<
      { company: string; contents: string[] }[]
    >([]);
    const [socialLinks,setSocialLinks] =  useState<
      { link: string; image: string }[]
    >([]);
    const [skillInputs, setSkillInputs] = useState<string[]>([]);
    const styles = cvFormStyles[selectedStyle];

    const componentRef = useRef<HTMLFormElement>(null);
    const textAreaRef = useRef<(HTMLTextAreaElement| null)[]>([]);

    const resizeTextArea = (index:number) => {
      const textarea = textAreaRef.current[index]
      if (textarea) {
        textarea.style.height = "auto"; // will not work without this!
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };
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
  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { link: "", image: "" }]);
  };

  const updateSocials = (index: number, value: string) => {
    const updatedSkills = [...socialLinks];
    updatedSkills[index].link = value;
    setSocialLinks(updatedSkills);
    socialLinkIcon()
  };

  const socialLinkIcon=()=>{
   socialLinks.forEach((element,index) => {
    if(element.link.includes("@gmail.com")){
      socialLinks[index].image = "gmail";
    }
    console.log(element);
    });

  }

  const deleteSocialLink = (index: number) => {
    const updatedLinks = socialLinks.filter((_, i) => i !== index);
    console.log("Updated Social Links:", updatedLinks); // Logs the new array without the deleted item
    setSocialLinks(updatedLinks);
  };
  
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setVisible(false);
  
    setTimeout(() => {
      reactToPrintFn();
    }, 100);
  };
  

  const handleVisibleChange = () => {
    setVisible(true);
  };

  const reactToPrintFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
    onAfterPrint: handleVisibleChange,
  });

  if (selectedStyle === '') return(
    <PopUp selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} toggle={toggle}/>
  )

  return (
    <div className={styles.container}>
      {visible &&(
        <div className="flex justify-end">
          <button onClick={() => setToggle(0)} type="button" className="print:hidden">
            <img src={closeIcon} alt="Close" className="w-6 h-6" />
          </button>
        </div>)}
      <form  ref={componentRef} className={styles.structure}>
        <section className={styles.section}>
            <textarea
              rows={1}
              cols={30}
              onInput={() => resizeTextArea(0)}
              ref={(el) => (textAreaRef.current[0] = el)}
              placeholder="Enter your name"
              className= {`${styles.name} w-full px-4 overflow-hidden resize-none ${styles.color}`}
            />
        <p> 
          <input
              type="text"
              placeholder="Enter Job Title"
              className={`${styles.social} w-full`}
            />
          </p>
        <section>
          <h2 className={`${styles.header} border-b-2 ${styles.border_color_2}`}>CONTACT</h2>
          {socialLinks.map((social, socialIndex) => (
            <div key={socialIndex}>
              <input
                type="text"
                placeholder="Social Links"
                value={social.link}
                onChange={(e) => updateSocials(socialIndex, e.target.value)}
                className={`${styles.social} w-full`}
              />
              <button
              type="button"
              onClick={()=>deleteSocialLink(socialIndex)}
              className="w-full px-2 py-1 mt-2 mb-2 bg-green-500 text-white rounded hover:bg-green-600 print:hidden"
            >
              Delete
            </button>  
          </div>
          ))}
          {visible &&(
            <button
              type="button"
              onClick={addSocialLink}
              className="w-full px-2 py-1 mt-2 mb-2 bg-green-500 text-white rounded hover:bg-green-600 print:hidden"
            >
              Add Social Link
            </button>)}
        </section>  
        <section className={styles.summary}>
        <h2 className={`${styles.header} border-b-2 ${styles.border_color_2}`}>SUMMARY</h2>
          <p className="text-xs">
            <textarea
              rows={5}
              cols={30}
              onInput={() => resizeTextArea(1)}
              ref={(el) => (textAreaRef.current[1] = el)}
              placeholder="A summary of your profession e.g Digital Marketing Specialist with 6+ years of experience in online marketing, branding, and business strategy across media and entertainment industries."
              className= {`w-full px-4 overflow-hidden resize-none ${styles.color}`}
            />         
          </p>
        </section>
      </section>

    <section className="w-full">
    <section>
      <h2 className={`${styles.header} border-b-2 ${styles.border_color_2}`}>Professional Experience</h2>
      {workExperiences.map((exp, expIndex) => (
            <div key={expIndex} className="my-2">
              <div className={`${styles.content_header} flex`}>
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
                      className="w-11/12 text-xs"
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
        <section className="my-6 flex flex-col">
          <div className={`border-b-2 ${styles.border_color_2}`} >
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
    <section>
      <h2 className={`${styles.header} border-b-2 ${styles.border_color_2}`}>Skills</h2>
      {skillInputs.map((input, index) => (
            <ul key={index} className={styles.list}>
              <li>
                <input
                  key={index}
                  type="text"
                  placeholder="Things you are good at (e.g., JavaScript)"
                  value={input}
                  onChange={(e) => updateSkill(index, e.target.value)}
                  className="w-11/12 my-1 text-xs"
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
                {visible &&(
                <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 print:hidden"
            >
                Download
            </button>)}
        </section>
        </section>
        </form>
    </div>
  );
};

export default ModernDesign;
