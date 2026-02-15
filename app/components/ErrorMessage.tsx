import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
  if (!children) return null;
  return <div className="fw-bold fs-4 form-text text-danger">{children}</div>;
}
