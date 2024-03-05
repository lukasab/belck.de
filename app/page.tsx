import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import LogoutButton from "@/components/auth/logout-button";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 to-neutral-900">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Belck.de
        </h1>
        <p className="text-xl text-white drop-shadow-md">
          Welcome to my personal website
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Login
            </Button>
          </LoginButton>
        </div>
        {/* {session ? <LogoutButton /> : <h1>Not loged</h1>} */}
      </div>
    </main>
  );
}
