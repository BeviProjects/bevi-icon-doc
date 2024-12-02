"use client";
import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Criar query string
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  // Remover query string
  const removeQueryString = useCallback(
    (name: string) => {
      const params = new URLSearchParams(searchParams);
      params.delete(name);
      return params.toString();
    },
    [searchParams]
  );

  // Navegar com nova query
  const navigateWithQuery = useCallback(
    (queryName: string, queryValue?: string) => {
      const newQueryString = queryValue
        ? createQueryString(queryName, queryValue)
        : removeQueryString(queryName);

      router.push(newQueryString ? `${pathname}?${newQueryString}` : pathname);
    },
    [router, pathname, createQueryString, removeQueryString]
  );

  // Processar todos os params
  const queryParams = useMemo(() => {
    const params = new URLSearchParams(searchParams);
    return Object.fromEntries(params.entries());
  }, [searchParams]);

  return {
    queryParams,
    createQueryString,
    removeQueryString,
    navigateWithQuery,
  };
}
