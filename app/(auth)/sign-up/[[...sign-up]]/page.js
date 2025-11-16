import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-custom-dark to-custom-medium">
      <SignUp />
    </div>
  );
}