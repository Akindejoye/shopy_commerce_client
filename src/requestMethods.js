import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWVjODgwODUwYzZmNDA4MmMxZTQxMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzAzODk3MCwiZXhwIjoxNjQzMjk4MTcwfQ.u115rRu90oXShfULjeiFwFgriQrnhIQgF48OQjIbqfc";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`},
});