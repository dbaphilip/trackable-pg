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
    <table className="latest fs-3 shadow-tile table">
      <thead>
        <tr>
          <th className="brico ps-4 pt-4" scope="col">
            Most recent issues
          </th>
        </tr>
      </thead>

      <tbody>
        {issues.map((issue) => (
          <tr key={issue.id}>
            <td className="ps-4 pt-3">
              <Link
                href={`/issues/${issue.id}`}
                style={{ textDecoration: "none" }}
              >
                <div className="d-flex mb-2 align-items-center">
                  <Avatar size={42} imageUrl={issue.user!.image!} />

                  <div className="d-flex flex-column align-items-start">
                    <span className="ms-3">{issue.title}</span>
                    <span className="ms-4">
                      <IssueStatusBadge status={issue.status} />
                    </span>
                  </div>
                </div>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
