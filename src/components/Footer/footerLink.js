import Link from "next/link";

export const FooterLink = ({ children, link, cls }) => {
  return (
    <li className={`text-base mx-4 font-light  ${cls} `}>
      <Link className={`text-[#a3a2a2]`} href={link}>
        {children}
      </Link>
    </li>
  );
};
