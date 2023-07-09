import React from "react";

import Container from "@/components/layout/container";
import { H1 } from "@/components/typography";
import { Skeleton } from "@/components/ui/skeleton";

export default function RootLoading() {
  return (
    <Container className="flex flex-row justify-between h-screen w-full items-center">
      <H1>Loading...</H1>
    </Container>
  );
}
