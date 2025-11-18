import { TeamLayout } from "@/components/teams/TeamLayout";
import { members, categories } from "@/public/teams/data/data";

export default function TeamPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white p-4 py-24">
      <div
        className="w-full max-w-7xl mx-auto px-4 md:px-12 py-16
                      bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10"
      >
        <h1 className="text-4xl md:text-5xl text-center mb-12">
          Meet our <span className="font-bold">team.</span>
        </h1>

        <TeamLayout members={members} categories={categories} />
      </div>
    </div>
  );
}
