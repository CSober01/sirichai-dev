import heroImage from "../assets/hero-image.png";

export function HeroSection() {
  return (
    <section className="px-4 py-10 xl:py-[60px]">
      <div className="mx-auto flex max-w-[560px] flex-col gap-10 xl:max-w-[1200px] xl:flex-row xl:items-center xl:gap-[60px]">
        {/* Content */}
        <div className="flex flex-col gap-4 text-center xl:flex-1 xl:gap-6 xl:text-right">
          <h1 className="text-[40px] font-semibold leading-[48px] text-[#26231E] xl:text-[52px] xl:leading-[60px]">
            Stay Informed, Stay Inspired
          </h1>
          <p className="text-base font-medium leading-6 text-[#75716B]">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-[470px] w-full shrink-0 overflow-hidden rounded-2xl bg-white xl:h-[529px] xl:w-[386px]">
          <img
            src={heroImage}
            alt="A man with a cat on his shoulder in an autumn forest"
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-[rgba(190,187,177,0.25)]" />
        </div>

        {/* Author */}
        <div className="flex flex-col gap-3 font-medium text-[#75716B] xl:flex-1">
          <div className="flex flex-col gap-1">
            <p className="text-xs leading-5">-Author</p>
            <h2 className="text-2xl font-semibold leading-8 text-[#43403B]">
              Thompson P.
            </h2>
          </div>
          <div className="flex flex-col gap-6 text-base leading-6">
            <p>
              I am a pet enthusiast and freelance writer who specializes in
              animal behavior and care. With a deep love for cats, I enjoy
              sharing insights on feline companionship and wellness.
            </p>
            <p>
              When i’m not writing, I spends time volunteering at my local
              animal shelter, helping cats find loving homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


