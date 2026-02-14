import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import { NextResponse } from "next/server";
import delay from "delay";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { cache } from "react";
import Link from "next/link";
import IssueDetails from "./IssueDetails";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";

const fetchIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } }),
);

export default async function IssueDetailsPage(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;

  const issue = await fetchIssue(parseInt(id));
  await delay(1000);

  if (!issue) notFound();

  return (
    <div className="container">
      <IssueDetails issue={issue} />

      <div className="row">
        <div className="offset-md-6 col-md-6">
          <div className="mt-4 d-flex justify-content-between">
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </div>
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
