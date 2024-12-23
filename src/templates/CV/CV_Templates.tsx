// Define the type for individual style objects
interface FormStyle {
    container: string;
    structure: string;
    section:string;
    color:string;
    border_color:string;
    border_color_2:string;
    input: string;
    list: string;
    name: string;
    social: string;
    header: string;
    content_header: string;
    content: string;
    summary: string;
    skills: string;
  }
  
  // Define the type for the entire form styles collection
  type FormStyles = {
    [key: string]: FormStyle; // Keys are dynamic (modern, classic, etc.)
  };
  
  // Define the styles
  const cvFormStyles: FormStyles = {
    modern: {
      container: "sm:p-4 lg:p-8 bg-white shadow-lg rounded-lg",
      structure:"flex flex-row justify-between h-screen",
      color:"bg-orange-500",
      section:"bg-orange-500 w-2/4 mr-1.5",
      border_color:"border-orange-500",
      border_color_2:"border-black mx-4",
      name: "text-xl font-bold text-gray-800 text-center bg-orange-500",
      social: "text-sm text-gray-500 text-center mt-2 bg-orange-500",
      input:"bg-orange-500",
      header: "text-base font-bold text-gray-800 mt-6",
      content_header: "text-sm font-semibold text-gray-700 mt-4",
      content: "text-xs text-gray-600 leading-6",
      list: "list-disc list-inside text-xs text-gray-700 mt-2 space-y-2",
      summary: "text-xs text-gray-600 mt-4",
      skills: "grid grid-cols-2 gap-4 mt-4 text-xs text-gray-700"
    },
  
    classic: {
      container: "sm:p-4 lg:p-8 bg-gray-50 shadow-md border border-gray-200 rounded-md",
      structure:"",
      border_color:" border-black",
      border_color_2:"border-black mx-4",
      color:"",
      section:"",
      name: "text-xl font-bold text-blue-800 text-center",
      social: "text-sm text-gray-500 text-center mt-1",
      input:"bg-orange-500",
      header: "text-base font-bold text-gray-700 mt-6 border-b pb-2",
      content_header: "text-sm font-semibold text-gray-600 mt-3 mx-4",
      content: "text-xs text-gray-600 leading-5 mx-4",
      list: "list-disc list-inside text-xs text-gray-600 mt-2 mx-4 space-y-1",
      summary: "text-sm text-gray-600 mt-4",
      skills: "flex flex-wrap gap-2 mt-4 text-xs text-gray-700"
    }
  };
  
  export default cvFormStyles;
  