/* eslint-disable react/prop-types */
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import "./solutionBody.scss";

const SolutionBody = ({ setResponse, response }) => {
  const API_URL = "https://edubinplatform-a01d5146e549.herokuapp.com/";
  const UPLOAD_ENDPOINT = "api/image/create";

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("media", file);
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: "post",
              body: body,
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({ default: `${API_URL}${res.data}` });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <CKEditor
      editor={ClassicEditor}
      data=""
      onReady={(editor) => {
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setResponse({ ...response, text: data });
      }}
      config={{
        extraPlugins: [uploadPlugin],
      }}
    />
  );
};

export default SolutionBody;
