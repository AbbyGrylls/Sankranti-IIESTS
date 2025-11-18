import { Member } from "@/public/teams/data/data";
import MemberCard from "./MemberCard";

type TeamGridProps = {
  members: Member[];
};

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="flex flex-col gap-6 md:grid md:grid-cols-5 md:gap-8">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
