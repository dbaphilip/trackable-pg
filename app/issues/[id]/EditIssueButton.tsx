import Link from "next/link";

interface Props {
  issueId: number;
}

export default function EditIssueButton({ issueId }: Props) {
  return (
    <Link
      className="align-self-center fw-bold brico btn btn-primary shadow-primary fs-3"
      href={`/issues/${issueId}/edit`}
    >
      edit
    </Link>
  );
}
