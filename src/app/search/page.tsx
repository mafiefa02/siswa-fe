"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

import logo from "@/../public/logoOSM.png";
import Container from "@/components/layout/container";
import Navbar from "@/components/layout/navbar";
import {
  H1,
  H3,
  H4,
  LargeParagraph,
  LeadParagraph,
  P,
} from "@/components/typography";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import SearchItem from "./(components)/search-item";

export default function SearchPage() {
  const searchParams = useSearchParams()!;
  const keyword = searchParams.get("keyword");

  return (
    <>
      <Container className="py-12">
        <div className="flex flex-col gap-12 items-center justify-center h-full">
          {/*<Image
            src={logo}
            alt="OSM"
            width={60}
            height={60}
            className="mx-auto"
          />*/}

          <H1 className="text-left w-full text-primary -mb-16">
            Hasil Pencarian
          </H1>
          <P className="text-left w-full">
            Menampilkan hasil untuk <b>{keyword}</b>
          </P>
          <div className="flex flex-col gap-2 w-full">
            <P>Berdasarkan nama</P>
            <Accordion className="w-full" type="single" collapsible>
              <SearchItem value="1" />
              <SearchItem value="2" />
              <AccordionItem value={"3"}>
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
            </Accordion>
          </div>
        </div>
      </Container>
    </>
  );
}
