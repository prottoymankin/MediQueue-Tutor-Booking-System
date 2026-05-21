"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextField, DatePicker, DateField, Calendar, Select, ListBox } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const AddTutorsPage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let newTutorData = Object.fromEntries(formData.entries());

    newTutorData = {
      ...newTutorData,
      createdBy: user?.id,
      registrationDate: new Date().toISOString()
    };

    console.log(newTutorData);
    
    const response = await fetch("http://localhost:5000/tutors", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newTutorData)
    });

    const data = await response.json();
    
    if (data.acknowledged) {
      toast.success("Tutor added successfully");
      redirect("/my-tutors");
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10 w-full">
      <header className="space-y-2 text-center">
        <h2 className="font-bold text-primary text-4xl">Add a New Tutor</h2>
        <p className="text-muted">
          Fill in the tutor details to make the profile available for students to book learning sessions.
        </p>
      </header>

      <Form 
        className="border border-gray-200 w-full max-w-2xl mx-auto p-6 rounded-2xl shadow-lg" 
        onSubmit={onSubmit}
      >
        <Fieldset>
          <FieldGroup>
            {/* Tutor name */}
            <TextField 
              className="w-full" 
              name="tutorName"
              type="text"
              variant="secondary"
            >
              <Label>Tutor Name</Label>
              <Input placeholder="John Doe" />
            </TextField>

            {/* Image */}
            <TextField 
              className="w-full" 
              name="photo"
              type="url"
              variant="secondary"
            >
              <Label>Photo Url</Label>
              <Input placeholder="https://example.com/tutor-image.jpg" />
            </TextField>

            {/* Subject */}
            <Select 
              className="w-full"
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

            {/* Available times and days */}
            <TextField 
              className="w-full" 
              name="availableDaysTimes"
              type="text"
              variant="secondary"
            >
              <Label>Available Days and Times</Label>
              <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" />
            </TextField>

            {/* Hourly fee & Total slot */}
            <div className="flex gap-4">
              <TextField
                className={"w-full"}
                isRequired
                name="hourlyFee"
                type="number"
                variant="secondary"
              >
                <Label>Hourly Fee</Label>
                <Input placeholder="1000" />
                <FieldError />
              </TextField>


              <TextField
                className={"w-full"}
                isRequired
                name="totalSlot"
                type="number"
                variant="secondary"
              >
                <Label>Total Slot</Label>
                <Input placeholder="50" />
                <FieldError />
              </TextField>
            </div>

            {/* Session Start date */}
            <DatePicker className="w-full" name="sessionStartDate">
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

            {/* Institution */}
            <TextField 
              className="w-full" 
              name="institution"
              type="text"
              variant="secondary"
            >
              <Label>Institution</Label>
              <Input placeholder="ABC College" />
            </TextField>

            {/* Experience */}
            <TextField 
              className="w-full" 
              name="experience"
              type="text"
              variant="secondary"
            >
              <Label>Experience</Label>
              <Input placeholder="5 years" />
            </TextField>

            {/* Location */}
            <TextField 
              className="w-full" 
              name="location"
              type="text"
              variant="secondary"
            >
              <Label>Location(Area/City)</Label>
              <Input placeholder="Dhaka" />
            </TextField>

            {/* Teaching Mode */}
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
          </FieldGroup>

          <Fieldset.Actions className="justify-end">
            <Button 
              type="reset" 
              variant="secondary"
            >
              Reset
            </Button>

            <Button type="submit">Add Tutor</Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </section>
  );
};

export default AddTutorsPage;