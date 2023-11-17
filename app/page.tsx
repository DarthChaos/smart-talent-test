import Card from "@/components/card";
import CheckAvailability from "@/components/check-availability";
import { Heading1 } from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import { v4 as uuidV4 } from "uuid";

export default function Home() {
  const cards = [
    {
      src: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      title: "Room 306",
      price: "50 USD",
      taxes: "16%",
      location: "F. 3, R. 306",
      hasButton: true,
    },
    {
      src: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      title: "Suite 612",
      price: "500 USD",
      taxes: "26%",
      location: "F. 6, R. 612",
      hasButton: true,
    },
    {
      src: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      title: "Room 10",
      price: "10 USD",
      taxes: "0%",
      location: "F. 1, R. 10",
      hasButton: true,
    },
  ];

  return (
    <main className='flex min-h-screen flex-col items-center gap-y-5'>
      <div className='relative pt-10 px-4 xl:px-28 pb-3 mx-auto my-0 flex flex-wrap items-center xl:justify-between'>
        <div className='flex flex-col xl:max-w-[50%]'>
          <Heading1 className='text-center xl:text-left'>
            Welcome to the Smart Talent Hotel
          </Heading1>
          <Link
            href='#'
            className='px-5 py-4 bg-blue-500 mt-3 mx-auto xl:ml-0 underline'
          >
            View our Hotels
          </Link>
        </div>
        <div className='opacity-100 transition-all ease-in-out duration-500 relative translate-x-0 max-w-[45%] hidden xl:flex'>
          <div className='relative w-96 h-96 dashboard-img-clip-path'>
            <Image
              src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Dashboard'
              width={1000}
              height={1000}
              className='inline-block max-w-full h-full align-middle w-full object-cover'
            />
          </div>
        </div>
      </div>
      <CheckAvailability />
      <Heading1 className='mt-8'>Our Bests Rooms</Heading1>
      <div className='mt-4 flex flex-col lg:flex-row gap-6'>
        {cards.map((props) => (
          <Card key={`hotel-card-${props.title}-${uuidV4()}`} {...props} />
        ))}
      </div>
    </main>
  );
}
