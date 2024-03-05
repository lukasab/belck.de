"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function PokerClient() {
  const [pokerRoom, setPokerRoom] = useState("");
  const router = useRouter();

  const createRoom = async () => {
    const res = await fetch("/api/poker", {
      method: "POST",
      body: JSON.stringify({
        name: "name test",
        description: "description test",
      }),
    });
    const roomId: string = await res.text();
    router.push(`/poker/${roomId}`);
  };

  const joinRoom = async (roomId: string) => {
    const res = await fetch(`/api/poker/${roomId}`);
    if (!res.ok) {
      toast.error("Room not found");
      return;
    }
    router.push(`/poker/${roomId}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Poker Planning</CardTitle>
        <CardDescription>
          Create or join a room to start planning.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Poker room id:</Label>
            <Input
              id="room-id"
              type="text"
              placeholder="kOA$V8"
              value={pokerRoom}
              onChange={(e) => setPokerRoom(e.target.value)}
            />
          </div>
          <Button onClick={() => joinRoom(pokerRoom)}>Join</Button>
          <div className="flex items-center gap-2 justify-between">
            <Separator className="w-[130px]" />
            <p className="text-xs font-light">OR</p>
            <Separator className="w-[130px]" />
          </div>
          <Button onClick={() => createRoom()} variant={"secondary"}>
            Create room
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-xs font-light">Happy planning!</p>
      </CardFooter>
    </Card>
  );
}
