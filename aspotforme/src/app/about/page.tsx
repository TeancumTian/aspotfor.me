import React from "react";

const About = () => {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-left bg-homepage-background bg-cover bg-no-repeat p-24 text-black">
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
            {/* Big White Letters */}
            <h1 className="text-5xl mb-2 font-semibold text-center mb-7">About Us</h1>
            
            <p className="text-lg mb-2 text-center mb-10">
                We are a group of students from Brigham Young University who are passionate about helping people find parking spots. We have all experienced the frustration of driving around for hours looking for a parking spot, and we want to help people avoid that frustration.
            </p>
        
            <p className="text-lg mb-8 text-center">
                If you have any questions, please contact us at info@aspotforme.com
            </p>
        </div>
    </main>
    </>
  );
};

export default About;