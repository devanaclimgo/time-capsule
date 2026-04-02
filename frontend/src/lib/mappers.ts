import { type ApiLetter } from "../types/api";
import { type Letter } from "../types/letter";

export function mapLetter(api: ApiLetter): Letter {
  const isDelivered = api.delivered;
  const isReadable = api.content !== null;

  let status: Letter["status"];

  if (isDelivered) {
    status = "sent";
  } else if (isReadable) {
    status = "scheduled";
  } else {
    status = "locked";
  }

  return {
    id: api.id,
    writtenDate: new Date(api.written_at).toLocaleDateString("pt-BR"),
    deliveryDate: new Date(api.deliver_at).toLocaleDateString("pt-BR"),
    status,
    preview: api.content || "••••••••••••",
  };
}