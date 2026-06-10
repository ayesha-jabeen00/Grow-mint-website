import { Play } from "lucide-react";

type Video = {
  title: string;
  url: string;
  thumbnail: string;
  category: string;
};

const videos: Video[] = [
  {
    title: "Dandiya Night",
    url: "https://www.instagram.com/reel/DOvV8mFEwa8",
    thumbnail:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=600&fit=crop",
    category: "Event",
  },
  {
    title: "DGP Edit",
    url: "https://www.instagram.com/reel/DQYSArmDC3X",
    thumbnail:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop",
    category: "Promo",
  },
  {
    title: "New Year Edit",
    url: "https://www.instagram.com/reel/DRjCJXjEwe0",
    thumbnail:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=600&fit=crop",
    category: "Celebration",
  },
  {
    title: "Glowfest Edit 1",
    url: "https://www.instagram.com/reel/DPrAVQFDRPA",
    thumbnail:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=600&fit=crop",
    category: "Festival",
  },
  {
    title: "Glowfest Edit 2",
    url: "https://www.instagram.com/reel/DPwMaqJk-mD",
    thumbnail:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=600&fit=crop",
    category: "Festival",
  },
  {
    title: "Pottery Workshop",
    url: "https://www.instagram.com/reel/DPn9A-wE600",
    thumbnail:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=600&fit=crop",
    category: "Workshop",
  },
];

export function VideoSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container-page">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-amber-600">
            Video Production
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            Video{" "}
            <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Professional video editing that tells your story and engages your audience
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {videos.map((video) => (
            <a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open(video.url, "_blank", "noopener,noreferrer");
              }}
              className="group relative block aspect-[9/16] overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Thumbnail */}
              <img
                src={video.thumbnail}
                alt={video.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current" />
                </div>
              </div>

              {/* Label */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                  {video.category}
                </p>
                <p className="mt-1 font-display text-base font-bold text-white">
                  {video.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
