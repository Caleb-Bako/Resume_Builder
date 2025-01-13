// Define the type for individual style objects
interface FormStyle {
    container: string;
    list:string;
    name: string;
    social: string;
    header:string;
    content_header: string;
    summary: string;
    content: string;
    color:string;
    border_color:string;
    border_color_2:string;
  }
  
  // Define the type for the entire form styles collection
  type FormStyles = {
    [key: string]: FormStyle; // Keys are dynamic (modern, classic, etc.)
  };

  // Define the styles
  const formStyles: FormStyles = {
    modern: {
      container: "w-full p-6 sm:p-[10px] break-after-avoid",
      header:"text-base font-bold ",
      summary:"",
      border_color:"",
      border_color_2:"",
      color:"",
      list:"list-disc list-inside text-xs text-gray-700 mt-2 space-y-2  w-full",
      name:"text-xl font-bold text-center w-full",
      social:"text-sm mt-1 text-center w-full",
      content_header:"text-sm font-semibold flex justify-between  w-full",
      content:"text-xs text-gray-700 mt-2 w-11/12"
    }
  };
  
  export default formStyles;
  