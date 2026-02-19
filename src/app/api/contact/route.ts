import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const data = await request.json();
  // TODO: implement email sending or storage logic
  console.log('contact form submission', data);
  return NextResponse.json({ success: true });
}
