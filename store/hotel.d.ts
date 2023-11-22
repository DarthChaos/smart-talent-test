interface PeopleReservationInterface {
  name: string;
  surname: string;
  genre: "M" | "F" | "NB";
  docType: string;
  docNum: string;
  email: string;
  phone: string;
  emergency: {
    name: string;
    surname: string;
    phone: string;
  };
}

interface RoomInterface {
  room_id: number;
  name: string;
  price: number;
  taxes: number;
  type: string;
  location: string;
  able: string;
  reservationDetails?: {
    people: PeopleReservationInterface[];
    numberPeople?: number;
  };
}

interface RoomManageDTO {
  room_id: number;
  name?: string;
  price?: number;
  taxes?: number;
  type?: string;
  location?: string;
  able?: string;
  isReady?: boolean;
}

interface HotelInterface {
  hotel_id: number;
  name: string;
  able: string;
  stars: number;
  rooms: RoomInterface[];
  rooms_available?: number;
  total_rooms?: number;
}

interface HotelUpdateDTO {
  hotel_id: number;
  name?: string;
  able?: string;
  stars?: number;
  rooms?: RoomInterface[];
  rooms_available?: number;
  total_rooms?: number;
}
