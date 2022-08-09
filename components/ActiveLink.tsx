import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC, ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export const ActiveLink: FC<Props> = ({ href, children }) => {
  const { asPath } = useRouter();

  const style: CSSProperties = {
    color: "#0070f3",
    textDecoration: "none",
    fontWeight: asPath === href ? "bold" : "normal",
  };

  return (
    <Link href={href}>
      <a style={style}>{children}</a>
    </Link>
  );
};
