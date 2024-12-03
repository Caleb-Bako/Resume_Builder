// Define the type for individual style objects
interface FormStyle {
    container: string;
    list:string;
    name: string;
    social: string;
    header:string;
    content_header: string;
    content: string;
  }
  
  // Define the type for the entire form styles collection
  type FormStyles = {
    [key: string]: FormStyle; // Keys are dynamic (modern, classic, etc.)
  };

  // Define the styles
  const formStyles: FormStyles = {
    modern: {
      container: "sm:p-[10px] lg:p-[96px] break-after-avoid",
      header:"text-2xl font-bold ",
      list:"list-disc list-inside text-sm text-gray-700 mt-2 space-y-2  w-full",
      name:"text-3xl font-bold text-center w-full",
      social:"text-sm mt-1 text-center w-full",
      content_header:"text-base font-semibold flex justify-between  w-full",
      content:"text-sm text-gray-700 mt-2 w-11/12"
    }
  };
  
  export default formStyles;
  