import React from "react";
import Link from "next/link";

type ParkingSpaceData = {
  id: number;
  address: string;
  price: string;
  image: string;
};

const parkingSpaces: ParkingSpaceData[] = [
  { id: 1, address: "123 Main St", price: "$10/hour", image: "/images/house1.jpg" },
  { id: 2, address: "456 Elm St", price: "$12/hour", image: "/images/house2.jpg" },
  { id: 3, address: "789 Oak St", price: "$8/hour", image: "/images/house3.jpg" },
];


type ParkingSpaceProps = {
  address: string;
  price: string;
  image: string;
};

const ParkingSpace: React.FC<ParkingSpaceProps> = ({ address, price, image }) => {
  return (
    <div className="parking-space-container">
      <img src={image} alt={`Parking at ${address}`} />
      <div className="info mb-2">
        <h3>{address}</h3>
        <p>{price}</p>
      </div>
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded text-lg font-semibold transition duration-300 text-white mb-10">
          Purchase
        </button>
    </div>
  );
};

const RentParking: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start bg-homepage-background bg-cover bg-no-repeat p-24 text-black">
      <section className="parking-spaces-display bg-white p-8 rounded-lg shadow-lg max-w-2xl text-left mb-8">
        {parkingSpaces.map((space) => (
          <ParkingSpace key={space.id} address={space.address} price={space.price} image={space.image} />
        ))}
      </section>
    </main>
  );
};

export default RentParking;
