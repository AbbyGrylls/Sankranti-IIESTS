import Image from "next/image";
import { Member } from "@/public/teams/data/data";

type MemberCardProps = {
  member: Member;
};

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div
      className="flex flex-row items-center gap-5 p-2
                  md:flex-col md:items-center md:p-0"
    >
      <Image
        src={member.imageUrl}
        alt={member.name}
        width={150}
        height={150}
        className="
          w-20 h-20 rounded-full object-cover flex-shrink-0
          md:w-36 md:h-36 
        "
      />

      <div className="flex flex-col text-left md:text-center md:mt-4">
        <h3 className="text-lg font-bold text-white">{member.name}</h3>
        <p className="text-sm text-red-500 uppercase font-medium">
          {member.role}
        </p>
      </div>
    </div>
  );
}
