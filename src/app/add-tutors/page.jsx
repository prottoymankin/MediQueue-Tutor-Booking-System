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
      totalSlot: Number(newTutorData.totalSlot),
      hourlyFee: Number(newTutorData.hourlyFee),
      createdBy: user?.id,
      registrationDate: new Date().toISOString()
    };

    const { data: tokenData } = await authClient.token();
    console.log(tokenData)

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
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
      <header>
        <h2 className="font-bold text-primary text-3xl">Add a New Tutor</h2>
        <p className="text-muted">
          Fill in the tutor details to make the profile available for students to book learning sessions.
        </p>
      </header>

      <Form 
        className="border border-slate-200 dark:border-slate-800 w-full max-w-2xl mx-auto p-6 rounded-2xl" 
        onSubmit={onSubmit}
      >
        <Fieldset>
          <FieldGroup>
            <TextField  
              name="tutorName"
              isRequired
              type="text"
              variant="secondary"
            >
              <Label>Tutor Name</Label>
              <Input placeholder="John Doe" />
            </TextField>

            <TextField 
              className="w-full" 
              name="photo"
              isRequired
              type="url"
              variant="secondary"
            >
              <Label>Photo Url</Label>
              <Input placeholder="https://example.com/tutor-image.jpg" />
            </TextField>

            <Select 
              className="w-full"
              name="subject"
              placeholder="Select one"
              isRequired
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
              className="w-full" 
              name="availableDaysTimes"
              isRequired
              type="text"
              variant="secondary"
            >
              <Label>Available Days and Times</Label>
              <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" />
            </TextField>

            <div className="flex flex-col md:flex-row gap-4">
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

            <DatePicker isRequired className="w-full" name="sessionStartDate">
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
              isRequired
              type="text"
              variant="secondary"
            >
              <Label>Institution</Label>
              <Input placeholder="ABC College" />
            </TextField>

            <TextField 
              className="w-full" 
              name="experience"
              isRequired
              type="text"
              variant="secondary"
            >
              <Label>Experience</Label>
              <Input placeholder="5 years" />
            </TextField>

            <TextField 
              className="w-full" 
              name="location"
              isRequired
              type="text"
              variant="secondary"
            >
              <Label>Location(Area/City)</Label>
              <Input placeholder="Dhaka" />
            </TextField>

            <Select 
              className="w-full" 
              placeholder="Select one"
              name="teachingMode"
              isRequired
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
              className="
              bg-transparent border 
              border-blue-600  dark:border-blue-500 
              rounded-md 
              text-blue-600 dark:text-blue-500"
              type="reset" 
              variant="secondary"
            >
              Reset
            </Button>

            <Button 
              className={"bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-md"}
              type="submit"
            >
              Add Tutor
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </section>
  );
};

export default AddTutorsPage;