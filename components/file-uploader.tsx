"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="file-upload">
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          width={100}
          height={100}
          alt=""
          className="h-100 w-100 overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image src="/assets/icons/upload.svg" width={40} height={40} alt="" />
          <div className="file-upload_label">
            <p className="text-14-regular">
              <span className="text-green-500">Clique para fazer o upload</span>{" "}
              ou arraste e solte o arquivo aqui
            </p>
            <p>SVG, PNG, JPG ou Gif (max. 800x400)</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
