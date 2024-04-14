// Dete formatter

function formatDate(date: Date) {
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    // second: "numeric",
  });
  return formattedDate;
}

export default formatDate;
