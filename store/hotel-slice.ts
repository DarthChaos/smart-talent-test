import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface HotelSliceState {
  hotels: HotelInterface[] | null;
  searchHotels: HotelInterface[] | [] | null;
  searchRooms: RoomInterface[] | [] | null;
}

const initialState: HotelSliceState = {
  hotels: [
    {
      hotel_id: 0,
      name: "Hotel",
      rooms_available: 5,
      total_rooms: 10,
      able: "1",
      stars: 3,
      rooms: [
        {
          room_id: 0,
          name: "Single 101",
          price: 10,
          taxes: 6,
          type: "Single",
          location: "101",
          able: "1",
        },
        {
          room_id: 1,
          name: "Double 102",
          price: 18,
          taxes: 6,
          type: "Double",
          location: "202",
          able: "1",
        },
        {
          room_id: 2,
          name: "Single 103",
          price: 10,
          taxes: 6,
          type: "Single",
          location: "103",
          able: "0",
        },
        {
          room_id: 3,
          name: "104",
          price: 18,
          taxes: 6,
          type: "Double",
          location: "104",
          able: "1",
        },
        {
          room_id: 4,
          name: "Double 105",
          price: 28,
          taxes: 6,
          type: "Double",
          location: "201",
          able: "1",
        },
        {
          room_id: 5,
          name: "Studio 106",
          price: 36,
          taxes: 6,
          type: "Studio",
          location: "202",
          able: "0",
        },
        {
          room_id: 6,
          name: "Single Sea View 107",
          price: 30,
          taxes: 6,
          type: "Single Sea View",
          location: "203",
          able: "0",
        },
        {
          room_id: 7,
          name: "Deluxe Sea View 108",
          price: 50,
          taxes: 6,
          type: "Deluxe Sea View",
          location: "204",
          able: "1",
        },
        {
          room_id: 8,
          name: "Suite 109",
          price: 70,
          taxes: 6,
          type: "Suite",
          location: "301",
          able: "0",
        },
        {
          room_id: 9,
          name: "Presidential 110",
          price: 100,
          taxes: 6,
          type: "Presidential",
          location: "302",
          able: "0",
        },
      ],
    },
    {
      hotel_id: 1,
      name: "Hotel New Tes",
      rooms_available: 2,
      total_rooms: 2,
      able: "0",
      stars: 4,
      rooms: [
        {
          room_id: 0,
          name: "Single 101",
          price: 10,
          taxes: 6,
          type: "Single",
          location: "101",
          able: "1",
        },
        {
          room_id: 1,
          name: "Double 102",
          price: 18,
          taxes: 6,
          type: "Double",
          location: "202",
          able: "1",
        },
      ],
    },
  ],
  searchHotels: null,
  searchRooms: null,
};
const initialRoom = {
  room_id: 0,
  name: "",
  price: 0,
  taxes: 0,
  type: "Single",
  location: "101",
  able: "0",
};
const initialHotel = {
  hotel_id: 0,
  name: "",
  rooms_available: 0,
  total_rooms: 1,
  able: "0",
  stars: 1,
  rooms: [initialRoom],
};

