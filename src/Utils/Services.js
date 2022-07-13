import moment from "moment";

export const showDateInfo = (date) => {
  const isValid = moment(date).isValid();
  if (isValid) {
    return moment(date).format("DD-MM-YYYY");
  } else {
    return "-";
  }
};
