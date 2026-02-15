import { prisma } from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";
import delay from "delay";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";
// export const revalidate = 0

export const metadata: Metadata = {
  title: "View all issues",
  description: "View all issues",
};

export default async function Issues() {
  const issues = await prisma.issue.findMany();
  await delay(1000);

  return (
    <div className="container">
      <table className="fs-3 shadow-primary table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Issue</th>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <th scope="row">{issue.id}</th>
              <td>
                <Link
                  className="fs-2 text-decoration-none"
                  href={`/issues/${issue.id}`}
                >
                  {issue.title}
                </Link>
              </td>
              <td>
                <IssueStatusBadge status={issue.status} />
              </td>
              <td className="brico fs-5 fw-bold text-secondary">
                {issue.createdAt.toDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
