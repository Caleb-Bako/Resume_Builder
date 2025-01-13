import { forwardRef} from "react";
import formStyles from "./Resume_Templates";

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
  date:string
}

interface ResumeProps {
  selectedStyle: string;
  name: string;
  summary: string;
  education: Education[];
  socialLinks: SocialLink[];
  workExperiences: WorkExperience[];
  skillInputs: string[];
}

const  ResumeForm = forwardRef<HTMLDivElement, ResumeProps>(
  (
    {
      selectedStyle,
      name,
      summary,
      education,
      socialLinks,
      workExperiences,
      skillInputs,
    },
    ref 
  ) => {
  const styles = formStyles[selectedStyle];


  return (
    <div className={styles.container} ref={ref} >
      <div
        className={`flex flex-col break-inside-avoid w-full`}
      >
        <header className="text-center my-4 w-full">
          <div  className={`${styles.name} w-full`}>{name}</div>
          <div className={`${styles.social} w-full`}>      
            {socialLinks && socialLinks.map((social, socialIndex) => (
            <div key={socialIndex} className="flex gap-1">
              <div className={`${styles.social} w-full`}>{social.link}</div>
          </div>
          ))}
          </div>
        </header>
        <section className={styles.summary}>
        <h2 className={`${styles.header} border-b-2 ${styles.border_color_2}`}>SUMMARY</h2>
          <p className= {`text-xs w-full px-4 overflow-hidden resize-none ${styles.color}`}>
            {summary}     
          </p>
        </section>
        <section>
          <h2 className={`${styles.header} border-b-2 border-indigo-500`}>
            Work Experience
          </h2>
          {workExperiences.map((exp, expIndex) => (
            <div key={expIndex} className="my-2">
              <div className={`${styles.content_header}`}>
                <div className="w-full">
                  {exp.company}
                </div>
              </div>
              {exp.contents.map((content, contentIndex) => (
                <ul key={contentIndex} className={styles.list}>
                  <li className="w-11/12">
                    {content}
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </section>
        {/* Education Section */}
        <section className="my-6">
          <div className="border-b-2 border-indigo-500 ">
            <h2 className={styles.header}>Education</h2>
          </div>
          {education.map((de,index)=>(
                <div key={index}>
                  <div className={`flex ${styles.content_header}`}>
                    <div>
                      {de.University}
                    </div>
                    <div>
                      {de.date}
                    </div>
                  </div>
                  <div>
                   
                  </div>
                  <div className={styles.content}>
                    {de.degree}
                  </div>
                </div>
              ))}
        </section>
        <section className="my-4">
          <h2 className={`${styles.header} border-b-2 border-indigo-500`}>
            Skills
          </h2>
          {skillInputs.map((input, index) => (
            <ul key={index} className={styles.list}>
              <li className="w-11/12 my-1">
                {input}
            </li>
            </ul>
          ))}
        </section>
      </div>
    </div>
  );
})

export default ResumeForm;
