import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as yup from "yup";
import { useFormik } from "formik";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addDiscount } from "../../Redux/action/discount.action";

function Discount() {
  const [open, setOpen] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    console.log(e);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const discountVal = useSelector((state) => state.discount);
  console.log("discountVal", discountVal);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let disCountSchema = yup.object({
    tag: yup.string().required(),
    name: yup.string().required(),
    date: yup.string().required(),
    percentage: yup.number().required(),
    file: yup.mixed().required(),
  });

  const formik = useFormik({
    validationSchema: disCountSchema,
    initialValues: {
      tag: "",
      name: "",
      date: "",
      percentage: "",
      file: null,
    },
    onSubmit: (values, actions) => {
      console.log(values);
      dispatch(addDiscount({ ...values, file: imagePreview }));
      actions.resetForm();
      handleClose();
    },
  });

  const columns = [
    { field: "tag", headerName: "tag", width: 130 },
    { field: "name", headerName: "name", width: 100 },
    { field: "date", headerName: "date", width: 100 },
    { field: "percentage", headerName: "percentage", width: 170 },
    //    { field: "file", headerName: "file", width: 100 },

    {
      field: "file",
      headerName: "Image",
      width: 150,
      editable: true,
        renderCell: (params) => {
        return params.value ? (
          <img
            src={params.value}
            alt="Product Image"
            style={{ width: 100, height: 100 }}
          />
        ) : null;
      },
    },
    // {
    //   field: "action",
    //   headerName: "Edit-Dlete",
    //   width: 130,
    //   renderCell: (params) => (
    //     <>
    //       <IconButton
    //         aria-label="delete"
    //         onClick={() => handleDelete(params.row)}
    //       >
    //         <DeleteIcon />
    //       </IconButton>

    //       <IconButton
    //         aria-label="edit"
    //         onClick={() => handleupdate(params.row)}
    //       >
    //         <EditIcon />
    //       </IconButton>
    //     </>
    //   ),
    // },
  ];

  const discountData = discountVal.data.map((v, i) => ({
    ...v,
    id: i + 1,
  }));

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = formik;

  return (
    <>
      <div>Discount</div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, website please enter your details
            here.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              required
              margin="dense"
              id="tag"
              name="tag"
              label="Tag"
              type="text"
              fullWidth
              variant="standard"
              value={values.tag}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: "red" }}>
              {errors.tag && touched.tag ? errors.tag : null}
            </span>
            <TextField
              required
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: "red" }}>
              {errors.name && touched.name ? errors.name : null}
            </span>
            <TextField
              required
              margin="dense"
              id="date"
              name="date"
              //   label="Date"
              type="date"
              fullWidth
              variant="standard"
              value={values.date}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: "red" }}>
              {errors.date && touched.date ? errors.date : null}
            </span>
            <TextField
              required
              margin="dense"
              id="percentage"
              name="percentage"
              label="Percentage"
              type="number"
              fullWidth
              variant="standard"
              value={values.percentage}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span style={{ color: "red" }}>
              {errors.percentage && touched.percentage
                ? errors.percentage
                : null}
            </span>
            <input
              margin="dense"
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                setFieldValue("file", event.target.files[0]);
                // handleChange(event);
                handleImageChange(event);
              }}
              //   onChange={handleImageChange}
              onBlur={handleBlur}
            />

            <span style={{ color: "red" }}>
              {errors.file && touched.file ? errors.file : null}
            </span>
            {imagePreview && (
              <div>
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  style={{
                    width: "300px",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
              </div>
            )}

            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={discountData}
          columns={columns}
          getRowId={(row) => row.id}
          //   initialState={{
          //     pagination: {
          //       paginationModel: {
          //         pageSize: 5,
          //       },
          //     },
          //   }}
          pageSizeOptions={[5]}
          checkboxSelection
          //   disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}

export default Discount;

// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { DataGrid } from "@mui/x-data-grid";
// import { Box } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { addDiscount } from "../../Redux/action/discount.action";

// function Discount() {
//   const [open, setOpen] = React.useState(false);
//   const dispatch = useDispatch();

//   const discountVal = useSelector((state) => state.discount);
//   console.log("discountVal", discountVal.data);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   let disCountSchema = yup.object({
//     tag: yup.string().required(),
//     name: yup.string().required(),
//     date: yup.string().required(),
//     percentage: yup.number().required(),
//     file: yup.mixed().required(),
//   });

//   const formik = useFormik({
//     validationSchema: disCountSchema,
//     initialValues: {
//       tag: "",
//       name: "",
//       date: "",
//       percentage: "",
//       file: null,
//     },
//     onSubmit: (values, actions) => {
//       console.log(values);
//       dispatch(addDiscount(values));
//       actions.resetForm();
//       handleClose();
//     },
//   });

//   const columns = [
//     { field: "tag", headerName: "tag", width: 130 },
//     { field: "name", headerName: "name", width: 100 },
//     { field: "date", headerName: "date", width: 100 },
//     { field: "percentage", headerName: "percentage", width: 170 },
//     {
//       field: "file",
//       headerName: "Image",
//       width: 150,
//       editable: true,
//       renderCell: (params) => {
//         const imageUrl =
//           typeof params.value === "string"
//             ? params.value
//             : URL.createObjectURL(params.value);
//         return params.value ? (
//           <img
//             src={imageUrl}
//             alt="Product Image"
//             style={{ width: 100, height: 100 }}
//           />
//         ) : null;
//       },
//     },
//   ];

//   const discountData = discountVal.data.map((v, i) => ({
//     ...v,
//     id: i + 1,
//   }));

//   const {
//     values,
//     errors,
//     touched,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     setFieldValue,
//   } = formik;

//   return (
//     <>
//       <div>Discount</div>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your details here.
//           </DialogContentText>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               autoFocus
//               required
//               margin="dense"
//               id="tag"
//               name="tag"
//               label="Tag"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={values.tag}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <span style={{ color: "red" }}>
//               {errors.tag && touched.tag ? errors.tag : null}
//             </span>
//             <TextField
//               required
//               margin="dense"
//               id="name"
//               name="name"
//               label="Name"
//               type="text"
//               fullWidth
//               variant="standard"
//               value={values.name}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <span style={{ color: "red" }}>
//               {errors.name && touched.name ? errors.name : null}
//             </span>
//             <TextField
//               required
//               margin="dense"
//               id="date"
//               name="date"
//               type="date"
//               fullWidth
//               variant="standard"
//               value={values.date}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <span style={{ color: "red" }}>
//               {errors.date && touched.date ? errors.date : null}
//             </span>
//             <TextField
//               required
//               margin="dense"
//               id="percentage"
//               name="percentage"
//               label="Percentage"
//               type="number"
//               fullWidth
//               variant="standard"
//               value={values.percentage}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             <span style={{ color: "red" }}>
//               {errors.percentage && touched.percentage
//                 ? errors.percentage
//                 : null}
//             </span>
//             <input
//               required
//               margin="dense"
//               id="file"
//               name="file"
//               type="file"
//               onChange={(event) => {
//                 const file = event.currentTarget.files[0];
//                 setFieldValue("file", file);
//                 console.log("Selected file:", file);
//               }}
//               onBlur={handleBlur}
//             />
//             <span style={{ color: "red" }}>
//               {errors.file && touched.file ? errors.file : null}
//             </span>
//             {values.file && (
//               <img
//                 width={"150px"}
//                 height={"150px"}
//                 src={
//                   typeof values.file === "string"
//                     ? values.file
//                     : URL.createObjectURL(values.file)
//                 }
//                 alt="Selected file"
//               />
//             )}
//             <DialogActions>
//               <Button onClick={handleClose}>Cancel</Button>
//               <Button type="submit">Submit</Button>
//             </DialogActions>
//           </form>
//         </DialogContent>
//       </Dialog>
//       <Box sx={{ height: 400, width: "100%" }}>
//         <DataGrid
//           rows={discountData}
//           columns={columns}
//           getRowId={(row) => row.id}
//           pageSizeOptions={[5]}
//           checkboxSelection
//         />
//       </Box>
//     </>
//   );
// }

// export default Discount;
