"use client";

interface DeleteProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  productTitle?: string;
  loading?: boolean;
}

const DeleteProductModal = ({
  isOpen,
  onClose,
  onConfirm,
  productTitle,
  loading = false,
}: DeleteProductModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg p-6 w-[400px] shadow-lg">
        <h2 className="text-lg font-semibold mb-3">Delete Product</h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete{" "}
          <span className="font-medium">{productTitle}</span>? This action
          cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 bg-red-600 text-white rounded disabled:opacity-50"
          >
            {loading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
