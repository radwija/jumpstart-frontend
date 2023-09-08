export const CartIcon = ({ customClass }) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`${customClass || 'h-6 w-6 text-white'}`}
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <circle cx="9" cy="19" r="2"></circle>
      <circle cx="17" cy="19" r="2"></circle>
      <path d="M3 3h2l2 12a3 3 0 003 2h7a3 3 0 003-2l1-7H5.8"></path>
    </svg>
  );
}

export const TruckIcon = ({ customClass }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`${customClass || 'h-6 w-6 text-white'}`}
      viewBox="0 0 24 24"
    >
      <path d="M1 3H16V16H1z"></path>
      <path d="M16 8L20 8 23 11 23 16 16 16 16 8z"></path>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
}

