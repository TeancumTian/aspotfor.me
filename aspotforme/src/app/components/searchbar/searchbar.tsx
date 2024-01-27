"use client";
import React, { useState } from "react";
import Link from "next/link";
const PurchasePage = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handlePurchase = () => {
    setIsConfirmed(true);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-left bg-homepage-background bg-cover bg-no-repeat p-24 text-black">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
          {/* Purchase Page */}
          <h1 className="text-5xl mb-2 font-semibold text-center mb-7">
            {isConfirmed ? "Confirmation" : "Purchase"}
          </h1>

          {isConfirmed ? (
            <p className="text-lg mb-2 text-center mb-10">
              Thank you for your purchase!
            </p>
          ) : (
            <>
              <p className="text-lg mb-2 text-center mb-10">
                Find your perfect spot and book it now!
              </p>

              <form className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Location"
                  className="w-64 p-2 mb-4 rounded-lg shadow-md"
                />
                <input
                  type="date"
                  placeholder="Check-in"
                  className="w-64 p-2 mb-4 rounded-lg shadow-md"
                />
                <input
                  type="date"
                  placeholder="Check-out"
                  className="w-64 p-2 mb-4 rounded-lg shadow-md"
                />
                {/* <button
                  type="submit"
                  className="w-64 p-2 mb-4 rounded-lg shadow-md bg-blue-500 text-white"
                  onClick={handlePurchase}
                >
                  {isConfirmed ? "Confirm" : "Search"}
                </button> */}
                <Link href="/chat">
                  <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded text-lg font-semibold transition duration-300">
                    Find Parking
                  </button>
                </Link>
              </form>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default PurchasePage;
