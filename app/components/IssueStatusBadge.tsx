import { Status } from "../generated/prisma/enums";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "success" | "warning" | "danger" }
> = {
  OPEN: { label: "OPEN", color: "danger" },
  WIP: { label: "WIP", color: "warning" },
  CLOSED: { label: "CLOSED", color: "success" },
};

export default function IssueStatusBadge({ status }: Props) {
  return (
    <span className={`badge text-bg-${statusMap[status].color}`}>
      {statusMap[status].label}
    </span>
  );
}
