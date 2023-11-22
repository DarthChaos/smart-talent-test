"use client";

import Table from "@/components/table";
import { Heading2, Heading3 } from "@/components/text";
import PortalClient from "@/layouts/portal";
import { ColumnDef } from "@tanstack/react-table";
import React, { useState } from "react";
import EditModal from "./edit-hotel-modal";
import LightButton from "@/components/light-button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AddHotelModal from "./add-hotel-modal";
import { addNewHotel, textSearchHotels } from "@/store/hotel-slice";

const Admin = () => {
  const [modal, setModal] = useState<{ edit: boolean; add: boolean }>({
    edit: false,
    add: false,
  });
  const [hotelId, setHotelId] = useState<number>(-1);
  const { hotels, searchHotels } = useAppSelector(({ hotel }) => hotel);
  const dispatch = useAppDispatch();

  const hotelData = {
    data: searchHotels || hotels,
    columns: React.useMemo<ColumnDef<HotelInterface>[]>(
      () => [
        {
          cell: (info) => info.getValue(),
          accessorKey: "name",
          header: "Name",
        },
        {
          cell: (info) => info.getValue(),
          accessorKey: "rooms_available",
          header: "Rooms Available",
        },
        {
          cell: (info) => info.getValue(),
          accessorKey: "total_rooms",
          header: "Total Available",
        },
        {
          cell: (info) => info.getValue(),
          accessorKey: "stars",
          header: "Stars",
        },
        {
          cell: (info) => (info.getValue() ? "Able" : "Unable"),
          accessorKey: "able",
          header: "Able",
        },
        {
          header: "Actions",
          cell: ({ row }) => (
            <div className='mx-auto flex gap-3'>
              <button
                className='p-2 rounded-md border border-transparent hover:border-gray-300'
                onClick={() => handleEditButton(row.original.hotel_id)}
              >
                <svg
                  className='w-6 h-6 text-gray-800 dark:text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 20 18'
                >
                  <path d='M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z' />
                  <path d='M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z' />
                </svg>
              </button>
            </div>
          ),
        },
      ],
      [],
    ),
  };

  const handleEditButton = (val: number) => {
    setModal({ edit: true, add: false });
    setHotelId(val);
  };
  const handleModalClose = () => {
    setModal({ edit: false, add: false });
  };
  const handleAddHotelClick = () => {
    setModal({ edit: false, add: true });
    dispatch(addNewHotel({}));
  };
  const onTableInputChange = (val: string) => {
    dispatch(textSearchHotels(val));
  };

  return (
    <div className='mt-4 md:mt-8'>
      {modal.edit && hotels && (
        <PortalClient>
          <EditModal
            onClose={handleModalClose}
            isOpen={modal.edit}
            originalValues={
              hotels.find(
                ({ hotel_id }) => hotel_id === hotelId,
              ) as HotelInterface
            }
          />
        </PortalClient>
      )}
      {modal.add && (
        <PortalClient>
          <AddHotelModal
            hotelId={hotels?.at(0)?.hotel_id || 0}
            onClose={handleModalClose}
            isOpen={modal.add}
          />
        </PortalClient>
      )}
      <Heading2>Welcome Admin!</Heading2>
      <div className='mt-6'>
        <Heading3>List of hotels</Heading3>
        <Table
          {...hotelData}
          title='Hotels'
          onInputChange={onTableInputChange}
        />
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-3'>
          <LightButton onClick={handleAddHotelClick}>Add Hotel</LightButton>
        </div>
      </div>
    </div>
  );
};

export default Admin;
