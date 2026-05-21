import {Button, Chip, Table} from "@heroui/react";
import { SessionCancelModal } from "./SessionCancelModal";

const BookedSessionsTable = ({ bookedSessions }) => {
  return (
    <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Booked Sessions" className="w-full">
          <Table.Header>
            <Table.Column isRowHeader>Tutor Name</Table.Column>
            <Table.Column>Student Name</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Status</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>

          <Table.Body>
            {
              bookedSessions.map(session => (
                <Table.Row
                  key={session?._id}
                >
                  <Table.Cell>{session?.tutorName}</Table.Cell>
                  <Table.Cell>{session?.name}</Table.Cell>
                  <Table.Cell>{session?.studentEmail}</Table.Cell>
                  <Table.Cell>
                    <Chip color={session?.status === "Confirm" ? "success" : "danger"}>{session?.status}</Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <SessionCancelModal 
                      session={session}
                    />
                  </Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
  );
};

export default BookedSessionsTable;