import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.action";
import { Event } from "@/types";
import { auth } from "@clerk/nextjs";
import { Types } from "mongoose";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

const UpdateEvent = async ({ params: { id } }: UpdateEventProps) => {
  const event: Event = await getEventById(id);

  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as Types.ObjectId;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Update Events
        </h3>
      </section>

      <div className="wrapper my-9">
        <EventForm
          userId={userId}
          event={event}
          eventId={event._id}
          type="Update"
        />
      </div>
    </>
  );
};

export default UpdateEvent;
