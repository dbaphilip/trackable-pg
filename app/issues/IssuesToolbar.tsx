import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";

export default function IssuesToolbar() {
  return (
    <div className="d-flex justify-content-between">
      <IssueStatusFilter />

      <Link
        className="brico fw-bold btn btn-primary shadow-primary fs-3"
        href="/issues/new"
      >
        new issue
      </Link>
    </div>
  );
}
