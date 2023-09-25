export const formatDate = (inputDate) => {
  const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
  const date = new Date(inputDate);
  return date.toLocaleDateString('en-US', options);
}