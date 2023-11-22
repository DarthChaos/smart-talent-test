import LightButton from "@/components/light-button";
import Modal from "@/components/modal";
import Selector from "@/components/selector";
import Table from "@/components/table";
import TextInput from "@/components/text-input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addNewHotel,
  addNewRoom,
  updateExistingHotel,
  updateRoom,
} from "@/store/hotel-slice";
import { ColumnDef } from "@tanstack/react-table";
import React, { FormEvent, useMemo, useState } from "react";
import { toast } from "react-toastify";

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
  hotelId: number;
}

const AddHotelModal = ({ isOpen, onClose, hotelId }: AddModalProps) => {
  const { hotels, searchRooms } = useAppSelector(({ hotel }) => hotel);
  const dispatch = useAppDispatch();

  const [hasRoomName, setRoomName] = useState(true);

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
  const rooms =
    hotels?.find(({ hotel_id }) => hotel_id === hotelId)?.rooms || [];

  const handleRoomChange = (
    val: string,
    col: keyof RoomManageDTO,
    roomId: number,
  ) => {
    dispatch(
      updateRoom({ hotel_id: hotelId, room: { room_id: roomId, [col]: val } }),
    );
  };
  const handleHotelFormInputs = (
    name: keyof HotelInterface,
    value: string | number,
  ) => {
    dispatch(updateExistingHotel({ hotel_id: hotelId, [name]: value }));
  };
  const handleEditSubmit = (e: FormEvent) => {
    e.preventDefault();

    onClose();
  };
  const handleAddRoomButton = () => {
    setRoomName(false);
    dispatch(addNewRoom({ hotel_id: hotelId }));
  };

  const hotelData = {
    data: searchRooms || rooms,
    columns: React.useMemo<ColumnDef<RoomInterface>[]>(
      () => [
        {
          cell: ({ row }) => (
            <TextInput
              type='text'
              label=''
              defaultValue=''
              onBlur={(v) => {
                handleRoomChange(v, "name", row.original.room_id as number);
                setRoomName(v.length > 0 ? true : false);
              }}
              placeholder='Room Name'
            />
          ),
          accessorKey: "name",
          header: "Name",
        },
        {
          cell: ({ row }) => (
            <TextInput
              type='number'
              label=''
              defaultValue='0'
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
              type='number'
              label=''
              defaultValue='0'
              onBlur={(v) =>
                handleRoomChange(v, "taxes", row.original.room_id as number)
              }
            />
          ),
          accessorKey: "taxes",
          header: "Taxes (%)",
        },
        {
          cell: ({ row }) => (
            <TextInput
              type='text'
              label=''
              defaultValue='Single'
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
              defaultValue='101'
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
              defaultValue='0'
            />
          ),
          accessorKey: "able",
          header: "Reserved?",
        },
      ],
      [ableSelectOpts, handleRoomChange],
    ),
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      hasHeader
      title='New Hotel Information'
      className=''
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
            onChange={(v) => handleHotelFormInputs("name", v)}
          />
          <TextInput
            label='Total Rooms'
            type='number'
            hasLabel
            id='total_rooms'
            name='total_rooms'
            onChange={(v) => handleHotelFormInputs("total_rooms", v)}
          />
          <Selector
            options={selectorOpts}
            placeholder='# Stars'
            onChange={(v) => handleHotelFormInputs("stars", v)}
          />
          <Selector
            onChange={(v) => handleHotelFormInputs("able", v)}
            options={ableSelectOpts}
            placeholder='Select Option'
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
          <Table title='Rooms' pageSize={5} {...hotelData} />
        </div>
        <LightButton className='inline-flex mt-6' type='submit'>
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
          Add Information
        </LightButton>
      </form>
    </Modal>
  );
};

export default AddHotelModal;
