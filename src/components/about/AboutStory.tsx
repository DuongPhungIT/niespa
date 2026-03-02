/**
 * Câu chuyện & Sứ mệnh – nội dung giới thiệu NieSpa.
 */
export function AboutStory() {
  return (
    <section
      className="py-14 md:py-20"
      aria-labelledby="about-story-heading"
    >
      <div className="container-tight">
        <h2
          id="about-story-heading"
          className="font-display text-2xl font-bold text-gray-800 md:text-3xl"
        >
          <span className="border-b-4 border-brand-primary pb-1">CÂU CHUYỆN & SỨ MỆNH</span>
        </h2>

        <div className="mt-10 grid min-w-0 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold text-gray-800">
              NieSpa – Chăm sóc mẹ và bé trọn vẹn
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              NieSpa ra đời với mong muốn trở thành không gian chăm sóc toàn diện cho chị em phụ nữ,
              mẹ bầu và mẹ sau sinh. Chúng tôi mang đến các liệu trình chuẩn Y khoa: massage bầu,
              chăm sóc sau sinh, thông tắc tia sữa, tắm & massage bé an toàn, nhẹ nhàng.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600">
              Trên hành trình phụng sự từ tâm, NieSpa mong muốn được chăm sóc và lan tỏa những điều
              tốt đẹp nhất đến mẹ & bé; là nơi mẹ có thể trút bỏ mệt mỏi, được lắng nghe và được nâng
              niu bằng cả trái tim.
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-xl font-semibold text-gray-800">
              Sứ mệnh của chúng tôi
            </h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-primary" aria-hidden />
                <span className="min-w-0">
                  <strong className="text-gray-800">An toàn & chuyên nghiệp</strong> – Mọi quy trình
                  chăm sóc đều tuân thủ chuẩn Y khoa, đảm bảo an toàn cho mẹ và bé.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-secondary" aria-hidden />
                <span className="min-w-0">
                  <strong className="text-gray-800">Phụng sự từ tâm</strong> – Đội ngũ tận tâm, đồng
                  hành cùng mẹ trên hành trình mang thai, sau sinh và chăm sóc bé.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-primary" aria-hidden />
                <span className="min-w-0">
                  <strong className="text-gray-800">Lan tỏa yêu thương</strong> – Xây dựng cộng đồng
                  mẹ bầu, mẹ bỉm sữa tự tin, khỏe đẹp và hạnh phúc.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
