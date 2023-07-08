import React from "react";

import { LargeParagraph } from "@/components/typography";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export default function SearchItem({ value }: { value: string }) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="flex flex-row items-center gap-2">
          <Avatar>
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <LargeParagraph>Muhammad Afief Abdurrahman</LargeParagraph>
        </div>
      </AccordionTrigger>
      <AccordionContent>LOL</AccordionContent>
    </AccordionItem>
  );
}
