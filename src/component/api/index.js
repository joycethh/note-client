import axios from "axios";

const url = "http://localhost:4000";

export const fetNotes = () => axios.get(url);
