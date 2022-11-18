import { createStore } from "redux";
import { mainreducer } from "./reducer";

export const store = createStore(mainreducer);
