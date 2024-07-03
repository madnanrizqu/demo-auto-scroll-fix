"use client";

import Footer from "@/components/Footer";
import { FixFlag, useFixFlag } from "@/contexts/fix-flag-context";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Home() {
  const fixFlagCtx = useFixFlag();

  const handleChangeFixStatus = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    fixFlagCtx.setFlag(data.get("fixFlag") as FixFlag);
  };

  return (
    <>
      <main className="space-y-4">
        <ul className="space-y-2">
          <li>
            <Link href="/itineraries/1#target">Itineraries 1</Link>
          </li>
          <li>
            <Link href="/itineraries/2#target">Itineraries 2</Link>
          </li>
          <li>
            <Link href="/itineraries/3#target">Itineraries 3</Link>
          </li>
          <li>
            <Link href="/itineraries/4#target">Itineraries 4</Link>
          </li>
        </ul>

        <form
          className="flex flex-col gap-2 items-start"
          onSubmit={handleChangeFixStatus}
        >
          <p>Enable demo fix:</p>

          <div>
            <input
              defaultChecked={fixFlagCtx.flag === "enabled"}
              type="radio"
              id="enable"
              name="fixFlag"
              value="enabled"
            />
            <label htmlFor="enable">Enable</label>
          </div>

          <div>
            <input
              defaultChecked={fixFlagCtx.flag === "disabled"}
              type="radio"
              id="disable"
              name="fixFlag"
              value="disabled"
            />
            <label htmlFor="disable">Disable</label>
          </div>

          <button className="border rounded p-2 cursor-pointer" type="submit">
            Submit
          </button>
        </form>
      </main>

      <Footer />
    </>
  );
}
