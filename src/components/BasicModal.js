import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Plus from "../assets/images/plus.svg";
import Close from "../assets/images/close.svg";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  border: "none",
};

export default function BasicModal({ item, setItem, query }) {
  const [open, setOpen] = React.useState(false);
  const [increment, setIncrement] = React.useState(1);
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("This field is required."),
  });

  const formSubmit = (values, actions) => {
    setIncrement(increment + 1);
    const data = { name: values.name, id: increment };
    setItem([...item, data]);
    actions.resetForm({
      values: {
        name: "",
      },
    });
    handleClose();
  };

  return (
    <div>
      {/* modal open button */}
      <div
        className="w-[122px] h-[40px] bg-[#E4E7EE] flex items-center justify-center cursor-pointer"
        onClick={query.length > 0 ? handleClickAlert : handleOpen}
      >
        <div className="mr-[14.5px]">
          <img src={Plus} alt="plus" />
        </div>
        <div className="text-black leading-[15px] text-sm font-normal">
          Button
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="relative w-[410px] h-[276px] bg-[white] p-[30px] rounded focus:outline-none shadow-[0px_4px_15px_rgba(0,0,0,0.1)]"
        >
          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={handleClose}
          >
            <img src={Close} alt="close" />
          </div>
          <div>
            <div className="text-[28px] leading-[42px] font-semibold text-center">
              Add Task
            </div>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={validationSchema}
              enableReinitialize
              validateOnBlur
              validateOnChange
              onSubmit={(values, actions) => formSubmit(values, actions)}
            >
              {({ values, errors, handleSubmit, touched, resetForm }) => {
                return (
                  <Form onSubmit={handleSubmit}>
                    <div className="relative mt-[46px] w-full h-[56px] pl-[16px] bg-[#F1F4F6] rounded flex items-center justify-between">
                      <Field
                        id="name"
                        name="name"
                        type="input"
                        placeholder="Add Title"
                        className="bg-[#F1F4F6] text-sm font-normal placeholder:text-base placeholder:text-[#252525] focus:outline-none"
                      />
                      {errors?.name && (
                        <div className="text-[red] text-sm absolute -bottom-5 left-2">
                          {errors?.name}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-[140px] h-[48px] bg-[#F1F4F6] rounded mt-[24px] flex items-center justify-center cursor-pointer"
                    >
                      <div className="text-[#252525] text-sm font-normal">
                        Add Task
                      </div>
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </Box>
      </Modal>

      {/* alert */}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={openAlert}
          autoHideDuration={5000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseAlert}
            severity="error"
            sx={{ width: "100%" }}
          >
            Please clear the search bar.
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  );
}
