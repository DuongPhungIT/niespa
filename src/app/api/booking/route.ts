import { NextResponse } from 'next/server';

type BookingPayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string;
  branch?: string;
  appointmentDate?: string;
  appointmentTime?: string;
  note?: string;
  source?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as BookingPayload;

    if (!body.fullName?.trim() || !body.phone?.trim() || !body.service?.trim()) {
      return NextResponse.json(
        { message: 'Vui lòng nhập họ tên, số điện thoại và dịch vụ quan tâm.' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        {
          message:
            'Chưa cấu hình Google Sheets. Vui lòng thêm GOOGLE_SHEETS_WEBHOOK_URL vào file .env.local.',
        },
        { status: 500 }
      );
    }

    const payload = Object.fromEntries(
      Object.entries({
        fullName: body.fullName.trim(),
        phone: body.phone.trim(),
        service: body.service.trim(),
        email: body.email?.trim(),
        branch: body.branch?.trim(),
        appointmentDate: body.appointmentDate?.trim(),
        appointmentTime: body.appointmentTime?.trim(),
        note: body.note?.trim(),
        source: body.source?.trim() || 'website',
        timestamp: new Date().toISOString(),
      }).filter(([, value]) => typeof value === 'string' && value.length > 0)
    );

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
      redirect: 'follow',
    });

    if (!response.ok) {
      const responseText = await response.text();

      return NextResponse.json(
        {
          message: 'Không thể gửi dữ liệu sang Google Sheets. Vui lòng kiểm tra webhook.',
          upstreamStatus: response.status,
          upstreamBody: responseText.slice(0, 600),
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: 'Không thể xử lý yêu cầu đặt lịch. Vui lòng thử lại sau.' },
      { status: 500 }
    );
  }
}
