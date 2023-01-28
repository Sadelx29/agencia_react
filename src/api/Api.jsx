import axios from "axios";

export const getViajesRequest = async () =>
  await axios.get("http://localhost:4000/viajes/");

// export const getOneViajeRequest = async (id) =>
//   await axios.get(`http://localhost:4000/viajes/${id}/`);

// export const createTestimonialRequest = async (testimonial) =>
//   await axios.post("http://localhost:4000/testimoniales", testimonial);
