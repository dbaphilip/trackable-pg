import { prisma } from "@/prisma/client";
import IssueStatusBadge from "../components/IssueStatusBadge";
import delay from "delay";
import Link from "next/link";
import type { Metadata } from "next";

// Time and Date Formatting
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import IssuesToolbar from "./IssuesToolbar";
import { Status } from "../generated/prisma/enums";
import { Issue } from "../generated/prisma/client";
dayjs.extend(relativeTime);

export const dynamic = "force-dynamic";
// export const revalidate = 0

export const metadata: Metadata = {
  title: "View all issues",
  description: "View all issues",
};

const columns: { label: string; value: keyof Issue }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status" },
  { label: "Created", value: "createdAt" },
];

export default async function Issues(context: {
  searchParams: Promise<{ status: Status; orderBy: keyof Issue }>;
}) {
  const { status, orderBy } = await context.searchParams;

  const statuses = Object.values(Status);
  const validStatus = statuses.includes(status) ? status : undefined;

  const sortBy = columns.map((col) => col.value).includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: { status: validStatus },
    orderBy: sortBy,
  });
  await delay(1000);

  return (
    <div className="container">
      <div className="row mt-3 mb-5">
        <IssuesToolbar />
      </div>

      <div className="row">
        <div className="col-md-12">
          <table className="fs-3 table">
            <thead>
              <tr>
                <th scope="col"></th>
                {columns.map((col) => (
                  <th key={col.label} scope="col">
                    <Link
                      href={{
                        query: { status, orderBy: col.value },
                      }}
                      className="text-secondary"
                    >
                      {col.label}
                    </Link>
                    {col.value == orderBy && "👈"}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {issues.map((issue) => (
                <tr key={issue.id}>
                  <th scope="row">{issue.id}</th>
                  <td>
                    <Link
                      className="text-decoration-none"
                      href={`/issues/${issue.id}`}
                    >
                      {issue.title}
                    </Link>
                  </td>
                  <td>
                    <IssueStatusBadge status={issue.status} />
                  </td>
                  <td className="text-secondary">
                    {dayjs(issue.createdAt).fromNow()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
