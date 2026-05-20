"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaCalendarCheck } from "react-icons/fa";

export function BookSessionModal({ tutorId, tutorName }) {
  const { data } = authClient.useSession();
  const user = data?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let bookedSessionData = Object.fromEntries(formData.entries());

    bookedSessionData = {
      ...bookedSessionData, 
      status: "Confirm",
      studentId: user?.id
    };

    const response = await fetch("http://localhost:5000/booked-session", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(bookedSessionData)
    });

    const data = await response.json();

    if (data.acknowledged) {
      toast.success("Session booked successful");
      redirect("/booked-sessions");
    }
  }

  return (
    <Modal>
      <Button className={"bg-primary hover:bg-blue-500"}>Book Session</Button>

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
                      className={"border-primary hover:border-blue-500 text-primary hover:text-blue-500"}
                      slot="close" 
                      variant="outline"
                    >
                      Cancel
                    </Button>

                    <Button 
                      type="submit"
                      className={"bg-primary hover:bg-blue-500"}
                    >Confirm Book Session</Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}