import ToS from "@/components/ui/tos";

export default function TermOfServicesPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full flex-col space-y-2.5 p-4 md:-mt-32">
        <ToS />
      </div>
    </main>
  );
}
