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
      className={`${customClass || 'h-6 w-6'}`}
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
      className={`${customClass || 'h-6 w-6'}`}
      viewBox="0 0 24 24"
    >
      <path d="M1 3H16V16H1z"></path>
      <path d="M16 8L20 8 23 11 23 16 16 16 16 8z"></path>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
  );
}

export const UserIcon = ({ customClass }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      className={`${customClass || 'h-6 w-6'}`}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  );
}

export const BagIcon = ({ customClass }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      className={`${customClass || 'h-6 w-6'}`}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      ></path>
    </svg>
  );
}

export const LogOutIcon = ({ customClass }) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`${customClass || 'h-6 w-6'}`}
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2"></path>
      <path d="M7 12h14l-3-3m0 6l3-3"></path>
    </svg>
  );
}

export const EditIcon = ({ customClass }) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`${customClass || 'h-6 w-6'}`}
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M9 7H6a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-3"></path>
      <path d="M9 15h3l8.5-8.5a1.5 1.5 0 00-3-3L9 12v3"></path>
      <path d="M16 5L19 8"></path>
    </svg>
  );
}


