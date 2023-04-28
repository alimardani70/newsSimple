import React, { ReactNode } from "react";
import RenderPortal from "../common/RenderPortal";
import {Button, CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from 'themes/theme';
type propsType = {
  children?: ReactNode;
  modalButtonTitle?: string | ReactNode;
  title?: string;
  open?: boolean;
};

const Modal: React.FC<propsType> = ({
  children = "",
  open = false,
  modalButtonTitle = "",
  title,
}) => {
  const attributes = {};
  const [isOpen, setIsOpen] = React.useState<boolean>(open);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        {modalButtonTitle}
      </Button>
      <RenderPortal>
        {isOpen ? (
          <>
              <ThemeProvider theme={theme}>
                <CssBaseline enableColorScheme />
                <div >
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-30 outline-none focus:outline-none ">
                    <div
                      className="opacity-25 fixed inset-0 z-30 bg-black"
                      onClick={handleClose}
                    ></div>

                    <div className="relative my-6    container mx-auto 	w-full	lg:max-w-4xl md:max-w-sm sm:max-w-xs z-50 ">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none lg:px-48">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">{title}</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <div className="my-4 text-slate-500 text-lg leading-relaxed">
                            {children}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ThemeProvider>
          </>
        ) : null}
      </RenderPortal>
    </>
  );
};

export default Modal;
