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
    <table className="fs-3 table">
      <tbody>
        {issues.map((issue) => (
          <tr key={issue.id}>
            <th scope="row">
              <Avatar imageUrl={issue.user!.image!} />
            </th>
            <td>
              <Link
                className="text-decoration-none"
                href={`/issues/${issue.id}`}
              >
                {issue.title}
              </Link>
              <div>
                <IssueStatusBadge status={issue.status} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
