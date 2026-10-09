import { Link } from "@tanstack/react-router";
import { Bookmark, ChevronRight } from "lucide-react";
import { plainOf } from "@/data/simple";
import { mathsLabel, type Path } from "@/data/types";
import { useDesk } from "@/lib/desk";

export function PathCard({ path, note }: { path: Path; note?: string }) {
  const saved = useDesk((state) => state.saved.includes(path.slug));
  const toggleSaved = useDesk((state) => state.toggleSaved);
  const plain = plainOf(path.slug);

  return (
    <article className="panel lift mt-3">
      <Link to="/path/$slug" params={{ slug: path.slug }} className="flex items-start gap-2 px-4 pt-4">
        <span className="min-w-0 flex-1">
          <span className="block font-display text-xl leading-tight text-cream">{plain.title}</span>
          <span className="mt-1 block text-sm leading-normal text-muted">{plain.line}</span>
          {note ? <span className="mt-2 block text-sm font-medium text-blue">{note}</span> : null}
        </span>
        <ChevronRight className="mt-1 size-5 shrink-0 text-muted" aria-hidden="true" />
      </Link>
      <div className="flex items-center justify-between pr-1 pl-4">
        <p className="py-3 text-sm text-cream">
          {path.duration}
          <span className="text-muted"> · </span>
          {mathsLabel[path.maths]}
        </p>
        <button
          type="button"
          aria-pressed={saved}
          aria-label={saved ? `Remove ${plain.title} from saved` : `Save ${plain.title}`}
          onClick={() => toggleSaved(path.slug)}
          className="flex size-11 items-center justify-center"
        >
          <Bookmark
            className={saved ? "size-5 fill-hot text-hot" : "size-5 text-cream"}
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}
