import z from "zod";

export const createIssueSchema = z.object({
  title: z.string().min(3, "TITLE is too short").max(255),
  description: z.string().min(3, "DESCRIPTION is too short"),
});

export const updateIssueSchema = z.object({
  title: z.string().min(3, "TITLE is too short").max(255),
  description: z.string().min(3, "DESCRIPTION is too short"),
  status: z.enum(["OPEN", "WIP", "CLOSED"])
});