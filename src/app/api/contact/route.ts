import { NextResponse } from "next/server";

interface ContactPayload {
  category: "request-loan" | "request-funding" | "";
  firstName: string;
  surname: string;
  email: string;
  companyName: string;
  companyWebsite?: string;
  telephone: string;
  description: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();

    const {
      category,
      firstName,
      surname,
      email,
      companyName,
      companyWebsite,
      telephone,
      description,
    } = body;

    //  Server-side required validation (No reliance on only client validation)
    if (
      !category ||
      !firstName?.trim() ||
      !surname?.trim() ||
      !email?.trim() ||
      !companyName?.trim() ||
      !telephone?.trim() ||
      !description?.trim()
    ) {
      return NextResponse.json(
        { error: "All required fields must be completed." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    

    // Example log (Todo : replace with Nodemailer or email service)
    console.log("Contact form submission:", {
      category,
      firstName,
      surname,
      email,
      companyName,
      companyWebsite,
      telephone,
      description,
      submittedAt: new Date().toISOString(),
    });


    return NextResponse.json(
      { success: true, message: "Your enquiry has been received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}