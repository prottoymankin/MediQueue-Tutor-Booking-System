"use client";

import {Button, Input, Label, Modal, Surface, TextField, Select, ListBox, DateField } from "@heroui/react";
import { FaEdit } from "react-icons/fa";
import { parseDate } from "@internationalized/date"
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export function EditAddedTutor({ tutor }) {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let updatedData = Object.fromEntries(formData.entries());

    updatedData = {
      ...updatedData,
      totalSlot: Number(updatedData.totalSlot),
      hourlyFee: Number(updatedData.hourlyFee),
    }

    const { data:tokenData } = await authClient.token();

    const response = await fetch(`http://localhost:5000/tutors/${tutor?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(updatedData)
    });

    const data = await response.json();

    if (data.acknowledged) {
      toast.success("Save changes successfully");
      redirect("/my-tutors");
    }
  }

  return (
    <Modal>
      <Button
        className={"text-blue-500"} 
        variant="ghost"
      >
        <FaEdit />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaEdit />
              </Modal.Icon>
              <Modal.Heading>Edit Tutor Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                  <div className="flex gap-4 w-full">
                    <TextField 
                      className={"w-full"}
                      name="tutorName" 
                      type="text" 
                      variant="secondary"
                      defaultValue={tutor?.tutorName}
                    >
                      <Label>Tutor Name</Label>
                      <Input />
                    </TextField>

                    <TextField 
                      className={"w-full"}
                      defaultValue={tutor?.photo}
                      name="photo" 
                      type="url" 
                      variant="secondary"
                    >
                      <Label>Photo Url</Label>
                      <Input />
                    </TextField>
                  </div>

                  <div className="flex gap-4 w-full">
                    <Select
                      className={"w-full"}
                      name="subject" 
                      placeholder="Select one"
                      variant="secondary"
                      defaultSelectedKey={[tutor?.subject]}
                    >
                      <Label>Subject</Label>
                      <Select.Trigger>
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="mathematics" textValue="Mathematics">
                            Mathematics
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="english" textValue="English">
                            English
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="physics" textValue="Physics">
                            Physics
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="biology" textValue="Biology">
                            Biology
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="chemistry" textValue="Chemistry">
                            Chemistry
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                          <ListBox.Item id="programming" textValue="Programming">
                            Programming
                            <ListBox.ItemIndicator />
                          </ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                    
                    <TextField 
                      className={"w-full"}
                      defaultValue={tutor?.availableDaysTimes}
                      name="availableDaysTimes" 
                      type="text" 
                      variant="secondary"
                    >
                      <Label>Available Days and Time</Label>
                      <Input />
                    </TextField>
                  </div>

                  <div className="flex gap-4 w-full">
                    <TextField
                      className={"w-full"}
                      defaultValue={tutor?.hourlyFee}
                      name="hourlyFee"
                      type="number"
                      variant="secondary"
                    >
                      <Label>Hourly Fee</Label>
                      <Input />
                    </TextField>

                    <TextField
                      className={"w-full"}
                      defaultValue={tutor?.totalSlot}
                      name="totalSlot"
                      type="number"
                      variant="secondary"
                    >
                      <Label>Total Slot</Label>
                      <Input />
                    </TextField>
                  </div>

                  <div className="flex gap-4 w-full">
                    <DateField 
                      className="w-full" 
                      name="sessionStartDate"
                      defaultValue={parseDate(tutor?.sessionStartDate)}
                    >
                      <Label>Session Start Date</Label>
                      <DateField.Group variant="secondary">
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                      </DateField.Group>
                    </DateField>

                    <TextField 
                      className="w-full"
                      defaultValue={tutor?.institution} 
                      name="institution"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Institution</Label>
                      <Input />
                    </TextField>
                  </div>

                  <div className="flex gap-4 w-full">
                    <TextField 
                      className="w-full"
                      defaultValue={tutor?.experience} 
                      name="experience"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Experience</Label>
                      <Input />
                    </TextField>

                    <TextField 
                      className="w-full" 
                      defaultValue={tutor?.location}
                      name="location"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Location(Area/City)</Label>
                      <Input />
                    </TextField>
                  </div>

                  <Select 
                    className="w-full" 
                    placeholder="Select one"
                    name="teachingMode"
                    variant="secondary"
                    defaultSelectedKey={[tutor?.teachingMode]}
                  >
                    <Label>Teaching Mode</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="online" textValue="Online">
                          Online
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="offline" textValue="Offline">
                          Offline
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="both" textValue="Both">
                          Both
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">Save Changes</Button>
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