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

  function formatDate(date?: string | null) {
    if (!date) return "—";

    const parsed = new Date(date);

    if (isNaN(parsed.getTime())) return "—";

    return parsed.toLocaleDateString("pt-BR");
  }

  return {
    id: api.id,
    writtenDate: formatDate(api.written_at),
    deliveryDate: formatDate(api.deliver_at),
    status,
    preview: api.content || "••••••••••••",
  };
}