export const hotelSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setHotels: (state, action: PayloadAction<HotelInterface[]>) => {
      const newHotels = action.payload.map(({ rooms, ...hotel }) => ({
        ...hotel,
        rooms,
        total_rooms: rooms.length,
        rooms_available: rooms.filter(({ able }) => able === "1").length,
      }));

      state.hotels = newHotels;
    },
    updateExistingHotel: (state, action: PayloadAction<HotelUpdateDTO>) => {
      const hotelToUpdate = state.hotels?.find(
        ({ hotel_id }) => hotel_id === action.payload.hotel_id,
      );

      if (hotelToUpdate) Object.assign(hotelToUpdate, action.payload);
    },
    addNewHotel: (state, action: PayloadAction<{ hotel?: HotelInterface }>) => {
      const newHotel = action.payload.hotel;

      if (newHotel) {
        newHotel.total_rooms = newHotel.rooms.length;
        newHotel.rooms_available = newHotel.rooms.filter(
          ({ able }) => able === "1",
        ).length;

        state.hotels?.push(newHotel);
      } else if (state.hotels) {
        const newIndex =
          ([...state.hotels]?.sort((a, b) => b.hotel_id - a.hotel_id)[0]
            .hotel_id || 0) + 1;

        state.hotels?.unshift({ ...initialHotel, hotel_id: newIndex });
      }
    },
    setRoomsInHotel: (
      state,
      action: PayloadAction<{ hotel_id: number; rooms: RoomInterface[] }>,
    ) => {
      const hotelToAppendRooms = state.hotels?.find(
        ({ hotel_id }) => hotel_id === action.payload.hotel_id,
      );

      if (hotelToAppendRooms) {
        hotelToAppendRooms.rooms = action.payload.rooms;
        hotelToAppendRooms.total_rooms = action.payload.rooms.length;
        hotelToAppendRooms.rooms_available = action.payload.rooms.filter(
          ({ able }) => able === "1",
        ).length;
      }
    },
    updateRoom: (
      state,
      action: PayloadAction<{ hotel_id: number; room: RoomManageDTO }>,
    ) => {
      const hotelWithRoom = state.hotels?.find(
        ({ hotel_id }) => hotel_id === action.payload.hotel_id,
      );

      if (hotelWithRoom) {
        const roomToUpdate = hotelWithRoom.rooms.find(
          ({ room_id }) => room_id === action.payload.room.room_id,
        );

        if (roomToUpdate) Object.assign(roomToUpdate, action.payload.room);

        hotelWithRoom.rooms_available = hotelWithRoom.rooms.filter(
          ({ able }) => able === "1",
        ).length;
      }
    },
    addNewRoom: (
      state,
      action: PayloadAction<{ hotel_id: number; room?: RoomInterface }>,
    ) => {
      const hotelToAddRoom = state.hotels?.find(
        ({ hotel_id }) => hotel_id === action.payload.hotel_id,
      );

      if (hotelToAddRoom) {
        const newIndex =
          [...hotelToAddRoom.rooms].sort((a, b) => b.room_id - a.room_id)[0]
            ?.room_id + 1 || 0;
        const newRoomNum =
          +[...hotelToAddRoom.rooms].sort(
            (a, b) => +b.location - +a.location,
          )[0].location + 1 || 101;

        hotelToAddRoom.rooms.unshift({
          ...(action.payload.room ? action.payload.room : initialRoom),
          room_id: newIndex,
          location: newRoomNum.toString(),
        });

        hotelToAddRoom.total_rooms = hotelToAddRoom.rooms.length;
        hotelToAddRoom.rooms_available = hotelToAddRoom.rooms.filter(
          ({ able }) => able === "1",
        ).length;
      }
    },
    textSearchHotels: (state, action: PayloadAction<string>) => {
      const search = action.payload;

      if (action.payload.length !== 0 && state.hotels)
        state.searchHotels = state.hotels.filter(
          ({ name, total_rooms, stars }) =>
            name.toLowerCase().includes(search.toLowerCase()) ||
            total_rooms?.toString().includes(search) ||
            stars?.toString().includes(search),
        );
      else state.searchHotels = null;
    },
    textSearchRooms: (
      state,
      action: PayloadAction<{ hotel_id: number; search: string }>,
    ) => {
      const search = action.payload;

      if (search.search.length !== 0 && state.hotels) {
        const hotel = state.hotels.find(
          ({ hotel_id }) => hotel_id === search.hotel_id,
        );
        const roomSearch = hotel?.rooms.filter(
          ({ name, location, price, taxes, type }) =>
            name.toLowerCase().includes(search.search.toLowerCase()) ||
            location.toLowerCase().includes(search.search.toLowerCase()) ||
            type.toLowerCase().includes(search.search.toLowerCase()) ||
            price?.toString().includes(search.search) ||
            taxes?.toString().includes(search.search),
        );

        state.searchRooms = roomSearch as RoomInterface[];
      } else state.searchHotels = null;
    },
    // getAllRoomsFromHotel: (state, action: PayloadAction<number>) => state.hotels?.find(({hotel_id}) => hotel_id === action.payload.) || []
  },
});

export const {
  addNewHotel,
  setHotels,
  updateExistingHotel,
  addNewRoom,
  setRoomsInHotel,
  updateRoom,
  textSearchHotels,
  textSearchRooms,
} = hotelSlice.actions;

export default hotelSlice.reducer;
