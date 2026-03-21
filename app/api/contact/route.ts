import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = (formData.get("phone") as string) || "";
    const message = formData.get("message") as string;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen" },
        { status: 400 }
      );
    }

    const apiKey = process.env.FORMINIT_API_KEY;
    const formId = process.env.FORMINIT_FORM_ID;

    if (!apiKey || !formId) {
      console.error("Forminit credentials not configured");
      return NextResponse.json(
        { error: "Formular-Service nicht konfiguriert" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.forminit.com/v1/forms/${formId}/submissions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Forminit error:", errorText);
      return NextResponse.json(
        { error: "Nachricht konnte nicht gesendet werden" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Interner Serverfehler" },
      { status: 500 }
    );
  }
}
