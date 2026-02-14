import { Status } from "@/app/generated/prisma/enums";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import EditIssueForm from "./EditIssueForm";

const statuses: Status[] = ["OPEN", "WIP", "CLOSED"];

export default async function EditIssuePage(context: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await context.params;
  const issue = await prisma.issue.findUnique({ where: { id: parseInt(id) } });

  if (!issue) notFound();

  return <EditIssueForm issue={issue} />;
}
