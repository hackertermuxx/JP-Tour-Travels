"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "./Modal";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  variant?: "danger" | "warning" | "default";
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  variant = "danger",
}: ConfirmationDialogProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <div
          className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
            variant === "danger"
              ? "bg-destructive/10 text-destructive"
              : variant === "warning"
              ? "bg-warning/10 text-warning"
              : "bg-primary/10 text-primary"
          }`}
        >
          <AlertTriangle className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="outline" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button
            variant={variant === "danger" ? "destructive" : "default"}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
