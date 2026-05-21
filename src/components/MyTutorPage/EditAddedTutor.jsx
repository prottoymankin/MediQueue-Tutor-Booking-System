"use client";

import {Button, Input, Label, Modal, Surface, TextField, Select, ListBox, DatePicker, DateField, Calendar} from "@heroui/react";
import { FaEdit } from "react-icons/fa";

export function EditAddedTutor() {
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
                <form className="flex flex-col gap-4">
                  <div className="flex gap-4 w-full">
                    <TextField 
                      className={"w-full"}
                      name="tutorName" 
                      type="text" 
                      variant="secondary"
                    >
                      <Label>Tutor Name</Label>
                      <Input />
                    </TextField>

                    <TextField 
                      className={"w-full"}
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
                      name="hourlyFee"
                      type="number"
                      variant="secondary"
                    >
                      <Label>Hourly Fee</Label>
                      <Input />
                    </TextField>


                    <TextField
                      className={"w-full"}
                      name="totalSlot"
                      type="number"
                      variant="secondary"
                    >
                      <Label>Total Slot</Label>
                      <Input />
                    </TextField>
                  </div>

                  <div className="flex gap-4 w-full">
                    <DatePicker 
                      className="w-full" 
                      name="sessionStartDate"
                    >
                      <Label>Session Start Date</Label>
                      <DateField.Group fullWidth variant="secondary">
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        <DateField.Suffix>
                          <DatePicker.Trigger>
                            <DatePicker.TriggerIndicator />
                          </DatePicker.Trigger>
                        </DateField.Suffix>
                      </DateField.Group>
                      <DatePicker.Popover>
                        <Calendar aria-label="Event date">
                          <Calendar.Header>
                            <Calendar.YearPickerTrigger>
                              <Calendar.YearPickerTriggerHeading />
                              <Calendar.YearPickerTriggerIndicator />
                            </Calendar.YearPickerTrigger>
                            <Calendar.NavButton slot="previous" />
                            <Calendar.NavButton slot="next" />
                          </Calendar.Header>
                          <Calendar.Grid>
                            <Calendar.GridHeader>
                              {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                            </Calendar.GridHeader>
                            <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                          </Calendar.Grid>
                          <Calendar.YearPickerGrid>
                            <Calendar.YearPickerGridBody>
                              {({year}) => <Calendar.YearPickerCell year={year} />}
                            </Calendar.YearPickerGridBody>
                          </Calendar.YearPickerGrid>
                        </Calendar>
                      </DatePicker.Popover>
                    </DatePicker>

                    <TextField 
                      className="w-full" 
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
                      name="experience"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Experience</Label>
                      <Input />
                    </TextField>

                    <TextField 
                      className="w-full" 
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
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Save Changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}