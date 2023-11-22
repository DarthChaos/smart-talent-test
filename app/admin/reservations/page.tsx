"use client";

import Accordion from "@/components/accordion";
import { Heading2, Heading3 } from "@/components/text";
import { useAppSelector } from "@/store/hooks";
import React from "react";

const Reservations = () => {
  const { hotels } = useAppSelector(({ hotel }) => hotel);

  const accordions = hotels
    ? hotels?.map(({ name, rooms, ...hotel }) => {
        const roomsAccordions = rooms
          .filter(({ able }) => able === "0")
          .map(({ able, name, ...room }) => ({
            isAble: false,
            title: name,
            tagMessage: "Reserved",
            content: (
              <section className='text-gray-900 dark:text-white px-6 py-4 border-l-[1px] border-r-[1px]'>
                <div className='grid-cols-2 grid md:grid-cols-3 gap-3'>
                  <div className='col-span-2'>
                    <span className='font-semibold'>ID:</span> {room.room_id}
                  </div>
                  <div className='col-span-1'>
                    <span className='font-semibold'>Type:</span> {room.type}
                  </div>
                  <div className='col-span-1'>
                    <span className='font-semibold'>Location:</span>{" "}
                    {room.location}
                  </div>
                  <div className='col-span-1'>
                    <span className='font-semibold'>Price:</span> {room.price}{" "}
                    USD
                  </div>
                  <div className='col-span-1'>
                    <span className='font-semibold'>Taxes:</span> {room.taxes}%
                  </div>
                  <Heading3 className='col-span-3'>
                    Reservation Details
                  </Heading3>
                  <section className='col-span-3 grid sm:grid-cols-2'>
                    <div className='col-span-1'>
                      <span className='font-semibold'># People:</span>{" "}
                      {room.reservationDetails?.numberPeople || 0}
                    </div>
                    <div className='col-span-1' />
                    {room.reservationDetails ? (
                      <div className='col-span-2'>
                        <span className='font-bold'>Hostess</span>
                        {room.reservationDetails?.people.map(
                          ({
                            name,
                            surname,
                            phone,
                            genre,
                            docType,
                            docNum,
                            email,
                            emergency,
                          }) => (
                            <div className='grid sm:grid-cols-2'>
                              <div className='col-span-2'>
                                <span className='font-semibold'>Name:</span>{" "}
                                {`${name} ${surname}`}
                              </div>
                              <div className='col-span-1'>
                                <span className='font-semibold'>Phone:</span>{" "}
                                {phone}
                              </div>
                              <div className='col-span-1'>
                                <span className='font-semibold'>genre:</span>{" "}
                                {genre}
                              </div>
                              <div className='col-span-1'>
                                <span className='font-semibold'>Document:</span>{" "}
                                {docType}
                              </div>
                              <div className='col-span-1'>
                                <span className='font-semibold'>Number:</span>{" "}
                                {docNum}
                              </div>
                              <div className='col-span-2'>
                                <span className='font-semibold'>Email:</span>{" "}
                                {email}
                              </div>
                              <div className='col-span-2 grid sm:grid-cols-2'>
                                <span className='font-bold'>
                                  Emergency Contacts
                                </span>
                                <div className='col-span-2'>
                                  <span className='font-semibold'>Name:</span>{" "}
                                  {`${emergency.name} ${emergency.surname}`}
                                </div>
                                <div className='col-span-1'>
                                  <span className='font-semibold'>Phone:</span>{" "}
                                  {emergency.phone}
                                </div>
                              </div>
                            </div>
                          ),
                        ) || null}
                      </div>
                    ) : (
                      <div className='flex my-2'>
                        <span className='font-semibold'>Status: </span>{" "}
                        <span className='text-gray-900 dark:text-white'>
                          The Room has been disabled by the admin.
                        </span>
                      </div>
                    )}
                  </section>
                </div>
              </section>
            ),
          }));

        return {
          title: name,
          content: (
            <div className='py-5 px-3 text-gray-900 dark:text-white'>
              <Heading3 className='col-span-3 mb-3'>Hotel Details</Heading3>
              <div className='border-t-2 border-b-2 grid-cols-2 grid md:grid-cols-3 py-4 px-6'>
                <div className='col-span-2'>
                  <span className='font-semibold'>ID:</span> {hotel.hotel_id}
                </div>
                <div className='col-span-1'>
                  <span className='font-semibold'>stars:</span> {hotel.stars}
                </div>
              </div>
              <div className='py-5 px-3'>
                <section className='text-gray-900 dark:text-white'>
                  <Heading3 className='col-span-3 mb-3'>
                    Rooms Reserved
                  </Heading3>
                  {roomsAccordions.length !== 0 ? (
                    <Accordion accordions={roomsAccordions} />
                  ) : (
                    <span>No rooms reserved yet.</span>
                  )}
                </section>
              </div>
            </div>
          ),
        };
      })
    : null;

  return (
    <div className='mt-4 md:mt-8'>
      <Heading2 className='mb-6'>Reservations</Heading2>
      {accordions ? <Accordion accordions={accordions} /> : "No Hotels."}
    </div>
  );
};

export default Reservations;
