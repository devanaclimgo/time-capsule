export type LetterStatus = "locked" | "scheduled" | "sent";

export interface Letter {
  id: string;
  writtenDate: string;
  deliveryDate: string;
  status: LetterStatus;
  preview: string;
}