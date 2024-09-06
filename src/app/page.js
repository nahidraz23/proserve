import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <main className="flex justify-between container py-4">
        <span className="font-bold text-2xl">ProServe</span>
        <Button>Login</Button>
      </main>

      <footer className="bg-slate-900 text-white">
        <div className="container  py-20">footer</div>
      </footer>
    </div>
  );
}
