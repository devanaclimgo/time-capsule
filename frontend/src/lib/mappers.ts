import { type ApiLetter } from "../types/api";
import { type Letter } from "../types/letter";

export function mapLetter(api: ApiLetter): Letter {
  const now = new Date();
  const deliverDate = new Date(api.deliver_at);

  let status: Letter["status"];

  if (api.delivered) {
    status = "sent";
  } else if (deliverDate > now) {
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
