import request from "./request";

export function fetchMembersData() {
  return request.get("/api/members/");
}
