import type { Team } from '@/features/teams/types';

type TeamCardProps = {
  team: Team;
};

export default async function TeamCard(params: TeamCardProps) {
  const data = params.team;

  if (!data) {
    return <div>Team not found</div>;
  }

  return (
    <div className="p-8">
      <div key={data.id} className="rounded-lg border p-4">
        <h2 className="">{data.name}</h2>
        <p>{data.description}</p>
        <span>{data.membersCount} members</span>
      </div>
    </div>
  );
}
