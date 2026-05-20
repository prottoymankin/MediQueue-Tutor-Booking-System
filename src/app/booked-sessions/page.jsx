import BookedSessionsTable from "@/components/BookedSessionPage/BookedSessionsTable";
import EmptyBookedSession from "@/components/BookedSessionPage/EmptyBookedSession";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function BookedSessionsPage () {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  const response = await fetch(`http://localhost:5000/booked-session/${user?.id}`);
  const bookedSessions = await response.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 w-full">
      {
        bookedSessions.length === 0 ? (
          <EmptyBookedSession />
        ) : (
          <BookedSessionsTable bookedSessions={bookedSessions} />
        )
      }
    </section>
  );
}