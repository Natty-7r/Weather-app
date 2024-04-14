"use client";

import { PageErrorMsg } from "@/components/card/error-msg-card";
import { OnPageLoader } from "@/components/loader/on-page-loader";
import CitiesSearchBar from "@/components/search-bar/cities-seachbar";
import CitiesTable from "@/components/table/cities-table";
import { useFetchCiteisQuery } from "@/hooks/api/api-hooks";
import { useRouter } from "next/navigation";

export default function Home() {
  const { isLoading, isError, data, error } = useFetchCiteisQuery();
  const router = useRouter();
  return (
    <main className="flex flex-col items-center  p-4 sm:p-8  lg:px-32 ">
      {data && (
        <div className="  w-full  h-[85vh] lg:h-[77vh]  w-full flex flex-col  bg-red-3000  ">
          <CitiesSearchBar cities={data.results} />
          <CitiesTable cities={data.results} />
        </div>
      )}

      {isLoading && (
        <OnPageLoader
          loaderText="
      fetching cities data ..."
        />
      )}
      {isError && (
        <PageErrorMsg
          errorMsg={error.message || '"Unable to fetch cities'}
          action={{
            actionText: "reload",
            actionFunction: () => {
              router.refresh();
            },
          }}
        />
      )}
    </main>
  );
}
