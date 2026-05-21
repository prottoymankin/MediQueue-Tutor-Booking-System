import {Table} from "@heroui/react";
import { EditAddedTutor } from "./EditAddedTutor";
import { DeleteAddedTutor } from "./DeleteAddedTutor";

export function AddedTutorTable({ addedTutors }) {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="w-full">
          <Table.Header>
            <Table.Column isRowHeader>Registration Date</Table.Column>
            <Table.Column >Tutor Name</Table.Column>
            <Table.Column>Subject</Table.Column>
            <Table.Column>Available Days & Time</Table.Column>
            <Table.Column>Hourly Fee</Table.Column>
            <Table.Column>Total Slots</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
            {
              addedTutors.map(tutor => (
                <Table.Row key={tutor?._id}>
                  <Table.Cell>
                    {
                      new Date(tutor?.registrationDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })
                    }
                  </Table.Cell>

                  <Table.Cell>{tutor?.tutorName}</Table.Cell>
                  <Table.Cell>{tutor?.subject}</Table.Cell>
                  <Table.Cell>{tutor?.availableDaysTimes}</Table.Cell>
                  <Table.Cell>{tutor?.hourlyFee}</Table.Cell>
                  <Table.Cell>{tutor?.totalSlot}</Table.Cell>

                  <Table.Cell className={"space-x-2"}>
                    <EditAddedTutor tutor={tutor} />
                    <DeleteAddedTutor />
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}