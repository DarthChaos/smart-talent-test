import { TableDataObject } from "@/components/table/table";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AdminSliceState {
  editInfo: TableDataObject | null;
  hasAdd: boolean;
}

const initialState: AdminSliceState = {
  editInfo: null,
  hasAdd: false,
};

export const adminSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateHotel: (state, action: PayloadAction<TableDataObject>) => {
      state.editInfo = action.payload;
    },
    onEditCloseModal: (state) => {
      state.editInfo = null;
    },
    addHotel: (state, action: PayloadAction<boolean>) => {
      state.hasAdd = action.payload;
    },
  },
});

export const { addHotel, onEditCloseModal, updateHotel } = adminSlice.actions;

export default adminSlice.reducer;
