interface SignOutConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function SignOutConfirmModal({
                                              isOpen,
                                              onClose,
                                              onConfirm,
                                            }: SignOutConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-base-100 p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4 text-newblue">Confirm Sign Out</h2>
        <p className="mb-6">Are you sure you want to sign out?</p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="btn btn-sm">Cancel</button>
          <button onClick={onConfirm} className="btn btn-sm bg-babyblue text-newblue">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
