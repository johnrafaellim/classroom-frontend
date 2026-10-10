import {
  createDataProvider,
  type CreateDataProviderOptions,
} from "@refinedev/rest";

import { BACKEND_BASE_URL } from "@/constants";
import type { ListResponse } from "@/types";

const options: CreateDataProviderOptions = {
  getList: {
    getEndpoint: ({ resource }) => resource,

    buildQueryParams: async ({
                               resource,
                               pagination,
                               filters,
                             }) => {
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
        if (
            value === undefined ||
            value === null ||
            value === ""
        ) {
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
      const json = await response.json();
      // Your API returns: { data: [...], total: 123 }
      // Refine needs: [...]
      return json.data;
    },

    // getTotalCount: async (response) => {
    //   const payload: ListResponse = await response.json();
    //
    //   return (
    //       payload.pagination?.total ??
    //       payload.data?.length ??
    //       0
    //   );
    // },
    // 4. Extract the total count for pagination
    getTotalCount: async (response) => {
      const json = await response.json();
      // Your API returns: { data: [...], total: 123 }
      // Refine needs: 123
      return (
          json.pagination?.total ??
          json.data?.length ??
          0
      );
    },
  },
};

const { dataProvider } = createDataProvider(
    BACKEND_BASE_URL,
    options,
);

export { dataProvider };