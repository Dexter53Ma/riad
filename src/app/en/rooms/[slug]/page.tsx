import { notFound } from "next/navigation";
import { rooms, getRoomBySlug } from "@/data/rooms";
import RoomDetail from "./RoomDetail";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return <RoomDetail room={room} />;
}
