import {Table} from "@heroui/react";
import { EditAddedTutor } from "./EditAddedTutor";
import { DeleteAddedTutor } from "./DeleteAddedTutor";

export function AddedTutorTable() {
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
            <Table.Row>
              <Table.Cell>Kate Moore</Table.Cell>
              <Table.Cell>Kate Moore</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
              <Table.Cell>400</Table.Cell>
              <Table.Cell>20</Table.Cell>

              <Table.Cell className={"space-x-2"}>
                <EditAddedTutor />
                <DeleteAddedTutor />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
}