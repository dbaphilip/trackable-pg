import { GoTrash } from "react-icons/go";

interface Props {
  issueId: number;
}

export default function DeleteIssueButton({ issueId }: Props) {
  return (
    <button className="fw-bold btn btn-danger shadow-primary fs-3">
      DELETE
    </button>
  );
}
