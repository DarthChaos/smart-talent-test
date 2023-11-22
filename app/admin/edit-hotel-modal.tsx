"use client";

import LightButton from "@/components/light-button";
import Modal from "@/components/modal";
import Selector from "@/components/selector";
import Table from "@/components/table";
import { TableDataObject } from "@/components/table/table";
import TextInput from "@/components/text-input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addNewRoom,
  textSearchHotels,
  textSearchRooms,
  updateExistingHotel,
  updateRoom,
} from "@/store/hotel-slice";
import { ColumnDef } from "@tanstack/react-table";
import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalValues: HotelInterface;
  onSubmit?: (val: any) => void;
}

const EditModal = ({ isOpen, onClose, originalValues }: EditModalProps) => {
  const { searchRooms, hotels } = useAppSelector(({ hotel }) => hotel);
  const dispatch = useAppDispatch();

  const [hasRoomName, setRoomName] = useState(true);
  const [data, setData] = useState<RoomInterface[]>([]);

  const selectorOpts = [
    { value: "1", label: "1 Star" },
    { value: "2", label: "2 Star" },
    { value: "3", label: "3 Star" },
    { value: "4", label: "4 Star" },
    { value: "5", label: "5 Star" },
  ];
  const ableSelectOpts = useMemo(
    () => [
      { value: "1", label: "Able" },
      { value: "0", label: "Unable" },
    ],
    [],
  );

  const handleRoomChange = (
    val: string,
    col: keyof RoomManageDTO,
    roomId: number,
  ) => {
    dispatch(
      updateRoom({
        hotel_id: originalValues.hotel_id,
        room: { room_id: roomId, [col]: val },
      }),
    );
  };
  const handleEditSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onClose();
  };
  const handleHotelFormInputs = (
    name: keyof HotelInterface,
    value: string | number,
  ) => {
    dispatch(
      updateExistingHotel({ hotel_id: originalValues.hotel_id, [name]: value }),
    );
  };
  const onTableInputChange = (val: string) => {
    dispatch(
      textSearchRooms({ hotel_id: originalValues.hotel_id, search: val }),
    );
  };
  const handleAddRoomButton = () => {
    setRoomName(false);
    dispatch(addNewRoom({ hotel_id: originalValues.hotel_id }));
  };
  const handleClose = () => {
    if (!hasRoomName) toast("Values can't be empty", { type: "error" });
    else onClose();
  };

  const hotelData = {
    columns: React.useMemo<ColumnDef<TableDataObject>[]>(
      () => [
        {
          cell: ({ row }) => (
            <TextInput
              type='text'
              label=''
              defaultValue={row.original.name as string}
              onBlur={(v) => {
                handleRoomChange(v, "name", row.original.room_id as number);
                setRoomName(v.length > 0 ? true : false);
              }}
            />
          ),
          accessorKey: "name",
          header: "Name",
        },
        {
          cell: ({ row }) => (
            <TextInput
              type='text'
              label=''
              defaultValue={row.original.price as string}
              onBlur={(v) =>
                handleRoomChange(v, "price", row.original.room_id as number)
              }
            />
          ),
          accessorKey: "price",
          header: "Price (USD)",
        },
        {
          cell: ({ row }) => (
            <TextInput
              type='text'
              label=''
              defaultValue={row.original.taxes as string}
              onBlur={(v) =>
                handleRoomChange(v, "taxes", row.original.room_id as number)
              }
            />
          ),
          accessorKey: "taxes",
          header: "Price (%)",
        },
        {
          cell: ({ row }) => (
            <TextInput
              type='text'
              label=''
              defaultValue={row.original.type as string}
              onBlur={(v) =>
                handleRoomChange(v, "type", row.original.room_id as number)
              }
            />
          ),
          accessorKey: "type",
          header: "Type",
        },
        {
          cell: ({ row }) => (
            <TextInput
              type='text'
              label=''
              defaultValue={row.original.location as string}
              onBlur={(v) =>
                handleRoomChange(v, "location", row.original.room_id as number)
              }
            />
          ),
          accessorKey: "location",
          header: "Location (# Room)",
        },
        {
          cell: ({ row }) => (
            <Selector
              options={ableSelectOpts}
              onChange={(v) =>
                handleRoomChange(v, "able", row.original.room_id as number)
              }
              defaultValue={row.original.able as string}
            />
          ),
          accessorKey: "able",
          header: "Reserved?",
        },
      ],
      [ableSelectOpts],
    ),
  };

  useEffect(() => {
    setData([]);
    const rooms =
      hotels?.find(({ hotel_id }) => hotel_id === originalValues.hotel_id)
        ?.rooms || [];

    setTimeout(() => {
      setData(rooms);
    }, 10);
  }, [hotels]);

  console.log(data);

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      hasHeader
      title='Update Hotel Information'
      closeClassName={!hasRoomName ? "pointer-events-none" : ""}
    >
      <form onSubmit={handleEditSubmit}>
        <div className='grid gap-4 mb-4 md:grid-cols-4'>
          <TextInput
            label='Name'
            type='text'
            hasLabel
            id='name'
            name='name'
            required
            defaultValue={originalValues.name}
            onBlur={(val) => handleHotelFormInputs("name", val)}
          />
          <TextInput
            label='Total Rooms'
            type='number'
            hasLabel
            id='total_rooms'
            name='total_rooms'
            defaultValue={originalValues.total_rooms?.toString() || "0"}
            onBlur={(val) => handleHotelFormInputs("total_rooms", val)}
            disabled
          />
          <Selector
            onChange={(val) => handleHotelFormInputs("stars", val)}
            options={selectorOpts}
            placeholder='# Stars'
            defaultValue={originalValues.stars.toString()}
            className='border-2 cursor-pointer'
          />
          <Selector
            onChange={(val) => handleHotelFormInputs("able", val)}
            options={ableSelectOpts}
            placeholder='Select Option'
            defaultValue={originalValues.able}
            className='border-2 cursor-pointer'
          />
        </div>
        <div className='relative'>
          <LightButton
            className='static sm:absolute top-3.5 left-6 -mb-6 sm:mb-0 z-50 disabled:bg-gray-500'
            type='button'
            onClick={handleAddRoomButton}
            disabled={!hasRoomName}
          >
            Add Room
          </LightButton>
          <Table
            title='Rooms'
            pageSize={5}
            data={data}
            columns={hotelData.columns}
            onInputChange={onTableInputChange}
          />
        </div>

        <LightButton
          className='inline-flex mt-6 disabled:bg-gray-500'
          type='submit'
          disabled={!hasRoomName}
        >
          <svg
            className='me-1 -ms-1 w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
              clipRule='evenodd'
            ></path>
          </svg>
          Update Information
        </LightButton>
      </form>
    </Modal>
  );
};

export default EditModal;
