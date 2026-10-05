import { teams } from '@/features/teams/data';
import TeamCard from './components/team-card';

export default function TeamsPage() {
  return (
    <main className="p-8">
      <h1 className="mb-6 text-2xl font-semibold">Teams</h1>
      {teams.map((team) => (
        <>
          <TeamCard team={team} />
        </>
      ))}
    </main>
  );
}
