'use client';

import { useMemo, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

const SERVICE_OPTIONS = [
  { value: '', label: 'Chọn dịch vụ quan tâm' },
  { value: 'massage-bau', label: 'Massage bầu' },
  { value: 'sau-sinh', label: 'Chăm sóc sau sinh' },
  { value: 'thong-tac-tia-sua', label: 'Thông tắc tia sữa' },
  { value: 'tam-be', label: 'Tắm bé / chăm bé' },
  { value: 'tai-nha', label: 'Chăm sóc tại nhà' },
  { value: 'khac', label: 'Dịch vụ khác' },
] as const;

const APPOINTMENT_TIME_OPTIONS = [
  { value: '', label: 'Chọn khung giờ mong muốn' },
  { value: '09:30 - 11:30', label: '09:30 - 11:30' },
  { value: '11:30 - 13:30', label: '11:30 - 13:30' },
  { value: '13:30 - 15:30', label: '13:30 - 15:30' },
  { value: '15:30 - 17:30', label: '15:30 - 17:30' },
  { value: '17:30 - 19:30', label: '17:30 - 19:30' },
] as const;

type BookingFormState = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  address: string;
  appointmentDate: string;
  appointmentTime: string;
  note: string;
};

const initialForm: BookingFormState = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  address: '',
  appointmentDate: '',
  appointmentTime: '',
  note: '',
};

type BookingFormProps = {
  source?: string;
  onSuccess?: () => void;
  submitLabel?: string;
  className?: string;
};

export function BookingForm({
  source = 'website',
  onSuccess,
  submitLabel = 'Gửi yêu cầu đặt lịch',
  className,
}: BookingFormProps) {
  const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
  const appointmentDateRef = useRef<HTMLInputElement | null>(null);
  const [form, setForm] = useState<BookingFormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  const handleChange =
    (field: keyof BookingFormState) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const isValid =
    form.fullName.trim().length > 1 &&
    form.phone.trim().length >= 9 &&
    form.service.trim().length > 0;

  const fieldClassName =
    'h-12 w-full rounded-[18px] border border-[#d7e8f4] bg-[#fcfeff] px-4 text-[0.98rem] text-[#234e70] outline-none transition placeholder:text-[#a0afbf] focus:border-[#8fd3eb] focus:bg-white focus:ring-4 focus:ring-[#e6f6fd]';
  const selectClassName = `${fieldClassName} appearance-none pr-12`;
  const labelClassName = 'flex min-h-[24px] items-end text-[0.96rem] font-medium text-[#3d5f7d]';

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid || submitting) {
      return;
    }

    setSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      if (!webhookUrl) {
        throw new Error(
          'Chưa cấu hình Google Sheets webhook. Vui lòng thêm NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL vào .env.local.'
        );
      }

      const payload = Object.fromEntries(
        Object.entries({
          fullName: form.fullName.trim(),
          phone: form.phone.trim(),
          service: form.service.trim(),
          email: form.email.trim(),
          address: form.address.trim(),
          branch: form.address.trim(),
          appointmentDate: form.appointmentDate.trim(),
          appointmentTime: form.appointmentTime.trim(),
          note: form.note.trim(),
          source,
        }).filter(([, value]) => typeof value === 'string' && value.length > 0)
      );

      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        mode: 'no-cors',
      });

      setForm(initialForm);
      setSuccessMessage('Đã gửi yêu cầu đặt lịch. NieSpa sẽ liên hệ với bạn sớm nhất.');
      onSuccess?.();
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : 'Đã có lỗi xảy ra, vui lòng thử lại sau.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-5', className)}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2.5">
          <label className={labelClassName}>
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.fullName}
            onChange={handleChange('fullName')}
            placeholder="Nguyễn Thị A"
            className={fieldClassName}
            required
          />
        </div>
        <div className="space-y-2.5">
          <label className={labelClassName}>
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={handleChange('phone')}
            placeholder="0901 460 922"
            className={fieldClassName}
            required
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2.5">
          <label className={labelClassName}>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={handleChange('email')}
            placeholder="email@example.com"
            className={fieldClassName}
          />
        </div>
        <div className="space-y-2.5">
          <label className={labelClassName}>
            Dịch vụ quan tâm <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select
              value={form.service}
              onChange={handleChange('service')}
              className={selectClassName}
              required
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[0.75rem] text-[#7aaeca]">
              &#9662;
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        <div>
          <label className={labelClassName}>
            Địa chỉ khách hàng
          </label>
          <input
            type="text"
            value={form.address}
            onChange={handleChange('address')}
            placeholder="Ví dụ: 123 Nguyễn Thị Minh Khai, Quận 1, TP. Hồ Chí Minh"
            className={fieldClassName}
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2.5">
          <label className={labelClassName}>Đặt ngày</label>
          <div className="flex h-12 items-center gap-3 rounded-[18px] border border-[#d7e8f4] bg-[#fcfeff] px-4 transition focus-within:border-[#8fd3eb] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#e6f6fd]">
            <input
              ref={appointmentDateRef}
              type="date"
              min={minDate}
              value={form.appointmentDate}
              onChange={handleChange('appointmentDate')}
              className="w-full bg-transparent text-[0.98rem] text-[#234e70] outline-none [color-scheme:light]"
            />
            <button
              type="button"
              onClick={() => {
                if (appointmentDateRef.current?.showPicker) {
                  appointmentDateRef.current.showPicker();
                  return;
                }

                appointmentDateRef.current?.focus();
              }}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#eef9ff] text-[#78c6e3] transition hover:bg-[#e3f5ff]"
              aria-label="Mở lịch"
            >
              &#128197;
            </button>
          </div>
        </div>
        <div className="space-y-2.5">
          <label className={labelClassName}>Giờ</label>
          <div className="relative">
            <select
              value={form.appointmentTime}
              onChange={handleChange('appointmentTime')}
              className={selectClassName}
            >
              {APPOINTMENT_TIME_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[0.75rem] text-[#7aaeca]">
              &#9662;
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        <label className={labelClassName}>Ghi chú thêm</label>
        <textarea
          rows={4}
          value={form.note}
          onChange={handleChange('note')}
          placeholder="Ví dụ: mẹ đang mang thai tháng thứ 7, muốn tư vấn massage bầu..."
          className="min-h-[124px] w-full resize-y rounded-[20px] border border-[#d7e8f4] bg-[#fcfeff] px-4 py-3 text-[0.98rem] text-[#234e70] outline-none transition placeholder:text-[#a0afbf] focus:border-[#8fd3eb] focus:bg-white focus:ring-4 focus:ring-[#e6f6fd]"
        />
      </div>

      {errorMessage ? (
        <p className="rounded-2xl border border-[#ffd8d8] bg-[#fff5f5] px-4 py-3 text-sm text-[#c43f5b]">
          {errorMessage}
        </p>
      ) : null}

      {successMessage ? (
        <p className="rounded-2xl border border-[#d3f0e4] bg-[#f3fcf8] px-4 py-3 text-sm text-[#2f7d63]">
          {successMessage}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 border-t border-[#e7f1f8] pt-5 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={!isValid || submitting}
          className={cn(
            'rounded-full px-7 py-3.5 text-sm font-semibold text-white transition md:min-w-[190px]',
            isValid && !submitting
              ? 'bg-[#78c6e3] shadow-[0_12px_28px_rgba(120,198,227,0.22)] hover:bg-[#62badc]'
              : 'cursor-not-allowed bg-[#c7dbe6]'
          )}
        >
          {submitting ? 'Đang gửi...' : submitLabel}
        </button>
      </div>
    </form>
  );
}
