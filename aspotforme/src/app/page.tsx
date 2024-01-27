import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-homepage-background bg-cover bg-no-repeat p-24 text-white">
      
      <div className="bg-gray-400 p-8 rounded-lg shadow-lg max-w-2xl text-center">
      {/* Big White Letters */}
      <h1 className="text-5xl mb-2 font-semibold text-center mb-7">Trouble finding parking?</h1>
      
      <p className="text-lg mb-2 text-center">
        You have come to the right place! It is hard to find parking in public spaces where cars that seemingly have taken every parking stall there is!
      </p>

      <p className="text-lg mb-8 text-center">
        We are here to answer your questions about the best spot to find parking! Please click the "Find Parking" button and be ready to find that parking spot.
      </p>

      {/* Find Parking Button */}
      <Link href="/chat">
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded text-lg font-semibold transition duration-300">
          Find Parking
        </button>
      </Link>
      </div>
    </main>
  );
}
