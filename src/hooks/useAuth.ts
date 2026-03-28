import { useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { apiUrl } from "@/lib/urls";

export function useAuth() {
  const [loading, startTransition] = useTransition();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null,
  );

  useEffect(() => {
    startTransition(() => {
      fetch(`${apiUrl}/auth/me`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            setUser(data?.data);
          } else {
            setUser(null);
            router.push("/login");
          }
        })
        .catch(() => {
          setUser(null);
          console.log("error");
          router.push("/login");
        });
    });
  }, [router]);

  return { user, loading };
}
