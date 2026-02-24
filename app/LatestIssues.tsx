import { prisma } from "@/prisma/client";
import Link from "next/link";
import Avatar from "./components/Avatar";
import IssueStatusBadge from "./components/IssueStatusBadge";

export default async function LatestIssues() {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    include: { user: true },
    take: 3,
  });

  return (
    <>
      <table className="fs-3 table">
        <thead>
          <tr>
            <th className="brico ps-2 pt-4" scope="col">
              Newest
            </th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>
                <div className="d-flex align-items-center">
                  <Avatar size={42} imageUrl={issue.user!.image!} />
                  <div className="ms-3">
                    <Link
                      className="text-decoration-none"
                      href={`/issues/${issue.id}`}
                    >
                      {issue.title}
                    </Link>
                    <div>
                      <IssueStatusBadge status={issue.status} />
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
