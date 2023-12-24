import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";
import { Types } from "mongoose";

const CreateEvent = () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as Types.ObjectId;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Events</h3>
      </section>

      <div className="wrapper my-9">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
};

export default CreateEvent;
