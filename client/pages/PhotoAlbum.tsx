import { useState, useRef } from "react";
import { Upload, X, Search } from "lucide-react";
import pic1 from "@/assets/pic1.png";
import pic2 from "@/assets/pic2.png";
import pic3 from "@/assets/pic3.png";

interface Photo {
  id: string;
  src: string;
  tagsCount: number;
  date: string;
}

interface Tag {
  id: string;
  name: string;
  isYou: boolean;
}

export default function PhotoAlbum() {
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: "1",
      src: pic1,
      tagsCount: 5,
      date: "Oct 31, 2024",
    },
    {
      id: "2",
      src: pic2,
      tagsCount: 3,
      date: "Oct 31, 2024",
    },
    {
      id: "3",
      src: pic3,
      tagsCount: 7,
      date: "Oct 30, 2024",
    },
  ]);

  return (
    <div>
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.src}
          alt={`Photo ${photo.id}`}
          className="w-full h-auto"
        />
      ))}
    </div>
  );


  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [tags, setTags] = useState<Tag[]>([
    { id: "1", name: "You", isYou: true },
    { id: "2", name: "Sarah", isYou: false },
    { id: "3", name: "Mike", isYou: false },
    { id: "4", name: "Jessica", isYou: false },
    { id: "5", name: "Alex", isYou: false },
  ]);
  const [selectedTags, setSelectedTags] = useState<string[]>(["1"]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const newPhoto: Photo = {
            id: Date.now().toString(),
            src: event.target?.result as string,
            tagsCount: 0,
            date: new Date().toLocaleDateString(),
          };
          setPhotos([newPhoto, ...photos]);
        };
        reader.readAsDataURL(file);
      });
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId],
    );
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border px-4 py-4">
        <h1 className="text-2xl font-semibold">Photo Album</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Discover yourself in photos with face recognition
        </p>
      </div>

      {/* Upload Section */}
      <div className="px-4 py-6 border-b border-border">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full flex flex-col items-center justify-center gap-3 p-6 rounded-lg border-2 border-dashed border-border/50 hover:border-primary/50 hover:bg-primary/5 transition cursor-pointer"
        >
          <Upload size={32} className="text-muted-foreground" />
          <div className="text-center">
            <p className="font-medium text-sm">Upload Photos</p>
            <p className="text-xs text-muted-foreground mt-1">
              Drag and drop or click to select
            </p>
          </div>
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      {/* Photos Grid */}
      <div className="px-4 py-6">
        {photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="relative group cursor-pointer rounded-lg overflow-hidden"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt="Photo"
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition">
                    <p className="text-xs font-medium">
                      {photo.tagsCount} people
                    </p>
                    <p className="text-xs text-gray-300">{photo.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-muted-foreground">
              No photos yet. Upload some to get started!
            </p>
          </div>
        )}
      </div>

      {/* Photo Detail Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-end md:items-center justify-center p-4">
          <div className="w-full md:max-w-2xl bg-secondary rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
            >
              <X size={24} />
            </button>

            <div className="grid md:grid-cols-2 gap-4 p-4 md:p-6">
              {/* Photo */}
              <div className="aspect-square rounded overflow-hidden">
                <img
                  src={selectedPhoto.src}
                  alt="Selected"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-col gap-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Tagged People</h2>
                  <p className="text-sm text-muted-foreground">
                    {selectedPhoto.tagsCount} people detected
                  </p>
                </div>

                {/* Tag Chips */}
                <div className="space-y-2">
                  {tags.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => toggleTag(tag.id)}
                      className={`w-full px-4 py-2 rounded-lg font-medium text-sm transition text-left ${
                        selectedTags.includes(tag.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary/50 text-foreground hover:bg-secondary/70"
                      }`}
                    >
                      {tag.isYou ? "👤 " : ""}
                      {tag.name}
                    </button>
                  ))}
                </div>

                {/* Find Yourself */}
                <div className="pt-4 border-t border-border">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition">
                    <Search size={18} />
                    Find Yourself
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
