"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaCalendarCheck } from "react-icons/fa";

export function BookSessionModal ({ tutorId, tutorName, totalSlot, sessionStartDate }) {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = authClient.useSession();
  const user = data?.user;

  const sessionStartTime = new Date(sessionStartDate).getTime();
  const currentTime = new Date().getTime();

  const handleBookSession = () => {
    if (sessionStartTime < currentTime) {
      toast.error("Booking is not available yet for this tutor.");
      return;
    }

    if (parseInt(totalSlot) === 0) {
      toast.error("This session is fully booked. You can’t join at the moment");
      return;
    }

    setIsOpen(true);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let bookedSessionData = Object.fromEntries(formData.entries());

    bookedSessionData = {
      ...bookedSessionData, 
      status: "Confirm",
      studentId: user?.id
    };

    const { data:tokenData } = await authClient.token();
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booked-session`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(bookedSessionData)
    });

    const data = await response.json();

    if (data.acknowledged) {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/change-slot/${tutorId}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        },
        body: JSON.stringify({value: -1})
      });
      toast.success("Session booked successful");
      redirect("/booked-sessions");
    }
  }

  return (
    <>
      <Button 
        className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
        onClick={handleBookSession}
      >
        Book Session
      </Button>

      <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <FaCalendarCheck />
                </Modal.Icon>
                <Modal.Heading>Book Session</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Complete the form to reserve your session.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form 
                    className="flex flex-col gap-4"
                    onSubmit={onSubmit}
                  >
                    <TextField 
                      className="w-full"
                      defaultValue={user?.name} 
                      name="name" 
                      type="text" 
                      variant="secondary"
                    >
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>

                    <TextField 
                      className="w-full" 
                      name="phone" 
                      type="tel"
                      isRequired 
                      variant="secondary"
                    >
                      <Label>Phone</Label>
                      <Input placeholder="Enter your phone number" />
                    </TextField>

                    <TextField 
                      className="w-full" 
                      value={tutorId}
                      name="tutorId" 
                      variant="secondary"
                    >
                      <Label>Tutor ID</Label>
                      <Input />
                    </TextField>

                    <TextField 
                      className="w-full" 
                      value={tutorName}
                      name="tutorName" 
                      type="text" 
                      variant="secondary"
                    >
                      <Label>Tutor Name</Label>
                      <Input />
                    </TextField>

                    <TextField 
                      className="w-full" 
                      defaultValue={user?.email}
                      name="studentEmail" 
                      type="email" 
                      variant="secondary"
                    >
                      <Label>Student Email</Label>
                      <Input placeholder="Enter your email" />
                    </TextField>

                    <Modal.Footer>
                      <Button 
                        className={"bg-transparent border border-blue-600  dark:border-blue-500 rounded-md text-blue-600 dark:text-blue-500"}
                        slot="close" 
                        variant="outline"
                      >
                        Cancel
                      </Button>

                      <Button 
                        className={"bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 rounded-md"}
                        type="submit"
                      >Confirm</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}