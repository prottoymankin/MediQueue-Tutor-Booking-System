"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Drawer} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AuthButton from "./AuthButton";

export function NavigationDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = authClient.useSession();
  const user = data?.user;

  return (
    <Drawer isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button 
        className={"bg-slate-200 dark:bg-slate-900 shadow-lg shadow-slate-200/50 dark:shadow-black/20 text-slate-900 dark:text-slate-50 flex lg:hidden"}
        isIconOnly
      >
        <FaBars />
      </Button>

      <Drawer.Backdrop>
        <Drawer.Content placement="left">
          <Drawer.Dialog>
            <Drawer.CloseTrigger />
            <Drawer.Body className="mt-10">
              <nav className="flex flex-col gap-1">
                <Link
                  className="rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                  href={"/"}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <Link
                  className="rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                  href={"/tutors"}
                  onClick={() => setIsOpen(false)}
                >
                  Tutors
                </Link>

                {
                  user && (
                    <>
                      <Link
                        className="rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                        href={"/add-tutors"}
                        onClick={() => setIsOpen(false)}
                      >
                        Add Tutors
                      </Link>

                      <Link
                        className="rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                        href={"/my-tutors"}
                        onClick={() => setIsOpen(false)}
                      >
                        My Tutors
                      </Link>

                      <Link
                        className="rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                        href={"/booked-sessions"}
                        onClick={() => setIsOpen(false)}
                      >
                        Booked Sessions
                      </Link>
                    </>
                  )
                }

                {
                  !user && (
                    <>
                      <AuthButton
                        path={"/signin"}
                        text={"Sign In"}
                        isFullWidth={true}
                        isSecondary={false}
                      />

                      <AuthButton
                        path={"/signup"}
                        text={"Sign Up"}
                        isFullWidth={true}
                        isSecondary={true}
                      />
                    </>
                  )
                }
              </nav>
            </Drawer.Body>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  );
}