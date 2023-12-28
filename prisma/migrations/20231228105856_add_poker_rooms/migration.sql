-- CreateTable
CREATE TABLE "PokerPlanningRoom" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "PokerPlanningRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokerPlanningRoomUser" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "PokerPlanningRoomUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokerPlanningRound" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "roomId" TEXT NOT NULL,

    CONSTRAINT "PokerPlanningRound_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PokerPlanningVote" (
    "id" TEXT NOT NULL,
    "roundId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PokerPlanningVote_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PokerPlanningRoomUser" ADD CONSTRAINT "PokerPlanningRoomUser_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "PokerPlanningRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokerPlanningRoomUser" ADD CONSTRAINT "PokerPlanningRoomUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokerPlanningRound" ADD CONSTRAINT "PokerPlanningRound_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "PokerPlanningRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokerPlanningVote" ADD CONSTRAINT "PokerPlanningVote_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "PokerPlanningRound"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PokerPlanningVote" ADD CONSTRAINT "PokerPlanningVote_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
