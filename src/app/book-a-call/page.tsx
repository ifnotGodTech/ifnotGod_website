"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
export default function BookingPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      (async function () {
        setLoading(true);
        const cal = await getCalApi({ namespace: "secret" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      })();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  return (
    <>
      {loading ? (
        <Loader className="animate-spin w-64 h-64 flex justify-center items-center m-auto" />
      ) : (
        <Cal
          namespace="secret"
          calLink="ifnotgodtech/30min"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme: "light" }}
        />
      )}
    </>
  );
}
