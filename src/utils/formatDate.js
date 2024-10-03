function formatDate(dateInput) {
  const formattedDate = new Date(dateInput);
  return formattedDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
  });
}

export default formatDate;
