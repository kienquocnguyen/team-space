import { teams } from '@/features/teams/data';

type TeamsDetailPageProps = {
  params: Promise<{
    teamId: string;
  }>;
};

export default async function TeamsDetailPage({
  params,
}: TeamsDetailPageProps) {
  const { teamId } = await params;

  const team = teams.find((team) => team.id === teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <main className="p-8">
      <h1 className="mb-2 text-2xl font-semibold">{team.name}</h1>
      <p>{team.description}</p>
      <span>{team.membersCount} members</span>
    </main>
  );
}
