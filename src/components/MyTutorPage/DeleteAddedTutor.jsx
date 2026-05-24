"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";

export function DeleteAddedTutor({ tutor }) {
  const handleDeleteAddedTutor = async () => {
    const { data: tokenData } = await authClient.token();
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor?._id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${tokenData?.token}`
      }
    });

    const data = await response.json();
    
    if (data.acknowledged) {
      toast.success("Tutor deleted successfully");
      redirect("/my-tutors");
    }
  }

  return (
    <AlertDialog>
      <Button
        className={"text-red-500"} 
        variant="ghost"
      >
        <FaRegTrashAlt />
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete tutor permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong></strong> and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              <Button 
                onClick={handleDeleteAddedTutor}
                slot="close" 
                variant="danger"
              >
                Delete tutor
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}