import { Suspense } from "react";

function SuspenceProvider({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {children}
    </Suspense>
  );
}

export default SuspenceProvider;
