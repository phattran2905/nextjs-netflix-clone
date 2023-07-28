"use client";
import useInfoModal from "@/hooks/useInfoModal";
import InfoModal from "./InfoModal";

export default function InfoModalWrapper() {
	const { isOpen, closeModal } = useInfoModal();

	if (!isOpen) {
		return null;
	}

	return (
		<div className="z-50 transition duration-300 bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-hidden fixed inset-0">
			<InfoModal
				visible={isOpen}
				onClose={closeModal}
			/>
		</div>
	);
}
