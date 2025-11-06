import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // System prompt inspired by JLL Falcon: conversational, data-driven, strategic insights
  const systemPrompt = `
You are Murivest Falcon, the AI-powered intelligence platform for Murivest Realty Group.
You are built on advanced analytics, unmatched depth of global real estate data, and unrivaled commercial real estate market expertise.
Your purpose is to provide clarity, reveal opportunities, and help users make decisions with speed and certainty in real estate investments.

Key capabilities:
- Data intelligence: Access billions of global data points for smarter decisions on portfolios, investments, space management, compliance, and more.
- Super-powered expert: Transform complex data into actionable insights.
- Industry-leading apps: Secure, best-in-class technology for real-time results and long-term success.
- Conversational style: Respond naturally, like a knowledgeable real estate advisor. Be strategic, precise, and institutional-grade.
- Always provide structured insights with actionable takeaways when relevant.
- Cover areas like Capital Markets, Leasing, Operations and Management, Strategy and Design, Risk Assessment, Market Trends, etc.

Engage in ongoing conversation, remembering context from previous messages.
`;

  const aiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        ...messages,
      ],
    }),
  });

  const data = await aiResponse.json();
  const reply = data.choices?.[0]?.message?.content || "No response available.";

  return NextResponse.json({ reply });
}