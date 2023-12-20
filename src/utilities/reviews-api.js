import sendRequest from "./send-request";
const BASE_URL = "/api/reviews";

export async function getAllReviews() {
  return sendRequest(`${BASE_URL}`);
}

export async function addReview() {
  return sendRequest(`${BASE_URL}`, "POST");
}

export async function updateReview(reviewId) {
  return sendRequest(`${BASE_URL}/${reviewId}`, "PUT");
}

export async function deleteReview(reviewId) {
  return sendRequest(`${BASE_URL}/${reviewId}`, "DELETE");
}
