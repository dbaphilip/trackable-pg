import { Status } from "../generated/prisma/enums";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "success" | "warning" | "danger" }
> = {
  OPEN: { label: "Open", color: "danger" },
  WIP: { label: "WIP", color: "warning" },
  CLOSED: { label: "Closed", color: "success" },
};

export default function IssueStatusBadge({ status }: Props) {
  return (
    <span
      className={`shadow-primary brico badge text-bg-${statusMap[status].color}`}
    >
      {statusMap[status].label}
    </span>
  );
}
