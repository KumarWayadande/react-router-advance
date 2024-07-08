import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Some event" },
  { id: "e2", title: "Another event" },
  { id: "e3", title: "Some another event" },
  { id: "e4", title: "another some Some event" },
];

export default function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ol>
        {DUMMY_EVENTS.map((event) => {
          return (
            <li key={event.id}>
              <Link to={`${event.id}`}>{event.title}</Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
