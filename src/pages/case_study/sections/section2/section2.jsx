import React from "react";

export default function Section2({ study }) {
  const images = Array.isArray(study.imgs) && study.imgs.length > 0 ? study.imgs : [study.src];

  return (
    <section className="w-full px-5 sm:px-8 max-w-[1040px] mb-16">
      {images.length === 1 ? (
        <div className="rounded-[20px] p-2 sm:p-3 overflow-hidden bg-[#121316] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8)]">
          <img
            src={images[0]}
            alt={study.title}
            className="w-full h-auto rounded-[14px] object-cover max-h-[620px]"
            loading="eager"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {images.map((imgUrl, idx) => (
            <div
              key={imgUrl}
              className="rounded-[20px] p-2 sm:p-3 overflow-hidden bg-[#121316] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8)] flex items-center justify-center"
            >
              <img
                src={imgUrl}
                alt={`${study.title} — showcase ${idx + 1}`}
                className="w-full h-full max-h-[460px] rounded-[14px] object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
