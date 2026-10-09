import type { BaseRecord } from "@refinedev/core";

export type Subject = BaseRecord & {
    id: number;
    name: string;
    code: string;
    description: string;
    department: string;
    createdAt: string;
};