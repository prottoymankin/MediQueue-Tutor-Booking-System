import { AddedTutorTable } from "@/components/MyTutorPage/AddedTutorTable";
import EmptyTutorList from "@/components/MyTutorPage/EmptyTutorList";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyTutorPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const user = session?.user;

  const response = await fetch(`http://localhost:5000/tutors/my-tutors/${user?.id}`);
  const addedTutors = await response.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-10 w-full">
      <header>
        <h2 className="font-bold text-primary text-3xl">Added Tutor List</h2>
        <p className="text-muted">
          Here are all the tutors you’ve created and added.
        </p>
      </header>

      {
        addedTutors.length === 0 ? (
          <EmptyTutorList />
        ) : (
          <AddedTutorTable addedTutors={addedTutors} />
        )
      }
    </section>
  );
};

export default MyTutorPage;