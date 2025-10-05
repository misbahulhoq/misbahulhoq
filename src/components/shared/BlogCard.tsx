import { baseUrl } from "@/lib/baseUrl";
import { BlogType } from "@/types/blog";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ArrowRight, Tag, Trash } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function BlogCard({
  blog,
  adminMode = false,
}: {
  blog: BlogType;
  adminMode?: boolean;
}) {
  const queryClient = useQueryClient();
  const { _id, title, excerpt, tags } = blog;
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const res = await fetch(baseUrl + `/blogs/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      toast.success("Blog deleted successfully!");
    },
    onError: () => {
      toast.error("Could not delete blog");
    },
  });
  return (
    <article className="bg-card border-border group relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-2xl">
      <div className="p-6">
        {/* Title */}
        <h3 className="text-foreground group-hover:text-primary mb-3 line-clamp-2 text-xl font-bold transition-colors">
          {title}
        </h3>

        {/* Excerpt */}
        <div
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed"
        ></div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-secondary text-secondary-foreground border-border hover:border-primary/50 flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors"
            >
              <Tag className="h-3 w-3" />
              {tag}
            </span>
          ))}
          {blog.tags.length > 3 && (
            <span className="bg-secondary text-secondary-foreground border-border rounded-full border px-2.5 py-0.5 text-xs font-medium">
              +{blog.tags.length - 3}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="border-border flex items-center justify-between border-t pt-4">
          {adminMode ? (
            <>
              <Link
                href={`/dashboard/blogs/edit/${_id}`}
                className="bg-primary text-primary-foreground group flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-transform hover:scale-105"
              >
                Edit
              </Link>
              {/* <button
                onClick={() => deleteMutation.mutate(_id)}
                className="border-primary bg-primary/10 group flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium transition-transform hover:scale-105"
              >
                Delete
              </button> */}
              <DeleteConfirmationDialog
                onConfirm={() => deleteMutation.mutate(_id)}
              />
            </>
          ) : (
            <Link
              href={`/blog/${_id}`}
              className="bg-primary text-primary-foreground group flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium transition-transform hover:scale-105"
            >
              Read More
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>

      {/* Bottom gradient accent */}
      <div className="from-primary via-accent to-primary absolute bottom-0 h-1 w-full bg-gradient-to-r"></div>
    </article>
  );
}

// shadcn/ui components (adjust import paths to your project)
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";

type Props = {
  /** Name of the item to delete (used in the dialog text) */
  itemName?: string;
  /** Called when the user confirms the deletion */
  onConfirm: () => void | Promise<void>;
  /** Optional className for the trigger button */
  className?: string;
};

function DeleteConfirmationDialog({
  itemName = "this item",
  onConfirm,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleConfirm() {
    try {
      setLoading(true);
      await Promise.resolve(onConfirm());
      setOpen(false);
    } catch (err) {
      // handle error (toast/log) — keep it minimal here
      console.error("Delete failed", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="border-primary bg-primary/10 group flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium transition-transform hover:scale-105"
        >
          <Trash className="h-4 w-4" />
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete <strong>{itemName}</strong>? This
            action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            onClick={handleConfirm}
            disabled={loading}
            className="bg-destructive text-destructive-foreground hover:brightness-95"
          >
            {loading ? "Deleting..." : "OK, Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
