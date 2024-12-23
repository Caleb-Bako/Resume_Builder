import cvFormStyles from "../templates/CV/CV_Templates";
import newspaperIcon from "../assets/newspaper.png"
import formStyles from "../templates/Resume/Resume_Templates";

interface StyleProps {
    toggle: number,
    selectedStyle: string,
    setSelectedStyle :React.Dispatch<React.SetStateAction<string>>
  }

function PopUp({ selectedStyle, setSelectedStyle,toggle}:StyleProps){
    console.log(selectedStyle)
    return(
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <div>
                    <h2 className="text-center">Choose A Template!</h2>
                    {toggle === 1 &&(
                    <div className="flex flex-row justify-between my-4">
                        {Object.keys(cvFormStyles).map((temp,index)=>(
                            <div>
                                <img 
                                src={newspaperIcon} 
                                alt="" 
                                onClick={()=>setSelectedStyle(temp)}
                                className="w-12 h-12 mb-2"
                                />
                                <p key={index}>{temp}</p>
                            </div>
                        ))}
                    </div>
                    )}
                    {toggle === 2 &&(
                    <div className="flex flex-row justify-between my-4">
                        {Object.keys(formStyles).map((temp,index)=>(
                            <div>
                                <img 
                                src={newspaperIcon} 
                                alt="" 
                                onClick={()=>setSelectedStyle(temp)}
                                className="w-12 h-12 mb-2"
                                />
                                <p key={index}>{temp}</p>
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PopUp;