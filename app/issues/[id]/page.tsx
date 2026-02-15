import { prisma } from "@/prisma/client";
import delay from "delay";
import { notFound } from "next/navigation";
import { cache } from "react";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

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
      <div className="row">
        <IssueDetails issue={issue} />
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
