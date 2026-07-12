import type { SseEvent } from '../model';

export const parseSseBlock = (block: string): SseEvent | null => {
  const lines = block.split('\n');
  let eventType = 'message';
  let dataLine = '';

  for (const line of lines) {
    if (line.startsWith('event:')) {
      eventType = line.slice('event:'.length).trim();
    } else if (line.startsWith('data:')) {
      dataLine = line.slice('data:'.length).trim();
    }
  }

  if (!dataLine) return null;

  try {
    return { event: eventType, data: JSON.parse(dataLine) };
  } catch {
    return { event: eventType, data: dataLine };
  }
};
