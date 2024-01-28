import React from "react";

const ConfirmationPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-left bg-homepage-background bg-cover bg-no-repeat p-24 text-black">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
          {/* Big White Letters */}
          <h1 className="text-5xl mb-2 font-semibold text-center mb-7">
            Confirmation
          </h1>

          <p className="text-lg mb-2 text-center mb-10">
            Thank you for reserving a parking spot! Your reservation details are
            as follows:
          </p>

          <div className="text-lg mb-8 text-center">
            <p>Parking Spot: A1</p>
            <p>Date: 2022-12-31</p>
            <p>Time: 12:00 PM - 2:00 PM</p>
          </div>

          <p className="text-lg mb-8 text-center">
            If you have any questions, please contact us at info@aspotforme.com
          </p>
        </div>
      </main>
    </>
  );
};

export default ConfirmationPage;
