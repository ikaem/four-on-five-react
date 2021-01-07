import dayjs from "dayjs";

const formatDateTime = (dateIsoString: string, type: "date" | "time") => {
  if (type === "time") return dayjs(dateIsoString).format("HH:MM");
  return dayjs(dateIsoString).format("dddd, DD MMM YYYY");
};

export default formatDateTime;
