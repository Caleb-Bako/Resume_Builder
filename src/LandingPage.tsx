import { SetStateAction, useState } from 'react';
import newspaperIcon from './assets/newspaper.png';
import Template1 from './templates/Resume/Template1';
import ModernDesign from './templates/CV/Elegant';

function LandingPage(){
    const [toggle, setToggle] =useState<number>(0);
    const[name,setName] = useState('')
    const [selectedStyle,setSelectedStyle] = useState("");
    function updateToggle(id: SetStateAction<number>){
      setSelectedStyle("")
      setToggle(id)
    }

    return (
        <>
        {toggle === 0 &&(
        <div className="landing-page font-sans text-gray-800">
          {/* Header Section */}
          <header className="text-center py-10 bg-gradient-to-r from-blue-500 to-green-500 text-white">
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">
              Your Career-Boosting Toolkit
            </h1>
            <p className="mt-4 text-xl italic">
              Create a Professional CV or Resume in Minutes!
            </p>
          </header>
    
          {/* Explanation Section */}
          <section className="py-10 px-5 md:px-20 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
              What’s the Difference? 🧐
            </h2>
            <div className="flex flex-wrap md:flex-nowrap gap-8 justify-center items-start">
              {/* CV Section */}
              <div className="bg-white p-6 rounded shadow-lg max-w-md animate-slide-in">
                <h3 className="text-2xl font-semibold mb-4">CV (Curriculum Vitae)</h3>
                <p className="text-gray-600 italic">
                  A detailed document showcasing your entire academic and professional journey.
                </p>
                <ul className="list-disc list-inside mt-4">
                  <li>Best for academic, research, or international job applications.</li>
                  <li>
                    <em>Think of it as your life’s professional story!</em>
                  </li>
                </ul>
              </div>
              {/* Resume Section */}
              <div className="bg-white p-6 rounded shadow-lg max-w-md animate-slide-in">
                <h3 className="text-2xl font-semibold mb-4">Resume</h3>
                <p className="text-gray-600 italic">
                  A concise summary of your skills, work experience, and achievements.
                </p>
                <ul className="list-disc list-inside mt-4">
                  <li>Tailored to highlight what’s most relevant for the specific job.</li>
                  <li>
                    <em>Perfect for corporate or creative roles.</em>
                  </li>
                </ul>
              </div>
            </div>
          </section>
    
          {/* Video Tutorial Section */}
          <section className="py-10 px-5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Watch & Learn 📽️</h2>
            <p className="text-lg mb-6 italic">
              Still unsure which to choose? Watch our video tutorial below for an in-depth
              explanation, complete with examples to help you decide!
            </p>
            <div className="max-w-3xl mx-auto">
              <video
                className="w-full rounded-lg shadow-lg"
                controls
                poster="https://via.placeholder.com/640x360"
              >
                <source src="your-video-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
    
          {/* Selection Section */}
          <section className="py-10 px-5 md:px-20 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">
              Ready to Get Started?
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
            {/* Build a CV Button */}
            <button 
            onClick={()=> updateToggle(1)}
            className="flex flex-col items-center bg-blue-500 text-white px-6 py-4 rounded-lg shadow hover:bg-blue-600 transition">
                <img
                    src={newspaperIcon} 
                    alt="CV Icon"
                    className="w-12 h-12 mb-2"
                />
                <span className="text-sm font-medium">Build a CV</span>
            </button>

            {/* Craft a Resume Button */}
            <button
             onClick={()=> updateToggle(2)}
             className="flex flex-col items-center bg-green-500 text-white px-6 py-4 rounded-lg shadow hover:bg-green-600 transition">
                <img
                    src={newspaperIcon}
                    alt="Resume Icon"
                    className="w-12 h-12 mb-2"
                />
                <span className="text-sm font-medium">Craft a Resume</span>
            </button>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="py-6 bg-gray-800 text-gray-300 text-center">
            <p className="text-sm">✨ Start building your future today! ✨</p>
          </footer>
        </div>
        )}
        {toggle === 1 &&(
          <ModernDesign setToggle={setToggle} toggle={toggle}  selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} />
        )}
        {toggle === 2 &&(
            <Template1 setToggle={setToggle} toggle={toggle} name={name} setName={setName} selectedStyle={selectedStyle} setSelectedStyle={setSelectedStyle} /> 
        )}
        </>
      );
}

export default LandingPage;