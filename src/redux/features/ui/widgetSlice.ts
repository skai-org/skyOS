import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type WidgetState = {
  widgets: { widgetId: string; }[];
};

const initialState: WidgetState = {
  widgets: [],
};

export const widgetList = createSlice({
  name: "widgetlist",
  initialState,
  reducers: {
    openWidget: (
      state,
      action: PayloadAction<{ id: string}>
    ) => {
      
      const { id} = action.payload;
      console.log("OPen necki ",id);
      state.widgets.push({ widgetId: id});
    },
    closeWidget: (
      state,
      action: PayloadAction<{ id: string }>
    ) => {
      const { id } = action.payload;
      state.widgets = state.widgets.filter(
        (widget) => widget.widgetId !== id
      );
    },
  },
});

export const { openWidget, closeWidget } = widgetList.actions;
export default widgetList.reducer;
