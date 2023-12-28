import LogoutButton from "@/components/ui/logoutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p>Belck.de</p>
        {session ? <LogoutButton /> : <h1>Not loged</h1>}
      </div>
    </main>
  );
}
