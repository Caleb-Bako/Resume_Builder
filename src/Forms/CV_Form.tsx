import { SetStateAction, useRef, useState } from 'react';
import trashIcon from '../assets/trash-bin.svg'
import closeIcon from '../assets/close-x-svgrepo-com.svg'
import { addContent,addDate,addEducation, addSkillInput, addSocialLink, addWorkExperience, handleSelection, updateCompany, updateContent, updateDegrees, updateEducation, updateSkill, updateSocials } from '../components/inputUpdates';
import SelectTemplate from '../templates/SelectTemplate';
import { useReactToPrint } from 'react-to-print';

interface Toggle {closeForm:React.Dispatch<React.SetStateAction<number>>}
export default function CV_Form({closeForm}:Toggle){
const [close, setClose] =useState<number>(0);
const formType = "CV"
const ref = useRef<HTMLDivElement>(null);
const componentref = useRef<HTMLDivElement>(null);
const [thumbnails, setThumbnails] = useState<string[]>([]);
const[name,setName] = useState('')
const[toggle,setToggle] = useState(0)
const[summary,setSummary] = useState('')
const [education, setEducation] = useState<
    { University: string;  date: string; degree: string }[]
    >([]);
const [workExperiences, setWorkExperiences] = useState<
    { company: string; contents: string[] }[]
    >([]);
const [socialLinks,setSocialLinks] =  useState<
    { link: string; image: string }[]
    >([]);
const [skillInputs, setSkillInputs] = useState<string[]>([]);
const textAreaRef = useRef<(HTMLTextAreaElement| null)[]>([]);

function updateToggle(id: SetStateAction<number>){
    setClose(id)
}
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const handleRemove = (
    index: number,
    type: "socialLinks" | "skills" | "exp" | "expContents" |"edu",
    contentIndex?: number
  ) => {
    handleSelection({
      setWorkExperiences,
      workExperiences,
      setSocialLinks,
      socialLinks,
      setSkillInputs,
      skillInputs,
      index,
      type,
      setEducation,
      education,
      contentIndex, // Pass contentIndex here
    });
  };

  const resizeTextArea = (index:number) => {
    const textarea = textAreaRef.current[index]
    if (textarea) {
      textarea.style.height = "auto"; // will not work without this!
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const reactToPrintFn = useReactToPrint({
    contentRef: componentref,
    documentTitle: "AwesomeFileName",
  });

  const refreshThumbnail = () => {
    setClose(0);
    setThumbnails([]);
  }
  
    return(
        <div className="min-h-screen p-6 bg-gradient-to-r from-blue-500 to-green-500 font-sans relative">
         {close === 0 &&(
        <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg h-fit">
            <button onClick={()=>closeForm(0)} className='absolute top-8 right-8'>
                <img src={closeIcon} className="w-6 h-6"/>
            </button>
            <div className="flex flex-col border-b-2 mb-4">
                <label>Name:</label>
                <input
                    placeholder="Input Name"
                    className=""
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="flex flex-col border-b-2 mb-4">
                <div>
                <label>Socials:</label>
                <button
                onClick={()=> addSocialLink({setSocialLinks,socialLinks})}
                className='ml-2 px-2 py-1 rounded-lg shadow-lg text-blue-500 rounded hover:bg-blue-100'
                >
                    +
                </button>
                </div>
                {socialLinks.map((social, index) => (
                <div className='flex' key={index}>
                    <input
                        placeholder="Input Social Handle"
                        className="w-full"
                        value={social.link}
                        onChange={(e) => updateSocials({setSocialLinks,socialLinks,index,value:e.target.value})}
                    />
                    <div className='gap-1 mb-2'>
                        <button
                        className='ml-2 px-2 py-1 rounded-lg shadow-lg rounded hover:bg-green-100'
                        onClick={()=>handleRemove(index,'socialLinks')}
                        >
                            <img src={trashIcon} alt="Delete" className="w-6 h-6" style={{ minWidth: '24px', minHeight: '24px' }}/>
                        </button>
                    </div>
                </div>))}
            </div>
            <div className="flex flex-col border-b-2 mb-4">
                <label>Summary:</label>
            <textarea
                value={summary}
                onChange={(e)=>setSummary(e.target.value)}
                onInput={() => resizeTextArea(0)}
                ref={(el) => (textAreaRef.current[0] = el)}
                placeholder="Enter your name"
                />
            </div>
            <div className="flex flex-col border-b-2 mb-4">
                <div className='flex items-center justify-between sm:justify-start mb-2'>
                    <label>Professional Experience:</label>
                    <button
                     onClick={() => addWorkExperience({setWorkExperiences,workExperiences})}
                    className='ml-2 px-2 py-1 rounded-lg shadow-lg text-blue-500 rounded hover:bg-blue-100'
                    >
                        +
                    </button>
                </div>
                {workExperiences.map((exp, index) => (
                <div className='flex flex-col' key={index}>
                    <div className='flex'>
                    <input
                        placeholder="Input Social Handle"
                        className="w-full"
                        value={exp.company}
                        onChange={(e) => updateCompany({setWorkExperiences,workExperiences,index, value:e.target.value})}
                    />
                    <div className='mb-2 flex'>
                        <button
                        onClick={() => addContent({setWorkExperiences,workExperiences,index})}
                        className='ml-2 px-2 py-1 rounded-lg shadow-lg text-green-500 rounded hover:bg-green-100'
                        >
                            +
                        </button>
                        <button
                        onClick={()=>handleRemove(index,'exp')}
                        className='ml-2 px-2 py-1 rounded-lg shadow-lg rounded hover:bg-blue-100'
                        >
                        <img src={trashIcon} alt="Delete" className="w-6 h-6" style={{ minWidth: '24px', minHeight: '24px' }} />
                        </button>
                    </div>
                    </div>
                    {exp.contents.map((content, contentIndex) => (
                        <ul key={contentIndex} className="">
                            <li className='flex'>
                                <textarea
                                value={content}
                                onInput={() => resizeTextArea(0)}
                                ref={(el) => (textAreaRef.current[0] = el)}
                                onChange={(e) =>
                                    updateContent({setWorkExperiences,workExperiences,index,contentIndex,value:e.target.value})
                                }
                                placeholder="e.g., Helped in keeping Central City Safe"
                                className="w-11/12 text-xs"
                                />
                               <button
                                    onClick={() => handleRemove(index, 'expContents', contentIndex)}
                                    className="ml-2 px-2 py-1 rounded-lg shadow-lg rounded hover:bg-green-100"
                                    >
                                    <img src={trashIcon} alt="Delete" className="w-6 h-6" style={{ minWidth: '24px', minHeight: '24px' }}/>
                                </button>
                            </li>
                        </ul>
                    ))}
                 </div> ))} 
            </div>
            <div className="flex flex-col border-b-2 mb-4">
                <div className='flex mb-2 items-center'>
                    <label>Education:</label>
                    <button
                        onClick={() => addEducation({setEducation,education})}
                        className='ml-2 px-2 py-1 rounded-lg shadow-lg text-blue-500 rounded hover:bg-blue-100'
                        >
                            +
                        </button>
                    </div>
                    {education.map((exp, index) => (
                        <div className="w-full" key={index}>
                            <div className="flex">
                                <div className="flex w-full">
                                    {/* Input for University */}
                                    <input
                                    placeholder="University"
                                    className="w-full"
                                    value={exp.University}
                                    onChange={(e) =>
                                        updateEducation({ setEducation, education, index, value: e.target.value })
                                    }
                                    />
                                    {/* Input for Date */}
                                    <input
                                    placeholder="Date"
                                    className="w-full text-center "
                                    value={exp.date}
                                    onChange={(e) =>
                                        addDate({ setEducation, education, index, value: e.target.value })
                                    }
                                    />
                                </div>
                                {/* Delete Button */}
                                <div className="mb-2">
                                    <button
                                    onClick={() => handleRemove(index, "edu")}
                                    className="ml-2 px-2 py-1 rounded-lg shadow-lg hover:bg-blue-100"
                                    >
                                    <img
                                        src={trashIcon}
                                        alt="Delete"
                                        className="w-6 h-6"
                                        style={{ minWidth: "24px", minHeight: "24px" }}
                                    />
                                    </button>
                                </div>
                            </div>
                            {/* Input for Degrees */}
                            <input
                            placeholder="Degrees"
                            className="w-full"
                            value={exp.degree}
                            onChange={(e) =>
                                updateDegrees({ setEducation, education, index, value: e.target.value })
                            }
                            />
                        </div>
                ))}

            </div>
           
            <div className="flex flex-col border-b-2 mb-4">
                <div>
                    <label>Skills:</label>
                    <button
                     onClick={()=> addSkillInput({setSkillInputs,skillInputs})}
                    className='ml-2 px-2 py-1 rounded-lg shadow-lg text-blue-500 rounded hover:bg-blue-100'
                    >
                        +
                    </button>
                </div>
            {skillInputs.map((input, index) => (
                <div className='flex' key={index}>
                    <input
                        placeholder="Input Social Handle"
                        className="w-full"
                        value={input}
                        onChange={(e) => updateSkill({setSkillInputs,skillInputs,index,value:e.target.value})}
                    />
                    <div className='mb-2'>
                        <button
                         onClick={()=>handleRemove(index,'skills')}
                        className='ml-2 px-2 py-1 rounded-lg shadow-lg rounded hover:bg-green-100'
                        >
                        <img src={trashIcon} alt="Delete" className="w-6 h-6" style={{ minWidth: '24px', minHeight: '24px' }} />
                        </button>
                    </div>
                </div>))}
            </div>
            <button
            className="w-full px-2 py-1 mt-2 mb-2 bg-green-500 text-white rounded hover:bg-green-600 print:hidden"
            onClick={()=> updateToggle(1)}
            >
                Select Template
            </button>
        </form>)}
        {close === 1 &&(
            <div className='absolute -z-10' ref={componentref}>
                <SelectTemplate
                ref={ref}
                toggle={toggle}
                setToggle={setToggle} 
                thumbnails={thumbnails}
                close={close}
                setThumbnails={setThumbnails}
                formType={formType}
                name={name} 
                summary={summary} 
                skillInputs={skillInputs} 
                education= {education} 
                socialLinks={socialLinks} 
                workExperiences={workExperiences} />
            </div>
        )}
        {close === 1 &&(
            <div>
            <button onClick={() => refreshThumbnail()} type="button">
                <img src={closeIcon} className="w-6 h-6"/>
            </button>
            <div className='flex  items-center justify-center flex-wrap'>
                {thumbnails.map((thumbnail,index)=>(
                    <div className={`${toggle === index ?'rounded-lg shadow-lg':''}`}>
                            <div className='relative'>
                                <img src={thumbnail} className="w-56 h-72 flex justify-between my-2" onClick={()=>setToggle(index)}/>
                                {toggle === index &&(
                                    <button 
                                    onClick={()=>reactToPrintFn()}
                                    className="absolute inset-x-0 bottom-0 rounded-lg bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold">
                                        Download
                                    </button>
                                )}
                            </div>
    
                    </div>
                ))}
                </div>
            </div>
        )}
        </div>
    )
}