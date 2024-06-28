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
import { Avatar, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  addProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../../Redux/action/product.action";
import { useDispatch, useSelector } from "react-redux";
import {
  COLLECTION_ID_MESSAGES,
  DATABASE_ID,
  IMAGES_ID,
  databases,
  storage,
} from "../../appwriteConfig";
import { ID } from "appwrite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { UPDATE_PRODUCT } from "../../Redux/Actiontype";

function ProductAdmin() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState([]);
  const [update, setupdate] = React.useState(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const productVal = useSelector((state) => state.product);

  const modifiedProductData = productVal.product.map((product, index) => ({
    ...product,
    id: index + 1, // or use a unique identifier if available in your data
  }));

  const handleClickOpen = () => {
    formik.setValues({
      username: "",
      description: "",
      price: "",
      sale: false,
      women: false,
      man: false,
      clothes: false,
      kids: false,
      shoes: false,
      bags: false,
      brand: "",
      s: false,
      m: false,
      l: false,
      xl: false,
      xxl: false,
      sku: "",
      image: "",
    });

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let productSchema = yup.object({
    username: yup.string().required(),
    description: yup.string().required(),
    price: yup.string().required(),
    brand: yup.string().required(),
    sku: yup.string().required(),
    image: yup.mixed().required("please upload file"),
  });

  const formik = useFormik({
    validationSchema: productSchema,
    initialValues: {
      username: "",
      description: "",
      price: "",
      sale: false,
      women: false,
      man: false,
      clothes: false,
      kids: false,
      shoes: false,
      bags: false,
      brand: "",

      s: false,
      m: false,
      l: false,
      xl: false,
      xxl: false,
      sku: "",
      image: "",
      color: "",
    },
    onSubmit: async (values, action) => {
      const trueCategories = [];
      const trueSizes = [];
      const trueSale = [];

      // Extract true values for categories
      ["women", "man", "clothes", "kids", "shoes", "bags"].forEach((field) => {
        if (values[field]) {
          trueCategories.push(field);
        }
      });
      ["sale"].forEach((field) => {
        if (values[field]) {
          trueSale.push(field);
        }
      });

      // Extract true values for sizes
      ["s", "m", "l", "xl", "xxl"].forEach((field) => {
        if (values[field]) {
          trueSizes.push(field);
        }
      });

      if (update) {
        // console.log("1111fgfggggggfg1111");
        dispatch(updateProduct({ ...update, ...values }));
      } else {
        dispatch(
          addProduct({
            ...values,
            sale: trueSale,
            categories: trueCategories,
            sizes: trueSizes,
          })
        );
      }

      action.resetForm();
      handleClose();
    },
  });

  const columns = [
    { field: "username", headerName: "Name", width: 130 },
    { field: "price", headerName: "price", width: 100 },
    { field: "brand", headerName: "brand", width: 100 },
    { field: "description", headerName: "Description", width: 170 },
    { field: "sku", headerName: "sku", width: 100 },
    { field: "size", headerName: "Size / category", width: 250 },
    {
      field: "image_preview",
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
    {
      field: "action",
      headerName: "Edit-Dlete",
      width: 130,
      renderCell: (params) => (
        <>
          <IconButton
            aria-label="delete"
            onClick={() => handleDelete(params.row)}
          >
            <DeleteIcon />
          </IconButton>

          <IconButton
            aria-label="edit"
            onClick={() => handleupdate(params.row)}
          >
            <EditIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const handleupdate = async (data) => {
    console.log("handleupdate", data);
    formik.setValues(data);
    const categoriesFieldNames = [
      "bags",
      "shoes",
      "kids",
      "clothes",
      "man",
      "women",
      "s",
      "m",
      "l",
      "xl",
      "xxl",
    ];

    categoriesFieldNames.forEach((field) => {
      const getcategories = data.size.split(",");

      formik.setFieldValue(field, getcategories.includes(field)); // Convert truthy/falsy values to boolean
    });
    setupdate(data);
    setOpen(true);

    // const categoriesFieldNames = [
    //   "bags",
    //   "shoes",
    //   "kids",
    //   "clothes",
    //   "man",
    //   "women",
    //   "s",
    //   "m",
    //   "l",
    //   "xl",
    //   "xxl",
    // ];

    // categoriesFieldNames.forEach((field) => {
    //   const getcategories = data.size.split(",");

    //   formik.setFieldValue(field, getcategories.includes(field)); // Convert truthy/falsy values to boolean
    // });

    // console.log("Form values after setting checkboxes:", formik.values);

    /* try {
      const result = await databases.updateDocument(
        DATABASE_ID, // Your database ID
        COLLECTION_ID_MESSAGES, // Your collection ID
        data.$id, // ID of the document you want to update
        {
          // Update the fields you want to change
          username: formik.values.username,
          description: formik.values.description,
          price: formik.values.price,
          brand: formik.values.brand,
          size: formik.values.size,
          sku: formik.values.sku,
          image_id: data.image_id, // Keep the image ID same
        }
      );

      console.log("Document updated successfully:", result);
    } catch (error) {
      console.error("Error updating document:", error);
    } */
  };

  const handleDelete = async (v) => {
    console.log(v);
    dispatch(deleteProduct(v));
  };

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
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add To Product
        </Button>
        <Dialog open={open} onClose={handleClose} style={{ maxWidth: "100%" }}>
          <DialogTitle>Product</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <form action="" onSubmit={handleSubmit}>
              <TextField
                autoFocus
                required
                margin="dense"
                id="username"
                name="username"
                label="username Address"
                type="username"
                fullWidth
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="standard"
              />
              <span style={{ color: "red" }}>
                {errors.username && touched.username ? errors.username : null}
              </span>
              <TextField
                autoFocus
                required
                margin="dense"
                id="description"
                name="description"
                label="description"
                type="text"
                fullWidth
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="standard"
              />
              <span style={{ color: "red" }}>
                {errors.description && touched.description
                  ? errors.description
                  : null}
              </span>

              <TextField
                id="color"
                name="color"
                label="color"
                type="color"
                fullWidth
                value={values.color}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="standard"
              />
              <span style={{ color: "red" }}>
                {errors.color && touched.color ? errors.color : null}
              </span>

              <TextField
                autoFocus
                required
                margin="dense"
                id="price"
                name="price"
                label="price"
                type="number"
                fullWidth
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="standard"
              />
              <span style={{ color: "red", display: "block" }}>
                {errors.price && touched.price ? errors.price : null}
              </span>

              <label style={{ display: "block" }}>sell in product </label>
              <div>
                <Checkbox
                  id="sale"
                  name="sale"
                  checked={values.sale}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <label htmlFor="sale">Sale</label>
              </div>

              <label style={{ display: "block" }}> Categories</label>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="bags"
                      name="bags"
                      checked={values.bags}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  }
                  label="Bags"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      id="shoes"
                      name="shoes"
                      checked={values.shoes}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  }
                  label="Shoes"
                />
              </div>

              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="kids"
                      name="kids"
                      checked={values.kids}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      control={<Checkbox defaultChecked color="secondary" />}
                    />
                  }
                  label="Kids"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      id="clothes"
                      name="clothes"
                      checked={values.clothes}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  }
                  label="Clothes"
                />
              </div>

              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      id="man"
                      name="man"
                      checked={values.man}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  }
                  label="Man"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      id="women"
                      name="women"
                      checked={values.women}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      // checked={this.state.open}
                    />
                  }
                  label="Women"
                />
              </div>

              <TextField
                autoFocus
                required
                margin="dense"
                id="brand"
                name="brand"
                label="brand"
                type="text"
                fullWidth
                value={values.brand}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="standard"
              />
              <span style={{ color: "red", display: "block" }}>
                {errors.brand && touched.brand ? errors.brand : null}
              </span>

              <label style={{ display: "block" }}> Size</label>

              <FormControlLabel
                control={
                  <Checkbox
                    id="s"
                    name="s"
                    checked={values.s}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
                label="S"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    id="m"
                    name="m"
                    checked={values.m}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
                label="M"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="l"
                    name="l"
                    checked={values.l}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
                label="L"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="xl"
                    name="xl"
                    checked={values.xl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
                label="XL"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    id="xxl"
                    name="xxl"
                    checked={values.xxl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                }
                label="XXL"
              />

              <TextField
                autoFocus
                required
                margin="dense"
                id="sku"
                name="sku"
                label="sku"
                type="text"
                fullWidth
                value={values.sku}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="standard"
              />
              <span style={{ color: "red", display: "block" }}>
                {errors.sku && touched.sku ? errors.sku : null}
              </span>
              <input
                id="image"
                name="image"
                type="file"
                // value={values.image}
                onChange={(event) =>
                  setFieldValue("image", event.target.files[0])
                }
                onBlur={formik.handleBlur}
              />
              <span style={{ color: "red" }}>
                {formik.errors.image && formik.touched.image
                  ? formik.errors.image
                  : null}
              </span>

              <img
                width={"150px"}
                height={"150px"}
                src={
                  values.hasOwnProperty("image") && values.image != ""
                    ? URL.createObjectURL(values.image)
                    : values.image_preview?.href
                }
              />

              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={modifiedProductData}
            columns={columns}
            getRowId={(row) => row.id}
            // initialState={{
            //   pagination: {
            //     paginationModel: { page: 0, pageSize: 5 },
            //   },
            // }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </React.Fragment>
    </>
  );
}

export default ProductAdmin;
