'use client';

import React from 'react';

export function TrustedBrands() {
  const logos = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAp0TsOOhDUvENP12QtnsHHqx0nY6TgL57-HaKAxTO4gLFfKpp2VYpaxsxJBHc1dk9X8b4R9fGLY0UcboQt8lYlF5SIe9OdesGb1EFhd_G5iWptAGhdnb-3DC8XDvBTZuTpEzkXvhwmBYcjv1JLuNCQqJyvWiviLCQcGdR06wIkihqtlQzFc4XaovwUNhh0cr9FDOO-LAzSkNojqadLfhdD_QIVRznpIzpK9TBGuHJplKlQvOxZL5Z6uA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA1qEaQQEllSVmZEp1SjeU4MFmkVQ2NytsZmcCZ8KxxezlzE9_33feGntaLjxdshHFV5INJlG2lob97HBC2JVfBg_mS8EqVwbLUl_iYX_PFl0EbrMYoHu4GMPLTYI0EBJgQxb6Ut2GKvUnuhdW1IZYZQmSj6ntSSqTKtuJphAPscPwV8GfCOQZjKZMlVgbc7HifBvjIPO-sdceHiTK3eyNl0xJnxVTs63heuRisJWbDvVrCVTj9c5AnTQ',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDoaPD8uqgLsV1AL5wzBkkdTT7MDNdcVe_pabos5xdxObMycz0Rz1XyUCp5gi56A9Z_YSU5XlxDMftVlZcWJaN3QLc9ZY24_Yzg5IW3Ty9D1BYLsDLhn3NfQjzunfb1kEGKHjcxkdZuny7DlLwqMYknOfAp8pGRJ34cTnPd_JZfiVo8wl7M0xhccorYXUcHQDbpVBj8GXrHkA2MK-_0V87OTjuX2940sruUNGy8dXejkef8DKSkvasaDg',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCx9JzQAwHC_nt0Yca52V79VP684vRBWOMvPY5ClgRMHQC6lnELVjmv0gDIFzNPen49-0AHwIDYLnjTU5mhKj2mIPVFIfjTDm_wojDwXKmWa6n1kPKeOJEbxzqtjFl7bjA6vkzAGCEnlgOUmcL5YHrUYgGrjNnu_N7zsZJ81TWC5Ob9XVzPnj8NiFrqC-aC5nGbI9x3RpdHdxF359i4zWXbVRKD6uss8MmIQyohHdLJEidQUfdSlpdA4A'
  ];

  return (
    <section className="w-full border-y border-[#d9e4ec] dark:border-slate-800 bg-white dark:bg-[#131d23] py-10 flex flex-col items-center justify-center gap-6">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        TRUSTED BY FAST-GROWING TEAMS
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
        {logos.map((src, idx) => (
          <img key={idx} src={src} alt="Client partner logo" className="h-8 object-contain px-4 py-1 bg-slate-50 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700" />
        ))}
      </div>
    </section>
  );
}

