import { PencilIcon } from "@heroicons/react/solid";
import SignatureModal from "./__UserSignature";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function UserWaiver({
  nextStep,
  handleFormData,
  formData,
  formQueries: { waiverContent, waiverDeclaration },
}) {
  const WAIVER = waiverContent;
  const DECLARATION = waiverDeclaration;

  const [modalOpen, setModalOpen] = useState(false);

  const signatureProps = {
    modalOpen,
    setModalOpen,
    nextStep,
    formData,
    handleFormData,
  };

  return (
    <>
      {modalOpen && <SignatureModal {...signatureProps} />}
      <div className="h-screen bg-gray-900 flex flex-col justify-center items-center text-center lg:px-8 lg:overflow-hidden">
        <div className="max-h-screen px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-center lg:items-center">
          <div className="sm:py-12 lg:py-24">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-6xl xl:text-6xl">
              <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-400 sm:pb-5">
                Digital Waiver
              </span>
            </h1>
            <div className="max-h-screen-2/3 mt-2 p-10 overflow-y-scroll bg-gray-100 rounded-lg text-left">
              <h6 className="mb-4 text-md font-bold text-green-400">PLEASE READ CAREFULLY</h6>
              <ReactMarkdown className="whitespace-pre-wrap">{WAIVER}</ReactMarkdown>
              <div className="mt-4 py-4 space-y-4 bg-gray-100 rounded-lg text-center">
                <p className="block text-sm text-gray-700">{DECLARATION}</p>
                <div className="flex justify-center">
                  {!modalOpen && (
                    <>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="mx-2 inline-flex justify-center py-2 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <PencilIcon
                          className="h-5 w-4 mr-1 text-green-200 group-hover:text-green-400"
                          aria-hidden="true"
                        />
                        Signature Canvas
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
