export const getHeaders = () => {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return header;
};
