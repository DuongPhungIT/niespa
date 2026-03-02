'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

const SERVICE_OPTIONS = [
  { value: '', label: '-- Chọn dịch vụ quan tâm --' },
  { value: 'spa', label: 'Dịch vụ tại Spa (massage bầu, chăm sóc sau sinh, bé bơi thủy liệu...)' },
  { value: 'home', label: 'Home Spa (chăm sóc tại nhà: massage bầu, sau sinh, thông tắc tia sữa, tắm bé)' },
  { value: 'advice', label: 'Tư vấn chung' },
  { value: 'other', label: 'Khác' },
];

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  message: '',
};

/**
 * Form liên hệ – client component, submit hiển thị thông báo thành công (chưa gửi API).
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleBlur = (field: keyof FormState) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const required = (key: keyof FormState) => {
    const v = form[key];
    return typeof v === 'string' && v.trim().length > 0;
  };

  const valid = required('fullName') && required('phone') && (required('email') || form.phone.trim().length >= 10);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid || submitting) return;
    setSubmitting(true);
    // Mô phỏng gửi (sau có thể gọi API / Formspree / Getform...)
    await new Promise((r) => setTimeout(r, 600));
    setForm(initialForm);
    setTouched({});
    setSubmitted(true);
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[320px] flex-col justify-center rounded-2xl border border-pastel-mint/50 bg-pastel-mint-light/30 p-8 text-center shadow-lg ring-1 ring-black/5 lg:min-h-[420px]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-secondary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-gray-800">Đã gửi thành công</h3>
        <p className="mt-2 text-gray-600">
          Cảm ơn bạn đã liên hệ. NieSpa sẽ phản hồi trong thời gian sớm nhất.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary/90"
        >
          Gửi tin nhắn khác
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-col rounded-2xl border border-pastel-mint/50 bg-white p-6 shadow-lg ring-1 ring-black/5 md:p-8 lg:min-h-[420px]">
      <div className="mb-1 h-1 w-12 rounded-full bg-gradient-to-r from-brand-secondary to-brand-primary" aria-hidden />
      <h2 className="font-display text-xl font-bold text-gray-800">Gửi tin nhắn</h2>
      <p className="mt-1 text-sm text-gray-600">Điền form bên dưới, chúng tôi sẽ liên hệ lại cho bạn.</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label htmlFor="contact-fullName" className="block text-sm font-medium text-gray-700">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-fullName"
            type="text"
            value={form.fullName}
            onChange={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            placeholder="Nguyễn Văn A"
            className={cn(
              'mt-1 w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-gray-800 placeholder-gray-400 transition focus:bg-white focus:outline-none focus:ring-2',
              touched.fullName && !required('fullName')
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-200 focus:ring-brand-primary'
            )}
            required
          />
          {touched.fullName && !required('fullName') && (
            <p className="mt-1 text-xs text-red-500">Vui lòng nhập họ tên.</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700">
              Số điện thoại <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              value={form.phone}
              onChange={handleChange('phone')}
              onBlur={handleBlur('phone')}
              placeholder="0901 460 922"
              className={cn(
                'mt-1 w-full rounded-xl border bg-gray-50/50 px-4 py-3 text-gray-800 placeholder-gray-400 transition focus:bg-white focus:outline-none focus:ring-2',
                touched.phone && !required('phone')
                  ? 'border-red-300 focus:ring-red-500'
                  : 'border-gray-200 focus:ring-brand-primary'
              )}
              required
            />
            {touched.phone && !required('phone') && (
              <p className="mt-1 text-xs text-red-500">Vui lòng nhập số điện thoại.</p>
            )}
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              placeholder="email@example.com"
              className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-800 placeholder-gray-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700">
            Dịch vụ quan tâm
          </label>
          <select
            id="contact-service"
            value={form.service}
            onChange={handleChange('service')}
            onBlur={handleBlur('service')}
            className="mt-1 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-800 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700">
            Nội dung
          </label>
          <textarea
            id="contact-message"
            value={form.message}
            onChange={handleChange('message')}
            onBlur={handleBlur('message')}
            placeholder="Nhập nội dung cần tư vấn hoặc đặt lịch..."
            rows={4}
            className="mt-1 w-full min-w-0 resize-y rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-gray-800 placeholder-gray-400 transition focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>

        <button
          type="submit"
          disabled={!valid || submitting}
          className={cn(
            'w-full rounded-full py-3.5 font-semibold text-white transition sm:w-auto sm:px-10',
            valid && !submitting
              ? 'bg-brand-primary hover:bg-brand-primary/90 focus:ring-2 focus:ring-brand-primary focus:ring-offset-2'
              : 'cursor-not-allowed bg-gray-300'
          )}
        >
          {submitting ? 'Đang gửi...' : 'Gửi tin nhắn'}
        </button>
      </form>
    </div>
  );
}
