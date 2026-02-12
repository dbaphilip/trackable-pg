import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import delay from "delay";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { cache } from "react";

const fetchIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } }),
);

export default async function IssueDetailsPage(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;

  const issue = await fetchIssue(parseInt(id));
  await delay(3000);

  if (!issue) notFound();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className="fs-1">{issue.title}</h1>
          <div className="d-flex justify-content-between align-items-center">
            <div className="fs-3">
              <IssueStatusBadge status={issue.status} />
            </div>

            <span className="fs-5 fw-bold">
              {issue.createdAt.toDateString()}
            </span>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="lh-1 fs-2 p-2 brico shadow-secondary"
            dangerouslySetInnerHTML={{ __html: issue.description }}
          />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;
  const issue = await fetchIssue(parseInt(id));

  return {
    title: `${issue?.title}`,
    description: `${issue?.title}`,
  };
}
