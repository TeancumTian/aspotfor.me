import Link from 'next/link';

const Button = () => {
    return (
        <Link href="/chat">
            <button className="h-12 rounded-lg bg-white font-bold px-5">Find Parking</button>
        </Link>
    );
  };
  
  export default Button;