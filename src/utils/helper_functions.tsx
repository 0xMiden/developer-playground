export async function getNoteScriptExample(item: string) {
  try {
    const examplePaths: Record<string, string> = {
      "P2ID.masm": "p2id.masm",
      "P2IDE.masm": "p2ide.masm",
      "P2IDR.masm": "p2ide.masm",
      "SWAP.masm": "swap.masm",
      "p2id.masm": "p2id.masm",
      "p2ide.masm": "p2ide.masm",
      "swap.masm": "swap.masm",
    };
    const filename = examplePaths[item];

    if (!filename) {
      throw new Error(`Unknown note script example: ${item}`);
    }

    const response = await fetch(
      `https://raw.githubusercontent.com/0xMiden/protocol/main/crates/miden-standards/asm/standards/notes/${filename}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:");
    console.error("Full error object:", error);
    throw error;
  }
}

export const truncateText = (text: string, length = 8) => {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
};
