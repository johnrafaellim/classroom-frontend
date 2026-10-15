import {
  createDataProvider,
  type CreateDataProviderOptions,
} from "@refinedev/rest";

import { BACKEND_BASE_URL } from "@/constants";
import type {CreateResponse, ListResponse} from "@/types";
import { HttpError } from "@refinedev/core";

if (!BACKEND_BASE_URL)
  throw new Error(
    "BACKEND_BASE_URL is not configured. Please set VITE_BACKEND_BASE_URL in you .env file."
  );

const buildHttpError = async (response: Response): Promise<HttpError> => {
  let message = "Request failed.";

  try {
    const payload = (await response.json()) as { message?: string };

    if (payload?.message) message = payload.message;
  } catch {
    // Ignore errors
  }

  return { message, statusCode: response.status };
};

const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({ resource }) => resource,

    buildQueryParams: async ({ resource, pagination, filters }) => {
      const page = pagination?.currentPage ?? 1;
      const pageSize = pagination?.pageSize ?? 10;

      const params: Record<string, string | number> = {
        page,
        limit: pageSize,
      };

      filters?.forEach((filter) => {
        // Ignore conditional filters like "or" / "and"
        if (!("field" in filter)) {
          return;
        }

        const { field, value } = filter;

        // Ignore empty filter values
        if (value === undefined || value === null || value === "") {
          return;
        }

        if (resource === "subjects") {
          if (field === "department") {
            params.department = String(value);
          }

          if (
            field === "name" ||
            field === "code" ||
            field === "search" ||
            field === "q"
          ) {
            params.search = String(value);
          }
        }
      });

      console.log("Refine filters:", filters);
      console.log("API query params:", params);

      return params;
    },

    // Extract the data array from API response
    mapResponse: async (response) => {
      if(!response.ok) throw await buildHttpError(response);

      const json = (await response.json()) as ListResponse;
      // Your API returns: { data: [...], total: 123 }
      // Refine needs: [...]
      return json.data ?? [];
    },

    // 4. Extract the total count for pagination
    getTotalCount: async (response) => {
      if(!response.ok) throw await buildHttpError(response);
      const json = (await response.json()) as ListResponse;
      // Your API returns: { data: [...], total: 123 }
      // Refine needs: 123
      return json.pagination?.total ?? json.data?.length ?? 0;
    },
  },

  create: {
    getEndpoint: ({ resource }) => resource,

    buildBodyParams: async ({ variables }) => variables,

    mapResponse: async (response) => {
      const json: CreateResponse = await response.json();

      return json.data ?? [];
    }
  }
};

const { dataProvider } = createDataProvider(BACKEND_BASE_URL, options);

export { dataProvider };
