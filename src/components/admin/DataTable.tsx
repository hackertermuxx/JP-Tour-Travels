"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

interface Column {
  key: string;
  label: string;
  render?: (value: unknown, row: Record<string, unknown>) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, unknown>[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export function DataTable({ columns, data, onEdit, onDelete }: DataTableProps) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableHead key={col.key}>{col.label}</TableHead>
            ))}
            {(onEdit || onDelete) && <TableHead className="w-24">Actions</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={row.id as string || i}>
              {columns.map((col) => (
                <TableCell key={col.key}>
                  {col.render ? col.render(row[col.key], row) : (row[col.key] as string) || "-"}
                </TableCell>
              ))}
              {(onEdit || onDelete) && (
                <TableCell>
                  <div className="flex gap-1">
                    {onEdit && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onEdit(row.id as string)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                    )}
                    {onDelete && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => onDelete(row.id as string)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {data.length === 0 && (
        <div className="py-8 text-center text-sm text-muted-foreground">No data found.</div>
      )}
    </div>
  );
}
