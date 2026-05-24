import { AddedTutorTable } from "@/components/MyTutorPage/AddedTutorTable";
import EmptyTutorList from "@/components/MyTutorPage/EmptyTutorList";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyTutorPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  const user = session?.user;

  const { token } = await auth.api.getToken({
    headers: await headers()
  })

  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/my-tutors/${user?.id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });
  const addedTutors = await response.json();

  return (
    <section className="max-w-7xl mx-auto px-4 py-15 space-y-6 w-full">
      <header>
        <h2 className="font-bold text-slate-900 dark:text-slate-50 text-3xl">
          Added Tutor List
        </h2>

        <p className="text-slate-600 dark:text-slate-400">
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