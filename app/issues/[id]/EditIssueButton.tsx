import Link from "next/link";

interface Props {
  issueId: number;
}

export default function EditIssueButton({ issueId }: Props) {
  return (
    <Link
      className="fw-bold btn btn-primary shadow-primary fs-3"
      href={`/issues/${issueId}/edit`}
    >
      EDIT
    </Link>
  );
}
