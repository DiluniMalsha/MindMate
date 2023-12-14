// import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// const timetableState = createEntityAdapter({
//   selectId: (timetable) => timetable.id,
// });

// const initialState = timetableState.getInitialState();

// export const timetableSlice = createSlice({
//   name: "timetable",
//   initialState,
//   reducers: {
//     addTimetableRecords: timetableState.addMany,
//   },
// });

// // Action creators are generated for each case reducer function
// export const { addTimetableRecords } = timetableSlice.actions;
// export const { selectById: selectParentById } = timetableSlice.getSelectors(
//   (store) => store.timetable
// );
// export default timetableSlice.reducer;
