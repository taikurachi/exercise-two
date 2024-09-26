const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export default function formatDateForArticle(incomingDate) {
  const freshDate = new Date(incomingDate);
  const month = MONTHS[freshDate.getMonth()];
  const day = freshDate.getDate();
  const formattedDay = day > 9 ? day : "0" + day;
  const year = freshDate.getFullYear();
  return `${month} ${formattedDay}, ${year}`;
}
