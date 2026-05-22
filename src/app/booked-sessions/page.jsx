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
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-5 w-full">
      <header>
        <h2 className="font-bold text-primary text-3xl">
          Booked Sessions
        </h2>

        <p className="text-slate-600 dark:text-slate-400">
          Here are the sessions you have booked.
        </p>
      </header>

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