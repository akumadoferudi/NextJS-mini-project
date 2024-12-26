// import Menu from "@/components/menu";
// import { withAuth } from "../with-auth";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={`${styles.header} flex flex-row p-3 gap-3`}>
      <div
        className="
          px-2 
          border-solid 
          border-2 
          border-[#ECDFCC] 
          rounded-md 
          hover:bg-[#ECDFCC] 
          hover:text-[#0b192c]"
      >
        <Link href="/">Home</Link>
      </div>
      <div
        className="
          px-2 
          border-solid 
          border-2 
          border-[#ECDFCC] 
          rounded-md 
          hover:bg-[#ECDFCC] 
          hover:text-[#0b192c]"
      >
        <Link href="/profile">Profile</Link>
      </div>
      <div
        className="
          px-2 
          border-solid 
          border-2 
          border-[#ECDFCC] 
          rounded-md 
          hover:bg-[#ECDFCC] 
          hover:text-[#0b192c]"
      >
        <Link href="/users">Users</Link>
      </div>
      <div
        className="
          px-2 
          border-solid 
          border-2 
          border-[#ECDFCC] 
          rounded-md 
          hover:bg-[#ECDFCC] 
          hover:text-[#0b192c]"
      >
        <Link href="/notes">Notes</Link>
      </div>
    </div>
  );
}

/**
 * Higher order component practice
 */
// function Header() {
//   return (
//     <div>
//       <Menu />
//     </div>
//   );
// }

// export default withAuth(Header);
