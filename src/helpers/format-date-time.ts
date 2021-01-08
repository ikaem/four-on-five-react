import dayjs from "dayjs";

const formatDateTime = (
  dateIsoString: string,
  type?: "date" | "time" | "year" | "month"
) => {
  switch (type) {
    case "time": {
      return dayjs(dateIsoString).format("HH:MM");
    }
    case "date": {
      return dayjs(dateIsoString).format("dddd, DD MMM YYYY");
    }
    case "month": {
      return dayjs(dateIsoString).format("MMMM");
    }
    case "year": {
      return dayjs(dateIsoString).format("YYYY");
    }
    default: {
      return dayjs(dateIsoString).format("dddd, DD MMM YYYY");
    }
  }
};

export default formatDateTime;
