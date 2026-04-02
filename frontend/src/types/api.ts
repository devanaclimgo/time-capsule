export interface ApiLetter {
  id: string;
  sender: string;
  recipient: string;
  written_at: string;
  deliver_at: string;
  readable_at: string;
  delivered: boolean;
  content: string | null;
}