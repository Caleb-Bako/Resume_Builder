import { forwardRef, useCallback, useEffect} from "react";
import cvFormStyles from "./CV/CV_Templates";
import CVForm from "./CV/Elegant";
import ResumeForm from "./Resume/Template1";
import formStyles from "./Resume/Resume_Templates";
import { toSvg } from "html-to-image";

interface WorkExperience {
    company: string;
    contents: string[];
}
interface SocialLink {
    link: string;
    image: string;
}
interface Education {
    University: string;
    degree: string;
    date: string
  }

interface TemplateProps {
    close:number
    toggle:number
    setToggle :React.Dispatch<React.SetStateAction<number>>
    setThumbnails: React.Dispatch<React.SetStateAction<string[]>>;
    thumbnails: string[];
    name: string;
    summary: string;
    education: Education[];
    socialLinks: SocialLink[];
    workExperiences: WorkExperience[];
    skillInputs: string[];
    formType:string;
  }

  export default forwardRef<HTMLDivElement, TemplateProps>(function SelectTemplate(
    {
        close, thumbnails, setThumbnails, name, summary, education,
        socialLinks, workExperiences, skillInputs, formType,toggle,setToggle
    },
    ref
) {
    const arrayLength = Object.keys(cvFormStyles).length;

    const handleNext = () => {
        if (toggle < arrayLength - 1) {
            setToggle(toggle + 1);
        }
    };

    const generateThumbnail = useCallback(() => {
        if (ref && 'current' in ref && ref.current){
            console.log("Generating thumbnail for toggle:", toggle);
            toSvg(ref.current, { cacheBust: true })
                .then((dataUrl) => {
                    setThumbnails((prevThumbnails) => {
                        if (!prevThumbnails.includes(dataUrl)) {
                            return [...prevThumbnails, dataUrl];
                        }
                        return prevThumbnails;
                    });
                })
                .catch((err) => {
                    console.error('Error generating thumbnail:', err);
                });
        }
    }, [ref, toggle, setThumbnails]);
    

    useEffect(() => {
        console.log("useEffect triggered with toggle:", toggle);
        if (thumbnails.length < arrayLength) {
            const timeout = setTimeout(() => {
                handleNext();
                generateThumbnail();
            }, 1000);
    
            return () => clearTimeout(timeout); // Cleanup timeout to avoid overlap
        }
    }, [toggle, thumbnails.length, arrayLength, generateThumbnail]);
    

    return (
        <div className={`fixed inset-0 -z-50 ${close === 1 ? "block" : "hidden"}`}>
            <div className="w-full">
                <div>
                    {formType === 'CV' && (
                        <div>
                            {Object.keys(cvFormStyles).map((temp, index) => (
                                <div key={index}>
                                    {index === toggle && (
                                        <div>
                                            <CVForm
                                                ref={ref}
                                                selectedStyle={temp}
                                                name={name}
                                                skillInputs={skillInputs}
                                                summary={summary}
                                                education={education}
                                                socialLinks={socialLinks}
                                                workExperiences={workExperiences}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                    {formType === 'Resume' && (
                        <div className="w-full">
                            {Object.keys(formStyles).map((temp, index) => (
                                <div key={index}>
                                    {index === toggle && (
                                        <div>
                                            <ResumeForm
                                                selectedStyle={temp}
                                                name={name}
                                                skillInputs={skillInputs}
                                                summary={summary}
                                                education={education}
                                                socialLinks={socialLinks}
                                                workExperiences={workExperiences}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});
