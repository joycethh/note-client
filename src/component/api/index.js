import axios from "axios";

const url = "http://localhost:4000";

export const fetchNotes = () => axios.get(url);
