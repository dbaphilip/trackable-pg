"use client";

import classnames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBugs, FaBugSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { TfiDashboard } from "react-icons/tfi";
import Avatar from "./components/Avatar";
import Skeleton from "./components/Skeleton";

export default function Navbar() {
  const { status, data: session } = useSession();
  const currentPath = usePathname();

  const links = [
    { href: "/", icon: <TfiDashboard color="inherit" />, label: "DASHBOARD" },
    { href: "/issues", icon: <FaBugs color="inherit" />, label: "ISSUESs" },
  ];

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <FaBugSlash fontSize={50} />
          </a>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          {links.map((link) => (
            <li className="nav-li shadow-primary" key={link.label}>
              <Link
                href={link.href}
                className={classnames({
                  "nav-link px-2": true,
                  "link-secondary": link.href == currentPath,
                })}
              >
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>

        <div className="col-md-3 text-end">
          {status == "loading" && <Skeleton />}

          {status == "unauthenticated" && (
            <Link
              href="/api/auth/signin"
              className="fs-4 shadow-primary btn me-2"
            >
              <div className="fs-4 d-flex align-items-center text-primary">
                <span>
                  <FcGoogle />
                </span>
                <span className="fw-bold brico ms-2 me-4">Sign in</span>
              </div>
            </Link>
          )}

          {status == "authenticated" && (
            <Link
              href="/api/auth/signout"
              className="fs-4 shadow-primary btn me-2"
            >
              <div className="fs-4 d-flex align-items-center text-primary">
                <span className="me-3 mb-2">
                  <Avatar imageUrl={session.user!.image!} />
                </span>
                <span className="text-danger fw-bold brico me-4">Logout</span>
              </div>
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}
