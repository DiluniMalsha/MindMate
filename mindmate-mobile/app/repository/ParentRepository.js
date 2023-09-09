import Repository from "./Repository";

const getParentDetails = (id) => {
  return Repository.get("/parent/" + id);
};

const updateParentDetails = (details) => {
  return Repository.get("/parent/", details);
};

const changePassword = (passwordDetails) => {
  return Repository.get("/parent/", passwordDetails);
};

export { getParentDetails };
