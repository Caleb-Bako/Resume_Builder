// Shared Interfaces
interface StateSetter<T> {
    (value: React.SetStateAction<T>): void;
  }
  
  // Social Links
  interface SocialLink {
    link: string;
    image: string;
  }
  
  interface UpdateSocialsProps {
    setSocialLinks: StateSetter<SocialLink[]>;
    socialLinks: SocialLink[];
    index?: number; // Optional for add operations
    value?: string; // Optional for add operations
  }
  
  // Work Experience
  interface WorkExperience {
    company: string;
    contents: string[];
  }
  
  interface WorkExperienceProps {
    setWorkExperiences: StateSetter<WorkExperience[]>;
    workExperiences: WorkExperience[];
    index?: number; // Optional for add/remove operations
    value?: string; // For updating specific fields
    contentIndex?: number; // For nested updates
    type?: string; // For handling selection type
  }
    // Education
    interface Education {
      University: string;
      degree: string;
      date: string
    }
    
    interface EducationProps {
      setEducation: StateSetter<Education[]>;
      education: Education[];
      index?: number; // Optional for add/remove operations
      value?: string; // For updating specific fields
      type?: string; // For handling selection type
    }
  // Skills
  interface SkillsProps {
    setSkillInputs: StateSetter<string[]>;
    skillInputs: string[];
    index?: number; // Optional for add/remove operations
    value?: string; // For updating specific skills
  }
  
  // Consolidated Input Props for handleSelection
  interface InputProps extends WorkExperienceProps, UpdateSocialsProps, SkillsProps,EducationProps {}
  
  export const addWorkExperience = ({
    setWorkExperiences,
    workExperiences,
  }: WorkExperienceProps) => {
    setWorkExperiences([...workExperiences, { company: "", contents: [] }]);
  };

  export const updateCompany = ({
    setWorkExperiences,
    workExperiences,
    index,
    value,
  }: WorkExperienceProps) => {
    if (index === undefined || value === undefined) return;
  
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index].company = value;
    setWorkExperiences(updatedExperiences);
  };
  export const addContent = ({
    setWorkExperiences,
    workExperiences,
    index,
  }: WorkExperienceProps) => {
    if (index === undefined) return;
  
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index].contents.push("");
    setWorkExperiences(updatedExperiences);
  };
  export const updateContent = ({
    setWorkExperiences,
    workExperiences,
    index,
    contentIndex,
    value,
  }: WorkExperienceProps) => {
    if (index === undefined || contentIndex === undefined || value === undefined)
      return;
  
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index].contents[contentIndex] = value;
    setWorkExperiences(updatedExperiences);
  };
    export const addEducation = ({
    setEducation,
    education,
  }: EducationProps) => {
    setEducation([...education, { University: "", degree: "",date:''}]);
  };

  export const updateEducation = ({
    setEducation,
    education,
    index,
    value,
  }: EducationProps) => {
    if (index === undefined || value === undefined) return;
  
    const updatedExperiences = [...education];
    updatedExperiences[index].University = value;
    setEducation(updatedExperiences);
  };
  export const addDegrees = ({
    setEducation,
    education,
    index,
  }: EducationProps) => {
    if (index === undefined) return;
  
    const updatedExperiences = [... education];

    setEducation(updatedExperiences);
  };

  export const addDate = ({
    setEducation,
    education,
    index,
    value,
  }: EducationProps) => {
    if (index === undefined  || value === undefined)
      return;
    const updatedExperiences = [...education];
    updatedExperiences[index].date = value;
    setEducation(updatedExperiences);
  }; 
  
  export const updateDegrees = ({
    setEducation,
    education,
    index,
    value,
  }: EducationProps) => {
    if (index === undefined  || value === undefined)
      return;
    const updatedExperiences = [...education];
    updatedExperiences[index].degree = value;
    setEducation(updatedExperiences);
  };
  export const addSkillInput = ({ setSkillInputs, skillInputs }: SkillsProps) => {
    setSkillInputs([...skillInputs, ""]);
  };
  export const updateSkill = ({
    setSkillInputs,
    skillInputs,
    index,
    value,
  }: SkillsProps) => {
    if (index === undefined || value === undefined) return;
  
    const updatedSkills = [...skillInputs];
    updatedSkills[index] = value;
    setSkillInputs(updatedSkills);
  };
  export const addSocialLink = ({
    setSocialLinks,
    socialLinks,
  }: UpdateSocialsProps) => {
    setSocialLinks([...socialLinks, { link: "", image: "" }]);
  };
  export const updateSocials = ({
    setSocialLinks,
    socialLinks,
    index,
    value,
  }: UpdateSocialsProps) => {
    if (index === undefined || value === undefined) return;
  
    const updatedLinks = [...socialLinks];
    updatedLinks[index].link = value;
    setSocialLinks(updatedLinks);
  };
  
  export const handleSelection = ({
    setWorkExperiences,
    workExperiences,
    setSocialLinks,
    socialLinks,
    setSkillInputs,
    skillInputs,
    setEducation,
    education,
    index,
    type,
    contentIndex,
  }: InputProps) => {
    switch (type) {
      case "socialLinks":
        if (index !== undefined) {
          const updatedLinks = socialLinks.filter((_, i) => i !== index);
          setSocialLinks(updatedLinks);
        }
        break;
  
      case "skills":
        if (index !== undefined) {
          const updatedSkills = skillInputs.filter((_, i) => i !== index);
          setSkillInputs(updatedSkills);
        }
        break;
  
      case "exp":
        if (index !== undefined) {
          const updatedExp = workExperiences.filter((_, i) => i !== index);
          setWorkExperiences(updatedExp);
        }
        break;
  
      case "expContents":
        if (index !== undefined && contentIndex !== undefined) {
          const updatedExperiences = [...workExperiences];
          updatedExperiences[index].contents = updatedExperiences[index].contents.filter(
            (_, i) => i !== contentIndex
          );
          setWorkExperiences(updatedExperiences);
        }
        break;
        case "edu":
          if (index !== undefined) {
            const updatedExp = education.filter((_, i) => i !== index);
            setEducation(updatedExp);
          }
          break;  
  
      default:
        console.error("Unknown type");
    }
  };
  
            
  



