"use client";

import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

export function SessionCancelModal({ session }) {
  const handleCancelSession = async () => {
    const response = await fetch(`http://localhost:5000/booked-session/${session?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({status: "Cancelled"})
    });

    const data = await response.json();

    if (data.acknowledged) {
      toast.success("Session cancelled successfully");
      await fetch(`http://localhost:5000/tutors/change-slot/${session?.tutorId}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({value: 1})
      });
      redirect("/booked-sessions");
    }
  }

  return (
    <AlertDialog>
      <Button 
        className={"border-red-500 text-red-500"}
        variant="outline"
        isDisabled={session?.status === "Confirm" ? false : true}
      >
        Cancel Session
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel session permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                Are you sure you want to cancel this <strong>session</strong> ? This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancelSession} 
                variant="danger"
                slot="close"
              >
                Cancel Session
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}