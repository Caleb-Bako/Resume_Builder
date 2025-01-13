import { forwardRef,} from "react";
import cvFormStyles from "./CV_Templates";

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

interface CVProps {
  selectedStyle: string;
  name: string;
  summary: string;
  education: Education[];
  socialLinks: SocialLink[];
  workExperiences: WorkExperience[];
  skillInputs: string[];
}

const CVForm = forwardRef<HTMLDivElement, CVProps>(
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
    const styles = cvFormStyles[selectedStyle];

    return (
      <div className={styles.container} ref={ref}>
        <div className={styles.structure}>
          <section className={styles.section}>
            <div
              className={`${styles.name} w-full px-4 overflow-hidden resize-none ${styles.color}`}
            >
              {name}
            </div>
            <p className={`${styles.social} w-full`}>Job Title</p>
            <section>
              <h2
                className={`${styles.header} border-b-2 ${styles.border_color_2}`}
              >
                CONTACT
              </h2>
              {socialLinks &&
                socialLinks.map((social, socialIndex) => (
                  <div key={socialIndex} className="flex gap-1">
                    <div className={`${styles.social} w-full`}>
                      {social.link}
                    </div>
                  </div>
                ))}
            </section>
            <section className={styles.summary}>
              <h2
                className={`${styles.header} border-b-2 ${styles.border_color_2}`}
              >
                SUMMARY
              </h2>
                <div
                  className={`w-full text-xs px-4 overflow-hidden resize-none ${styles.color}`}
                >
                  {summary}
                </div>
            </section>
          </section>

          <section className="w-full">
            <section>
              <h2
                className={`${styles.header} border-b-2 ${styles.border_color_2}`}
              >
                Professional Experience
              </h2>
              {workExperiences &&
                workExperiences.map((exp, expIndex) => (
                  <div key={expIndex} className="my-2">
                    <div className={`${styles.content_header} flex`}>
                      <div className="w-full">{exp.company}</div>
                    </div>
                    {exp &&
                      exp.contents.map((content, contentIndex) => (
                        <ul key={contentIndex} className={styles.list}>
                          <li className="w-11/12 text-xs">{content}</li>
                        </ul>
                      ))}
                  </div>
                ))}
            </section>
            <section className="my-6 flex flex-col">
              <div className={`border-b-2 ${styles.border_color_2}`}>
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
            <section>
              <h2
                className={`${styles.header} border-b-2 ${styles.border_color_2}`}
              >
                Skills
              </h2>
              {skillInputs &&
                skillInputs.map((input, index) => (
                  <ul key={index} className={styles.list}>
                    <li className="items-center justify-items-center w-11/12 my-1 text-xs">
                      {input}
                    </li>
                  </ul>
                ))}
            </section>
          </section>
        </div>
      </div>
    );
  }
);

export default CVForm;
