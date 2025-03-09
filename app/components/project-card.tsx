import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, AppWindow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  caption: string;
  description: string[];
  image: string;
  link: string;
  tags: string[];
  icon?: "github" | "appstore";
}

export default function ProjectCard({
  title,
  caption,
  description,
  image,
  link,
  tags,
  icon = "github",
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <div className="relative w-full pt-[56.25%] p-4 bg-muted group">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-contain absolute top-0 left-0 p-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
      <CardContent className="p-4 flex flex-col">
        <div>
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-2">{caption}</p>
        </div>
        <div className="text-sm text-muted-foreground mb-4">
          <p className="font-medium mb-1">About:</p>
          <ul className="list-disc pl-4 space-y-1">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-2 text-sm hover:underline"
        >
          {icon === "github" ? (
            <>
              <Github className="h-4 w-4" />
              View on GitHub
            </>
          ) : (
            <>
              <AppWindow className="h-4 w-4" />
              View on App Store
            </>
          )}
        </Link>
      </CardFooter>
    </Card>
  );
}
