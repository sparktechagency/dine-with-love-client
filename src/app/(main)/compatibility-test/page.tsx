import CompatibilityTest from "@/components/layout/main/compatibility-test/CompatibilityTest";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compatibility Test | Dine With Love",
  description:
    "Find your perfect dining partner by taking our personality and preference compatibility test.",
};

const CompatibilityTestPage = () => {
  return <CompatibilityTest />;
};

export default CompatibilityTestPage;
